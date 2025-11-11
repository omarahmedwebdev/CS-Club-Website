const express = require('express');
const router = express.Router();
const Player = require('../models/PlayerModel');

// Sample puzzle set (with their answers). 
// For a real environment, store them in DB or somewhere else.
const QUESTIONS = [
  {
    id: 1,  
    text: "Find the sum of the integers from 1 to 50 inclusive.",
    answer: "1275"
  },
  {
    id: 2,
    text: "I am a two-digit number. My digits add up to 7. If you swap my digits, the new number is 9 more than the original. What’s the original number?",
    answer: "34"
  },
  {
    id: 3,
    text: `Three statements:
    1) Statement 2 is false.
    2) Statement 3 is false.
    3) Statement 1 is true.
    Exactly one of these is true. Which one is it?`,
    answer: "2" // Statement #2 is the correct one
  },
  {
    id: 4,
    text: `Two statements:
    1) “Exactly one of these two statements is false.”
    2) “Both statements are false.”
    Which statement is actually true (or are both)?`,
    answer: "1" // Only statement #1 is true
  },
  {
    id: 5,
    text: `Two in a corner, one in a room, zero in a house, but one in a shelter. What am I?`,
    answer: "R" // The letter "R"
  }
];

// Store a single "game state" in memory or DB
// For production, you'd have a more robust game state management with multiple lobbies, etc.
let gameStartTime = null;
let gameEndTime = null;
const GAME_DURATION_MS = 20 * 60 * 1000; // 20 minutes in ms
const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes in ms

// Utility to pick a random question
function getRandomQuestion() {
  const randIndex = Math.floor(Math.random() * QUESTIONS.length);
  return QUESTIONS[randIndex];
}

// ------------- ROUTES -----------------

// 1) Start or reset the game (enter the names, etc.)
router.post('/startGame', async (req, res) => {
  try {
    // req.body might look like:
    // {
    //   players: [
    //     { name: "Player1", role: "crewmate" },
    //     { name: "Player2", role: "imposter" },
    //     ...
    //   ]
    // }

    // Clear existing players in the DB if resetting
    await Player.deleteMany({});

    // Create new players
    const { players } = req.body;
    await Player.insertMany(players);

    // Reset timer
    gameStartTime = new Date();
    gameEndTime = new Date(gameStartTime.getTime() + GAME_DURATION_MS);

    return res.json({ message: 'Game started', gameEndTime });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

// 2) Get a random question
router.get('/getQuestion', (req, res) => {
  // Could do logic here to ensure each user doesn't see the same question multiple times, etc.
  const question = getRandomQuestion();
  return res.json({ question });
});

// 3) Submit an answer
router.post('/submitAnswer', async (req, res) => {
  try {
    const { name, questionId, answer } = req.body;

    // Check if game ended
    if (Date.now() >= gameEndTime) {
      return res.status(400).json({ message: 'Game already ended!' });
    }

    const player = await Player.findOne({ name });
    if (!player) return res.status(404).json({ message: 'Player not found' });
    
    // Check 5-min cooldown
    const now = new Date();
    if (
      player.lastSolveTime &&
      now - player.lastSolveTime < COOLDOWN_MS
    ) {
      const remainingSec = Math.ceil(
        (COOLDOWN_MS - (now - player.lastSolveTime)) / 1000
      );
      return res.status(400).json({
        message: `You must wait another ${remainingSec} seconds before solving again.`
      });
    }

    // Find the question in our set
    const puzzle = QUESTIONS.find((q) => q.id === questionId);
    if (!puzzle) {
      return res.status(400).json({ message: 'Invalid question ID' });
    }

    // Check correctness
    if (puzzle.answer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      // Mark the solve
      player.tasksSolved += 1;
      player.lastSolveTime = new Date();
      await player.save();

      // If player is an imposter, sabotage one random crewmate
      if (player.role === 'imposter') {
        const crewmates = await Player.find({ role: 'crewmate', tasksSolved: { $gt: 0 } });
        if (crewmates.length > 0) {
          // pick a random crewmate
          const randomIndex = Math.floor(Math.random() * crewmates.length);
          const targetCrewmate = crewmates[randomIndex];
          // sabotage: remove one solved task
          targetCrewmate.tasksSolved -= 1;
          if (targetCrewmate.tasksSolved < 0) {
            targetCrewmate.tasksSolved = 0;
          }
          await targetCrewmate.save();
        }
      }

      return res.json({ correct: true, message: 'Correct answer!' });
    } else {
      return res.json({ correct: false, message: 'Wrong answer!' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
});

// 4) Fetch dashboard data
router.get('/dashboard', async (req, res) => {
  try {
    const players = await Player.find().sort({ tasksSolved: -1 });
    const now = new Date();
    let timeLeft = gameEndTime - now;
    if (timeLeft < 0) timeLeft = 0;

    // Check if game ended early because all tasks are solved
    // For demonstration, let's say "target tasks" is some fixed number 
    // or you can define "finishing tasks" logic as you see fit
    // e.g. a total of X tasks that need to be solved by all crewmates combined.
    const totalCrewmateTasks = players
      .filter(p => p.role === 'crewmate')
      .reduce((sum, p) => sum + p.tasksSolved, 0);

    // Suppose each crewmate needs to solve 2 tasks, 
    // total needed = (# of crewmates * 2). If that's done, game ends.
    const totalCrewmates = players.filter(p => p.role === 'crewmate').length;
    const tasksRequired = totalCrewmates * 2;
    let gameOver = false;
    let winners = '';

    if (totalCrewmateTasks >= tasksRequired) {
      // Crewmates finished tasks before 20 min
      gameOver = true;
      winners = 'Crewmates';
    } else if (timeLeft <= 0) {
      // Time is up, check if they finished
      if (totalCrewmateTasks >= tasksRequired) {
        gameOver = true;
        winners = 'Crewmates';
      } else {
        gameOver = true;
        winners = 'Imposters';
      }
    }

    return res.json({
      players,
      timeLeft,
      gameOver,
      winners
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

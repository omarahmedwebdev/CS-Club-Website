// Committees.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import committeesVideo from '../images/committeesbg.mp4';

const committees = [
  { title: 'Web Development', img: '../images/WEB_DEV.webp', desc: 'Dive into the world of web technologies and bring creative ideas to life! The Web Development Committee is where members learn to design, develop, and deploy user-friendly websites, creating stunning digital experiences from scratch.' },
  { title: 'Cybersecurity & Networks', img: '../images/CS.webp', desc: 'Guard the digital realm! The Cybersecurity & Networks Committee equips members with essential skills to protect data, prevent cyber threats, and build resilient networks, making them the first line of defense in an interconnected world.' },
  { title: 'Robotics', img: '../images/ROBO.webp', desc: 'Build the future, one robot at a time! The Robotics Committee explores the exciting field of robotics, where members engineer, program, and operate robots, turning ideas into intelligent machines.' },
  { title: 'Data Science & AI Development', img: '../images/AI.webp', desc: 'Transform data into insights and machines into thinkers! The Data Science & AI Development Committee dives into machine learning, artificial intelligence, and data analysis, equipping members to harness the power of data for innovative solutions.' },
  { title: 'Competitive Programming', img: '../images/CS.webp', desc: 'Ready, set, code! The Competitive Programming Committee sharpens problem-solving skills through coding challenges and competitions, such as ACPC & EOI, preparing members to think fast, code faster, and conquer complex problems with finesse.' },
];

const Committees = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleExploreClick = () => {
    setIsFullScreen(true);
    setCurrentPage(0);
    document.body.style.overflow = 'hidden';
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    document.body.style.overflow = 'auto';
  };

  const goToNextPage = () => {
    if (currentPage < committees.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      handleExitFullScreen();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="committees" className="video-background-about">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/path/to/committees-poster.jpg"
        className="background-video-about"
      >
        <source src={committeesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        onClick={handleExploreClick}
        className="min-h-screen flex flex-col items-center justify-center text-white overflow-hidden w-full duration-300 cursor-pointer"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 committeesText duration-300 hover:text-white md:text-7xl">
            Explore Our Committees
          </h1>
          <span className="opacity-80 text-2xl">Click Anywhere To Explore</span>
        </div>
      </div>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={currentPage}
              className="w-full min-h-screen flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${committees[currentPage].img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <motion.div className="bg-black bg-opacity-60 p-10 rounded-xl shadow-lg max-w-lg text-center">
                <h1 className="text-5xl font-bold text-deepskyblue mb-4">
                  {committees[currentPage].title}
                </h1>
                <p className="text-lg mb-5">{committees[currentPage].desc}</p>
              </motion.div>
            </motion.div>

            <div className="absolute bottom-10 flex justify-center items-center gap-5">
              <button
                onClick={goToPreviousPage}
                className="text-white bg-deepskyblue py-2 px-4 rounded-lg font-bold disabled:opacity-50"
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                onClick={goToNextPage}
                className="text-white bg-deepskyblue py-2 px-4 rounded-lg font-bold"
              >
                {currentPage === committees.length - 1 ? 'Exit' : 'Next'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;

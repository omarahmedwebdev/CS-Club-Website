import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../images/LOGO-WHITE-NAV.png';
import Home from "./Home";
import Footer from "../components/Footer";

const CoursePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  const episodes = [
    {
      id: 0,
      title: "Session 1 - Part 1",
      videoUrl: "https://youtu.be/T-7VXjTm4Io?si=AsjDr_3_M1cTlfwP", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 1,
      title: "Session 1 - Part 2",
      videoUrl: "https://youtu.be/-mWME1NFJCs?si=ahB9spl-tVQq0UQP", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 2,
      title: "Session 1 - Part 3",
      videoUrl: "https://youtu.be/pMGskQ9bVOU?si=BRWSTGgwTJ5st6J0", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 3,
      title: "Upsolve 1 - Part 1",
      videoUrl: "https://youtu.be/jV54NCbhAEo?si=rrqHkm_q-b2ejfQ_", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 4,
      title: "Upsolve 1 - Part 2",
      videoUrl: "https://youtu.be/WCwV-Dt9zFw?si=WriGM3xzT3rKcYhe", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 5,
      title: "Upsolve 1 - Part 3",
      videoUrl: "https://youtu.be/RZnvm55JlFw?si=Is-_UUaokY2M26wN", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 6,
      title: "Upsolve 1 - Part 4",
      videoUrl: "https://youtu.be/rZty_EYP-VE?si=dhSYGbSgpSjjuF1F", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 7,
      title: "Session 2 - Part 1",
      videoUrl: "https://youtu.be/P4t6Fl9bExA?si=dtxbR7I5TVkwOpz_", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 8,
      title: "Session 2 - Part 2",
      videoUrl: "https://youtu.be/IWODYVhK9Xw?si=1MbzWEJv73T4kyIk", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 9,
      title: "Session 2 Practice - Part 1",
      videoUrl: "https://youtu.be/avRdf0xRDfA?si=wOCpZqLsIT4nEETm", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 10,
      title: "Session 2 Practice - Part 2",
      videoUrl: "https://youtu.be/HfZUI-5WRbk?si=gYUbZbz0JuVx9JMh", // Original short YouTube link
      type: "youtube",
    },
    {
      id: 11,
      title: "Loops Upsolve",
      videoUrl: "https://youtu.be/B_3m2G5G5b0", // Original short YouTube link
      type: "youtube",
    },
  ];

  const formatYoutubeUrl = (url) => {
    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop().split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // If already in embed format
  };

  const renderVideoPlayer = (episode) => {
    if (episode.type === "youtube") {
      const embedUrl = formatYoutubeUrl(episode.videoUrl);
      return (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={episode.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return <p>Invalid video type</p>; // Fallback for unsupported types
  };

  return (
    <>
      <header className={`shadow-md z-10 p-2 flex justify-around bg-black text-white`}>
        {/* Logo (toggles menu on mobile) */}
        <img 
          src={logo} 
          alt="logo" 
          className='navLogo cursor-pointer' 
          onClick={toggleMenu}
        />
  
        {/* Navigation */}
        <nav className={`w-5/12 pt-4 ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <ul className='flex justify-between'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><HashLink to="/about#team" smooth>Team</HashLink></li>
            <li><HashLink to="/roboticsworkshop" smooth>Robotics Workshop</HashLink></li>
            <li></li>
          </ul>
        </nav>
  
        {/* Overlay menu for mobile */}
        {isMenuOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center"
            onClick={toggleMenu}
          >
            <ul className='text-white text-lg space-y-6'>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><HashLink to="/about#team" smooth onClick={toggleMenu}>Team</HashLink></li>
              <li><HashLink to="/roboticsworkshop" smooth>Robotics Workshop</HashLink></li>
              <li></li>
            </ul>
          </div>
        )}
      </header>
  
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-black text-cyan-500 shadow-lg">
          <div className="p-6 font-mono text-lg text-center border-y border-cyan-500">
            Course Episodes
          </div>
          <ul
            className="flex flex-col overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 80px)" }} // Set scrollable area
          >
            {episodes.map((episode) => (
              <li
                key={episode.id}
                className={`p-4 cursor-pointer hover:bg-cyan-500 hover:text-black ${
                  currentEpisode === episode.id ? "bg-cyan-500 text-black" : ""
                }`}
                onClick={() => setCurrentEpisode(episode.id)}
              >
                {episode.title}
              </li>
            ))}
          </ul>
        </aside>
  
        {/* Video Content */}
        <main className="flex-grow bg-gradient-to-b from-cyan-500 to-blue-900 text-white p-4">
          <div className="mx-auto">
            <div style={{height: "80vh"}} className="aspect-w-16 rounded-lg overflow-hidden shadow-lg">
              {renderVideoPlayer(episodes[currentEpisode])}
            </div>
            <h1 className="mt-6 text-2xl font-mono">{episodes[currentEpisode].title}</h1>
          </div>
        </main>
      </div>
  
      <Footer/>
    </>
  );
  
};

export default CoursePage;

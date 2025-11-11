// App.js

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Regular (non-lazy) imports
import Home from './pages/Home';
import About from './pages/About';
import AboutPage from './pages/AboutPage';
import Training from './pages/Training';
import Committees from './pages/Committees';
import ClubApp from './pages/ClubApp';
import CPT from './pages/CPT';
import Footer from './components/Footer';

// List all the video sources that appear on the Home page or sub-sections
import homeVideo from './images/background.mp4';
import aboutVideo from './images/aboutbg.mp4';
import committeesVideo from './images/committeesbg.mp4';
import RoboticsCoursePage from './pages/RoboticsWorkshop';

// import cptVideo from './images/something.mp4'; // if CPT has its own big background video

function App() {
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);

  useEffect(() => {
    // List of videos to preload (adjust as needed)
    const videoUrls = [
      homeVideo,
      aboutVideo,
      committeesVideo,
      // cptVideo
    ];

    // Helper: Preload a single video
    const preloadVideo = (src) => {
      return new Promise((resolve, reject) => {
        const vid = document.createElement('video');
        vid.src = src;
        vid.preload = 'auto'; 
        vid.oncanplaythrough = () => resolve(src);
        vid.onerror = (err) => reject(err);
      });
    };

    // Preload all videos concurrently
    Promise.all(videoUrls.map(preloadVideo))
      .then(() => {
        // Once all are loaded enough to play, show the site
        setAllVideosLoaded(true);
      })
      .catch((err) => {
        console.error('Video preload error:', err);
        // Even if there's an error, you could show the site anyway
        setAllVideosLoaded(true);
      });
  }, []);

  // Global loader: displayed until all videos are preloaded
  if (!allVideosLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white flex-col">
        <div className="spinner mb-5"></div>
        <h1 className="text-cyan-500 font-bold text-3xl text-center animate-pulse">
          Loading Your Experience...
        </h1>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* "Soon" type pages */}
          <Route path="/apply" element={<ClubApp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/roboticsworkshop" element={<RoboticsCoursePage />} />

          {/* Home route containing nested content */}
          <Route
            path="/"
            element={
              <div className="homepage text-white min-h-screen">
                <Home />
                <About />
                <Committees />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

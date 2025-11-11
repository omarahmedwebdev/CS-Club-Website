// Home.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import { GoArrowRight } from 'react-icons/go';
import homeVideo from '../images/background.mp4';

export default function Home() {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/path/to/home-poster.jpg"
        className="background-video"
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <NavBar />

      <main className="main-section flex justify-center items-center text-center">
        <div className="centerContent">
          <h1 className="text-8xl glowtext mb-10 mt-2">
            Turn
            <br />Your <span className="lol">Thoughts</span> into
            <br />
            <span>&lt;Code/&gt;</span>
          </h1>
          <a className="exploremore" href="#about">
            Explore
            <GoArrowRight className="i" />
          </a>
        </div>
      </main>
    </div>
  );
}

// Soon.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import videoSrc from '../images/committeesbg.mp4';

export default function Soon() {
  // If you want the “Soon” page to block until its video is loaded,
  // either add it to global preload or handle locally. Typically
  // you can do local approach for non-home pages.

  return (
    <div className="video-background-soon">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/path/to/soon-poster.jpg"
        className="background-video"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="main-section flex justify-center items-center text-center">
        <div className="centerContent">
          <h1 className="text-8xl glowtext-soon mb-10 mt-2">
            This page will be Available <span className="text-red-600">Soon!</span>
          </h1>
          <Link className="exploremore" to="/">
            Return Home
            <GoArrowRight className="i" />
          </Link>
        </div>
      </main>
    </div>
  );
}

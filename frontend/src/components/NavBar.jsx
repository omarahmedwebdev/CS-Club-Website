import React, { useState } from 'react';
import logo from '../images/LOGO-WHITE-NAV.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`shadow-md z-10 p-5 flex justify-around`}>
      {/* Logo (toggles menu on mobile) */}
      <img 
        src={logo} 
        alt="obour stem school computer science club" 
        className='navLogo cursor-pointer' 
        onClick={toggleMenu}
      />

      {/* Navigation */}
      <nav className={`w-5/12 pt-4 ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <ul className='flex justify-between'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><HashLink to="/about#team" smooth>Team</HashLink></li>
          <li><Link to="/roboticsworkshop">Robotics Workshop</Link></li>
          <li>
            <Link 
              className='text-white bg-cyan-500 rounded-sm opacity-100 border px-2 py-2 border-solid border-cyan-600 hover:text-white hover:border-white hover:bg-transparent' 
              to="/training"
            >
              CP Training
            </Link>
          </li>
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
            <li><Link to="/roboticsworkshop" onClick={toggleMenu}>Robotics Workshop</Link></li>
            <li>
              <Link 
                className='text-black font-mono bg-gradient-to-b from-cyan-300 to-white px-2 py-3 opacity-100 rounded-sm transition-all duration-300 hover:text-black' 
                to="/training"
                onClick={toggleMenu}
              >
                CP Training
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

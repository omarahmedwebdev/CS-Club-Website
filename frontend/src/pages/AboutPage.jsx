import React, { useEffect, useState } from 'react';
import Vision from "../images/vision.png";
import Mission from "../images/Mission.png";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const teamImages = {
  "Omar Beshir": require('../images/heads/Head Image.jpg'),
  "Moaz Ezzat": require('../images/heads/IMG_20240828_212339_177 - Moaz Ezzat Abdlrahman Ahmed Ahmed.jpeg'),
  "Salma Badr": require('../images/heads/20240603_164812 - Salma Badr.jpg'),
  "Sama Hany": require('../images/heads/IMG_9271 - Sama Hany Salah Salama Eliwa Shedid Shedid.jpeg'),
  "Sharl Michael": require('../images/heads/FB_IMG_23 - sharl michael.jpg'),
  "Zeyad Mohamed": require('../images/heads/IMG_20241220_150616 - Ziad Mohamed Abdelhay Mohamed Afify Abdelaal Abdelaal.jpg'),
  "Habiba Abdelhady": require('../images/heads/IMG-20240723-WA0042 - Habiba Abdelhady.jpg'),
  "Maryam Amr": require('../images/heads/Maryam.jpg'),
  "Saif Elsayed": require('../images/heads/me - Saif Elsayed.jpg'),
  "Mohamed Hatem": require('../images/heads/Hashish.jpeg'),
  "Eyad Khairat": require('../images/heads/eyad khairat head.jpeg'),
  "Ahmed Rafaat": require('../images/heads/IMG_20240525_170837 - Ahmed Raafat Abdel Sattar Awad Awad.jpg'),
  "Ahmed Mostafa": require('../images/heads/AM.jpeg'),
  "Youssef Akram": require('../images/heads/YA.png'),
  "Ahmed Samy": require('../images/heads/AS.jpeg'),
  "Abdelaziz": require('../images/heads/ABDELAZIZ.jpeg'),
  "Omar Zahi": require('../images/heads/zahi.jpeg'),
  "Mohamed Ibrahim": require('../images/heads/Ibrahim.jpg'),
};

export default function AboutPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full items-center 
                  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
                  overflow-y-scroll snap-y snap-mandatory 
                  ${show ? 'opacity-100' : 'opacity-0'}
                  transition-all duration-700 ease-in-out`}
    >
      <section className="snap-start min-h-screen items-center justify-between text-slate-100">
        <NavBar />

        {/* ====== OUR VISION ====== */}
        <div className="text-3xl font-bold tracking-wider flex-none writing-vertical">
          <p className="text-center text-5xl py-2">OUR VISION</p>
        </div>
        <div className="flex space-y-6 w-11/12 mx-auto">
          <p className="textvision mt-16 width-60">
            We aspire to forge a trailblazing community of emerging tech visionaries, 
            united by their passion for computer science and driven to spark real-world transformation. 
            By cultivating both competition prowess and innovative research, 
            our club aims to produce groundbreaking solutions that shape the future 
            and leave a profound, positive impact on society.
          </p>
          <img
            id="visionimage"
            src={Vision}
            alt="vision-icon"
            style={{ width: "27%" }}
            className="mx-auto"
          />
        </div>
      </section>

      {/* ====== OUR MISSION ====== */}
      <section className="snap-start min-h-screen items-center justify-between px-8 lg:px-16 text-slate-100 transition-transform duration-700">
        <div className="text-3xl font-bold tracking-wider flex-none writing-vertical">
          <p className="text-center text-5xl py-5">OUR MISSION</p>
        </div>
        <div className="flex-1 text-left space-y-6">
          <img src={Mission} alt="mission-icon" className="w-1/4 mx-auto" />
          <p className="text-2xl text-center">
            Our mission is to cultivate a collaborative ecosystem where students of all skill levels 
            can ignite their passion for technology. By offering mentorship, hands-on projects, tutorials, 
            and high-powered competitions, we empower newcomers to build strong foundations while inspiring 
            advanced members to explore new frontiers in innovation. We champion curiosity, creativity, 
            and social responsibility, equipping tomorrow’s tech leaders to turn bold ideas into game-changing realities.
          </p>
        </div>
      </section>

      {/* ====== OUR TEAM ====== */}
      <section
        id="team"
        className="snap-start h-fit flex flex-col items-center justify-center px-8 lg:px-16 text-slate-100 space-y-8 pb-6 pt-4"
      >
        <h2 className="text-5xl font-bold">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            ["Omar Beshir", "President", "Omar Beshir"],
            ["Moaz Ezzat", "Vice-President", "Moaz Ezzat"],
            ["Salma Badr", "Vice-President", "Salma Badr"],
            ["Sama Hany", "Vice-President", "Sama Hany"],
            ["Sharl Michael", "AI & Data Science Head", "Sharl Michael"],
            ["Zeyad Mohamed", "AI & Data Science Vice-Head", "Zeyad Mohamed"],
            ["Habiba Abdelhady", "Competitive Programming Head", "Habiba Abdelhady"],
            ["Maryam Amr", "Competitive Programming Vice-Head", "Maryam Amr"],
            ["Seif Elsayed", "Competitive Programming Vice-Head", "Saif Elsayed"],
            ["Mohamed Hatem", "Cyber Security Head", "Mohamed Hatem"],
            ["Eyad Khairat", "Robotics Head", "Eyad Khairat"],
            ["Ahmed Rafaat", "Web Development Head", "Ahmed Rafaat"],
            ["Abdelaziz Waleed", "Web Development Vice-Head", "Abdelaziz"],
            ["Omar Zahi", "Research Head", "Omar Zahi"],
            ["Ahmed Samy", "Graphic Design Head", "Ahmed Samy"],
            ["Ahmed Mostafa", "Marketing Head", "Ahmed Mostafa"],
            ["Youssef Akram", "PR Head", "Youssef Akram"],
            ["Mohamed Ibrahim", "HR Vice-Head", "Mohamed Ibrahim"],
          ].map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 text-center rounded-lg shadow-lg p-6 
                         transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-slate-600 mb-4">
                {teamImages[member[2]] ? (
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url("${teamImages[member[2]]}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="rounded-full"
                    ></div>
                  </div>
                ) : (
                  <p className="text-xs text-red-500">Image not found</p>
                )}
              </div>
              <h3 className="text-xl font-semibold">{member[0]}</h3>
              <p className="text-sm">{member[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

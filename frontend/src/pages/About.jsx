// About.jsx
import React from 'react';
import aboutVideo from '../images/aboutbg.mp4';

export default function About() {
  return (
    <div id="about" className="video-background-about">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/path/to/about-poster.jpg"
        className="background-video-about"
      >
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="aboutcontent">
        <h2>Obour Computer Science Club's Core Offerings & Activities</h2>
        <hr />
        {/* Quad Chart */}
        <div className="quad-chart">
          <div className="flexy">
            {/* Card 1 */}
            <div className="group cardy relative overflow-hidden px-6 pt-7 pb-7 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 my-3 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10">
              <span className="absolute -top-5 z-0 h-5 w-5 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[50]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flexinside flex items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-75 group-hover:bg-sky-400">
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </span>
                  <h3 className="ml-3 text-2xl">Tutorials & Workshops</h3>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-100 transition-all duration-300 group-hover:text-black">
                  <p>
                    Offering a series of tutorials covering essential topics in computer
                    science, such as robotics, artificial intelligence, and web development.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cardy relative overflow-hidden px-6 pt-7 pb-7 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 my-3 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10">
              <span className="absolute -top-5 z-0 h-5 w-5 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[50]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flexinside flex items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-75 group-hover:bg-sky-400">
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </span>
                  <h3 className="ml-3 text-2xl">Conducting CS Research</h3>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-100 transition-all duration-300 group-hover:text-black">
                  <p>
                    Producing college-level high-quality research to be published in recognized
                    academic journals in the field of computer science.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flexy">
            {/* Card 3 */}
            <div className="group cardy relative overflow-hidden px-6 pt-7 pb-7 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 my-3 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10">
              <span className="absolute -top-5 z-0 h-5 w-5 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[50]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flexinside flex items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-75 group-hover:bg-sky-400">
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                      />
                    </svg>
                  </span>
                  <h3 className="ml-3 text-2xl">Developing Projects</h3>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-100 transition-all duration-300 group-hover:text-black">
                  <p>
                    Developing impactful projects, such as mobile applications, websites, 
                    or educational tools that address real-world challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group cardy relative overflow-hidden px-6 pt-7 pb-7 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 my-3 hover:shadow-2xl sm:mx-auto sm:rounded-lg sm:px-10">
              <span className="absolute -top-5 z-0 h-5 w-5 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[50]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flexinside flex items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-75 group-hover:bg-sky-400">
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </span>
                  <h3 className="ml-3 text-2xl">Competitions Preparation</h3>
                </div>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-100 transition-all duration-300 group-hover:text-black">
                  <p>
                    Providing members with opportunities to engage in both local and international 
                    competitions and hackathons, such as ACPC and EOI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Quad Chart */}
      </div>
    </div>
  );
}

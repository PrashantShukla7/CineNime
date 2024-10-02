import React from "react";

const AboutPage = () => {
  document.title = "CineNime | About"
    return (
        <div className="bg-[#222831] min-h-screen px-[10%] py-10">
            <h1 className="text-5xl text-center text-white font-black">
                About
            </h1>

            <p className="text-gray-300 text-2xl text-center my-3">
                Welcome to my movie application! This project was created as an
                educational exercise to explore React development and to serve
                as a portfolio piece.
            </p>

            <div className="bg-[#393E46] p-5 rounded-xl my-10 hover:shadow-[4px_4px_8px_4px_rgba(0,0,0,.2)] duration-300">
                <h1 className="text-yellow-400 text-2xl font-semibold mb-3">
                    Project Overview
                </h1>
                <p className="text-gray-300">
                    This app demonstrates the use of React to create an interactive movie browsing experience. It
                    showcases skills in frontend development, API integration,
                    and user interface design.
                </p>
            </div>

            <div className="bg-[#393E46] p-5 rounded-xl my-10 hover:shadow-[4px_4px_8px_4px_rgba(0,0,0,.2)] duration-300">
                <h1 className="text-yellow-400 text-2xl font-semibold mb-3">
                    Project Highlights
                </h1>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Responsive design for all devices</li>
                    <li>Integration with movie databases</li>
                    <li>Dynamic search functionality</li>
                    <li>Detailed movie information pages</li>
                </ul>
            </div>

            <div className="bg-[#393E46] p-5 rounded-xl my-10 hover:shadow-[4px_4px_8px_4px_rgba(0,0,0,.2)] duration-300">
                <h1 className="text-yellow-400 text-2xl font-semibold mb-3">
                    {" "}
                    <span className="ri-code-s-slash-line mr-3"></span>Tech
                    Stack
                </h1>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>React JS for UI components</li>
                    <li>Vite for fast builds and development</li>
                    <li>Redux Toolkit for state management</li>
                    <li>Axios for API requests</li>
                    <li>React Infinite Scroll Component</li>
                    <li>React Player for video playback</li>
                    <li>Tailwind CSS for styling</li>
                </ul>
            </div>

            <div className="bg-[#393E46] p-5 rounded-xl my-10 hover:shadow-[4px_4px_8px_4px_rgba(0,0,0,.2)] duration-300">
                <h1 className="text-yellow-400 text-2xl font-semibold mb-3">
                    {" "}
                    <span className="ri-user-line mr-3"></span>About Me
                </h1>
                <p className="text-gray-300 mb-3">
                    Hello! I'm Prashant Shukla, an enthusiastic Web Developer
                    passionate about creating immersive digital experiences.
                    CineNime showcases my proficiency in modern web
                    development practices and my ability to integrate various
                    technologies into a cohesive application.
                </p>
                <p className="text-gray-300">
                    This project demonstrates my skills in building responsive,
                    interactive applications that not only look great but also
                    provide a seamless user experience. It reflects my
                    commitment to using cutting-edge tools and my capability to
                    manage complex state, handle asynchronous operations, and
                    create smooth, infinite-scroll interfaces.
                </p>
                <div className="links flex items-center gap-x-5 mt-3">
                  <a href="https://github.com/PrashantShukla7" className="bg-gray-900 hover:bg-gray-800 cursor-pointer duration-200 px-4 py-2 rounded-full text-white"><i className="ri-github-fill mr-2"></i> Github</a>
                  <a href="https://www.linkedin.com/in/prashant-shukla7/" className="bg-blue-700 hover:bg-blue-600 cursor-pointer duration-200 px-4 py-2 rounded-full text-white"> <i className="ri-linkedin-fill"></i> Linkedin</a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

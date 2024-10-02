import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#222831] px-[10%] py-5">
            <h1 className="text-5xl text-white font-black text-center mt-5">
                Contact with Me
            </h1>
            <div className="bg-[#393E46] p-5 rounded-xl my-10 hover:shadow-[4px_4px_8px_4px_rgba(0,0,0,.2)] duration-300 text-blue-400 text-xl">
                <h1 className="text-yellow-400 text-2xl font-semibold mb-3">
                    Get In Touch
                </h1>
                <ul>
                    <li>
                        <a
                            href="mailto:pshukla3924@gmail.com"
                            className="block mt-3 hover:text-blue-300 "
                        >
                            <i className="mr-3 ri-mail-line"></i>{" "}
                            pshukla3924@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/PrashantShukla7"
                            className="block mt-3 hover:text-blue-300 "
                        >
                            <i className="mr-3 ri-github-line"></i> Github
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/prashant-shukla7/"
                            className="block mt-3 hover:text-blue-300 "
                        >
                            <i className="mr-3 ri-linkedin-line"></i>Linkedin
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;

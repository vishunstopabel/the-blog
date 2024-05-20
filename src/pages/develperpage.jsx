import React from "react";
import img from "../assets/logo.png";


const twitterSvg = (
    <svg
        className="w-6 h-6 text-blue-500 hover:text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.15 4.916 4.916 0 003.179 9.723a4.904 4.904 0 01-2.228-.616c-.054 2.28 1.582 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.419A9.867 9.867 0 010 21.543a13.936 13.936 0 007.548 2.213c9.055 0 14.002-7.504 14.002-14.002 0-.213-.005-.425-.014-.636A10.005 10.005 0 0024 4.557z" />
    </svg>
);

const instagramSvg = (
    <svg
        className="w-6 h-6 text-pink-500 hover:text-pink-700"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.587 2.163 15.207 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.012 7.053.07 5.777.13 4.606.422 3.635 1.393c-.971.971-1.262 2.142-1.323 3.418C2.012 8.332 2 8.741 2 12c0 3.259.012 3.668.07 4.947.061 1.276.352 2.447 1.323 3.418.971.971 2.142 1.262 3.418 1.323C8.332 21.988 8.741 22 12 22c3.259 0 3.668-.012 4.947-.07 1.276-.061 2.447-.352 3.418-1.323.971-.971 1.262-2.142 1.323-3.418.058-1.279.07-1.688.07-4.947 0-3.259-.012-3.668-.07-4.947-.061-1.276-.352-2.447-1.323-3.418-.971-.971-2.142-1.262-3.418-1.323C15.668.012 15.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
);

const githubSvg = (
    <svg
        className="w-6 h-6 text-gray-800 hover:text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.091-.746.082-.731.082-.731 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.49.998.107-.774.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.467-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.29-1.23 3.29-1.23.653 1.653.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.292 0 .32.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

function DeveloperPage() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen gap-20">
            <div className="flex flex-col items-center w-full mb-8 rounded-2xl">
                <h1 className="text-5xl font-bold mb-4">Developer Information</h1>
                <h2 className="text-3xl text-gray-700">Hey there, I am Vish</h2>
            </div>
            <div className="flex flex-wrap justify-around w-full max-w-4xl">
                <div className="flex flex-col items-start w-full lg:w-2/3 p-4 mb-8 lg:mb-0 bg-white rounded-lg shadow-lg">
                    <h3 className="text-3xl font-semibold mb-4">About Me</h3>
                    <p className="text-xl text-gray-600">
                        I specialize in developing and maintaining complex React applications, utilizing optimized state management techniques like Redux and Context API to enhance performance and user experience.
                    </p>
                    <p className="text-xl text-gray-600 mt-2">
                        I create responsive and interactive UI components with React, React Router, and Material-UI, ensuring cross-browser compatibility and adherence to accessibility standards.
                    </p>
                    <p className="text-xl text-gray-600 mt-2">
                        I thrive in collaborative, Agile environments, where I deliver high-quality features, conduct code reviews, and mentor junior developers to foster growth and innovation.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                    <img src={img} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Details</h3>
                    <div className="text-lg text-gray-600">
                        <p className="mb-1"><strong>Name:</strong> Vishwa Paste</p>
                        <p><strong>Age:</strong> 19 Years</p>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <a href="https://twitter.com/@vishwa_paste" aria-label="Twitter">
                            {twitterSvg}
                        </a>
                        <a href="https://www.instagram.com/pastevishwa/" aria-label="Instagram">
                            {instagramSvg}
                        </a>
                        <a href="https://github.com/vishunstopabel" aria-label="GitHub">
                            {githubSvg}
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-2xl items-center w-full lg:w-2/3 p-4 mb-8 bg-white shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Thank You, Mentor!</h3>
            <img src="https://pbs.twimg.com/profile_images/1724344976715468800/MasktpKz_400x400.jpg" alt="Mentor" className="w-32 h-32 rounded-full mb-4" />
            <p className="text-xl text-gray-600 mb-4">
                I am incredibly grateful for the guidance and support provided by my mentor. Your invaluable advice and encouragement have significantly contributed to my growth and success.
            </p>
            <h4 className="text-2xl font-semibold mb-2">Get Sir's all cources in</h4>
            <p className="text-lg text-gray-600"><a href="https://chaicode.com">chaicode</a></p>
        </div>
        </div>
    );
}

export default DeveloperPage;

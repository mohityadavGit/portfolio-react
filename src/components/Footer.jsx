import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-white text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div className="flex space-x-8">
            <a
              href="https://x.com/MohitYadav1920"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300 text-gray-400 hover:text-white"
            >
              <FaSquareXTwitter className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohityadav1920/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300 text-blue-500 hover:text-blue-400"
            >
              <CiLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/mohityadavGit"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center space-y-3">
          <p className="text-gray-400 text-sm">
            Built with <span className="text-red-500">❤</span> by Mohit Yadav{" "}
            <span role="img" aria-label="India Flag">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="India Flag"
                className="inline w-5 h-3 ml-1"
              />
            </span>
          </p>

          <p className="text-green-400 text-sm italic">
            Proudly Made in India{" "}
            <span role="img" aria-label="India Flag">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="India Flag"
                className="inline w-5 h-3 ml-1"
              />
            </span>
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
              />
            </svg>
            <span>India</span>
          </div>

          <p className="text-gray-400 text-xs italic max-w-md">
            “Arise, awake and stop not till the goal is reached.” — Swami
            Vivekananda
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

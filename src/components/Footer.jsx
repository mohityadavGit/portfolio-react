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
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-2">
            Built with <span className="text-red-500">❤</span> by Mohit Yadav
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

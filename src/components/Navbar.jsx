import { useState } from "react";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menue, setMenue] = useState(true);
  const items = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Education",
    },
    {
      id: 5,
      link: "Skills",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black border-b border-gray-800 backdrop-blur-md bg-opacity-90 p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name Section */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <a
              href="https://drive.google.com/drive/folders/1WR80n5E0q4ZNX8z1N3LhyWob6R5eEwa6?usp=sharing"
              target="_blank"
            >
              <img
                src={logo}
                alt="Profile"
                className="relative w-12 h-12 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-lg hover:animate-spin"
              />
            </a>
          </div>

          <div className="ml-3">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-green-300 to-white bg-clip-text text-transparent hover:scale-105 transform transition-transform">
              <span className="text-red-500 hover:text-red-400 transition-colors">
                M
              </span>
              ohit{" "}
              <span className="text-red-500 hover:text-red-400 transition-colors">
                Y
              </span>
              adav
            </h1>
            <p className="text-sm font-medium bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setMenue(!menue)}
          className="md:hidden cursor-pointer relative group p-2 rounded-lg transition-all duration-300 hover:bg-white/5"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          {menue ? (
            <CiMenuBurger className="block md:hidden text-white text-3xl cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text" />
          ) : (
            <IoMdClose className="block md:hidden text-white text-3xl cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text" />
          )}
        </div>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8">
            {items.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  to={item.link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white font-medium text-sm tracking-wide cursor-pointer transition-all duration-300 hover:scale-105 group flex items-center"
                >
                  {item.link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/drive/folders/1WR80n5E0q4ZNX8z1N3LhyWob6R5eEwa6?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {!menue && (
          <div className="absolute top-[4rem] left-0 right-0 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-filter backdrop-blur-lg h-[calc(100vh-4rem)] w-full md:hidden transition-all duration-300 ease-in-out z-40 border-t border-gray-700/20">
            <ul className="flex flex-col items-center justify-center h-full space-y-4 text-white">
              {items.map((item) => (
                <li key={item.id} className="relative group w-64 text-center">
                  <Link
                    onClick={() => setMenue(!menue)}
                    to={item.link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block px-6 py-3 text-lg font-medium rounded-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300 ease-in-out"
                  >
                    {item.link}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-1/2 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import image from "../assets/image.png";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter, FaGithub, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Main() {
  return (
    <>
      <div
        name="home"
        className="flex flex-col md:flex md:flex-row justify-between items-center min-h-[calc(100vh-5.5rem)] overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative"
      >
        {/* Floating Tech Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["💻", "⚛️", "🚀", "🔥", "⚡"].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl opacity-20"
              initial={{ y: -20, x: Math.random() * window.innerWidth }}
              animate={{
                y: window.innerHeight + 20,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Left side of main */}
        <div className="text-white backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl p-8 w-full md:w-[calc(100vw-20rem)] mt-10 order-2 md:m-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-medium text-lg"
          >
            Welcome to My Portfolio
          </motion.span>

          <div className="flex space-x-1 md:text-4xl text-2xl font-bold text-center md:justify-start justify-center items-center pt-5">
            <h1 className="text-white">I Am a </h1>
            <ReactTyped
              className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={45}
              backSpeed={30}
              loop
              backDelay={1000}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-invert max-w-none mt-6"
          >
            <ReactTyped
              className="text-gray-300"
              strings={[
                `          <br />
          I am a full-stack developer with a passion for creating innovative
          solutions to complex problems. I have a strong background in computer
          science and a deep understanding of software development principles.
          <br />

  I have experience working with technologies and frameworks like 
  <em><b> MongoDB, Express, React, Node.js,   JavaScript, Java, Mongoose, TailwindCSS</b></em>, among others.

          <br />I am always looking for new challenges and opportunities to grow
          as a developer. I am excited to work on projects that make a
          difference in the world and to collaborate with other talented
          developers.
          <br />
        `,
              ]}
              typeSpeed={10}
              backSpeed={false}
              loop={false}
            />
          </motion.div>

          {/* Social media icons with enhanced styling */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 px-5 m-0">
            <div className="flex flex-col justify-center items-center pt-5 mb-4">
              <h3 className="text-emerald-400 font-semibold mb-4">
                Available On
              </h3>
              <ul className="flex space-x-8 text-3xl pt-2">
                <motion.li whileHover={{ scale: 1.2, rotate: -5 }}>
                  <a
                    href="https://x.com/MohitYadav1920"
                    target="_blank"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaSquareXTwitter />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 360 }}>
                  <a
                    href="https://www.linkedin.com/in/mohityadav1920/"
                    target="_blank"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <CiLinkedin />
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 5 }}>
                  <a
                    href="https://github.com/mohityadavGit"
                    target="_blank"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub />
                  </a>
                </motion.li>
              </ul>
            </div>

            <div className="w-full ml-0 border-t border-white/10 md:hidden my-6" />

            <div className="flex flex-col justify-center items-center pt-5 m-0">
              <h3 className="text-emerald-400 font-semibold mb-4">
                Tech Stack
              </h3>
              <ul className="flex space-x-8 text-3xl pt-2">
                <motion.li
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-green-500"
                >
                  <SiMongodb />
                </motion.li>
                <motion.li whileHover={{ scale: 1.2, rotate: 360 }}>
                  <SiExpress />
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 2 }}
                  className="text-blue-400"
                >
                  <FaReact />
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="text-green-400"
                >
                  <FaNodeJs />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right div with enhanced image styling */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative w-full md:w-[calc(100vw-20rem)] flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative w-48 md:w-64 aspect-square">
            {/* Rainbow gradient ring animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-500 to-emerald-400 rounded-full animate-spin-slow blur-md" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-2xl opacity-20" />

            {/* Image container with effects */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full filter contrast-125 brightness-110 hover:scale-110 transition-all duration-300"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Main;

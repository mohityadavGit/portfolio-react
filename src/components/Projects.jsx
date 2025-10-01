import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSocketdotio } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "HomeHive – Full Stack Rental Platform",
      description:
        "Complete full-stack rental platform inspired by Airbnb, with features like property listing, booking system, and user authentication. Built using MVC architecture and RESTful APIs.",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "Node.js", icon: <FaNode className="text-green-600" /> },
        { name: "EJS", icon: "EJS" },
      ],
      link: "https://homehive-app-production.up.railway.app/",
    },
    {
      title: "Real-Time Chat App – Full-Stack Messaging Platform",
      description:
        "Developed a real-time chat application using React, Node.js, Express, MongoDB, and Socket.IO. Enabled instant messaging via WebSocket communication and designed REST APIs for user and chat handling. Built a dynamic and responsive UI with React and deployed using Vercel and Railway.",
      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNode className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "Socket.IO",
          icon: <SiSocketdotio className="text-gray-300" />,
        },
      ],
      link: "https://sandesh-sarthi.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern and interactive portfolio website showcasing projects and skills. Features smooth animations, responsive design, and dynamic content rendering.",
      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
        {
          name: "JavaScript",
          icon: <IoLogoJavascript className="text-yellow-400" />,
        },
      ],
      link: "https://portfolio-react-beryl.vercel.app/",
    },
    {
      title: "Myntra Clone",
      description:
        "A fully functional clone of Myntra's e-commerce platform with responsive design and interactive user interface. Implemented features like product listing, filtering, and cart functionality.",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <IoLogoJavascript className="text-yellow-400" />,
        },
      ],
      link: "https://myntra-clone-beryl.vercel.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <TbBrandNextjs />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 
                hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* 🔗 Live Demo Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-5 py-2 border border-green-500 hover:border-blue-500 text-blue-400 rounded-full text-sm font-semibold
                        hover:bg-blue-500 hover:text-white transition duration-300 animate-pulse "
                    >
                      🔗 Live Demo
                    </a>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-gray-900/50 px-3 py-1.5 rounded-full
                        border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="text-xl">{tech.icon}</div>
                        <span className="text-gray-400 text-sm">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

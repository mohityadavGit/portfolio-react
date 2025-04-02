import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Projects() {
  const projects = [
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
      link: "#", // Add your project link here
    },
    {
      title: "Airbnb Full Stack",
      description:
        "Complete full-stack Airbnb clone with features like property listing, booking system, and user authentication. Built with MVC architecture and RESTful API design.",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "Node.js", icon: <FaNode className="text-green-600" /> },
        { name: "EJS", icon: "EJS" },
      ],
      link: "#", // Add your project link here
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
      link: "#", // Add your project link here
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
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

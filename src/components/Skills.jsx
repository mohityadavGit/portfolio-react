import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiMysql, SiFramer } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl text-orange-500" />,
      description:
        "Building semantic and accessible web structures, focusing on modern HTML5 features and SEO optimization.",
      color: "from-orange-400/20 to-orange-500/20",
      proficiency: 90,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl text-blue-500" />,
      description:
        "Creating responsive layouts with Flexbox, Grid, and modern CSS features like animations and variables.",
      color: "from-blue-400/20 to-blue-500/20",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-5xl text-yellow-400" />,
      description:
        "Implementing interactive features, DOM manipulation, and modern ES6+ features for enhanced user experience.",
      color: "from-yellow-400/20 to-yellow-500/20",
      proficiency: 90,
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl text-cyan-400" />,
      description:
        "Building dynamic UIs with hooks, context API, and state management for scalable applications.",
      color: "from-cyan-400/20 to-cyan-500/20",
      proficiency: 85,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-500" />,
      description:
        "Creating scalable backend services with event-driven architecture and npm ecosystem.",
      color: "from-green-400/20 to-green-500/20",
      proficiency: 80,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-5xl text-gray-500" />,
      description:
        "Developing RESTful APIs and middleware for efficient server-side operations.",
      color: "from-gray-400/20 to-gray-500/20",
      proficiency: 75,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-600" />,
      description:
        "Managing NoSQL databases with aggregation pipelines and mongoose ODM.",
      color: "from-green-500/20 to-green-600/20",
      proficiency: 70,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-5xl text-blue-600" />,
      description:
        "Designing relational databases with optimization for complex queries and transactions.",
      color: "from-blue-500/20 to-blue-600/20",
      proficiency: 75,
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-5xl text-purple-500" />,
      description:
        "Creating smooth animations and transitions for enhanced user interfaces.",
      color: "from-purple-400/20 to-purple-500/20",
      proficiency: 80,
    },
  ];

  return (
    <div
      name="skills"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`h-full p-6 rounded-xl bg-gradient-to-br ${skill.color} backdrop-blur-sm 
                border border-gray-800 hover:border-blue-500/50 
                transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10
                group bg-opacity-90 hover:bg-opacity-100 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div
                    className="p-4 rounded-full bg-gray-800/50 shadow-lg mb-4 
                    group-hover:shadow-blue-500/20 group-hover:scale-110 transition-all duration-300
                    border border-gray-700/50 group-hover:border-blue-500/50
                    relative overflow-hidden"
                  >
                    <div className="relative z-10">{skill.icon}</div>
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 
                    group-hover:text-blue-400 transition-colors relative"
                  >
                    {skill.name}
                    <div
                      className="h-0.5 w-0 group-hover:w-full bg-blue-400/50 
                      absolute bottom-0 left-0 transition-all duration-300"
                    />
                  </h3>

                  <p
                    className="text-gray-400 text-sm group-hover:text-gray-300 
                    transition-colors leading-relaxed"
                  >
                    {skill.description}
                  </p>

                  <div className="w-full mt-4 bg-gray-800/50 h-1 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-blue-400/50 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

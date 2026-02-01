import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiFramer,
  SiPostman,
  SiCanva,
} from "react-icons/si";

/* 🔹 SKILL GROUPS (Cleaner & Honest) */
const skillGroups = [
  {
    title: "Frontend Engineering",
    subtitle: "UI, performance & interaction",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript (ES6+)",
        icon: <IoLogoJavascript className="text-yellow-400" />,
      },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
    ],
  },

  {
    title: "Backend Engineering",
    subtitle: "APIs, architecture & scalability",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "REST APIs", icon: <FaNodeJs className="text-lime-400" /> },
    ],
  },

  {
    title: "Databases & ORM",
    subtitle: "Data modeling & performance",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-400" /> },
    ],
  },

  {
    title: "Tools & Workflow",
    subtitle: "Development & collaboration",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
      {
        name: "Postman / Thunder Client",
        icon: <SiPostman className="text-orange-400" />,
      },
    ],
  },

  {
    title: "Design & Automation",
    subtitle: "Visuals & productivity",
    skills: [
      { name: "Canva", icon: <SiCanva className="text-indigo-400" /> },
      {
        name: "Google Sheets Automation",
        icon: <FaDatabase className="text-green-400" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      name="skills"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Technologies I use to design, build and ship real-world applications
        </p>

        {/* SKILL SECTIONS */}
        <div className="space-y-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {group.title}
              </h3>
              <p className="text-gray-400 mb-8">{group.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full
                      bg-gray-900/60 border border-gray-700
                      hover:border-blue-400 transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

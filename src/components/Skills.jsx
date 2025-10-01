import React from "react";
import { motion } from "framer-motion";

// Icons
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
  SiFramer,
  SiCanva,
  SiTailwindcss,
  SiPostman,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    description:
      "Building semantic and accessible web structures, focusing on modern HTML5 features and SEO optimization.",
    color: "from-orange-400/20 to-orange-500/20",
    proficiency: 90,
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    description:
      "Creating responsive layouts with Flexbox, Grid, and modern CSS features like animations and variables.",
    color: "from-blue-400/20 to-blue-500/20",
    proficiency: 85,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <IoLogoJavascript className="text-5xl text-yellow-400" />,
    description:
      "Implementing interactive features, DOM manipulation, and modern ES6+ features for enhanced user experience.",
    color: "from-yellow-400/20 to-yellow-500/20",
    proficiency: 90,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact className="text-5xl text-cyan-400" />,
    description:
      "Building dynamic UIs with hooks, context API, and state management for scalable applications.",
    color: "from-cyan-400/20 to-cyan-500/20",
    proficiency: 85,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-5xl text-sky-400" />,
    description:
      "Rapid UI development using utility-first CSS framework, enhancing responsiveness and design consistency.",
    color: "from-sky-400/20 to-sky-500/20",
    proficiency: 75,
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: <SiFramer className="text-5xl text-purple-500" />,
    description:
      "Creating smooth animations and transitions for enhanced user interfaces.",
    color: "from-purple-400/20 to-purple-500/20",
    proficiency: 80,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="text-5xl text-white" />,
    description:
      "Building full‑stack web apps with SSR, SSG & API routes using Next.js.",
    color: "from-gray-800/20 to-gray-900/20",
    proficiency: 80,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    description:
      "Creating scalable backend services with event‑driven architecture and npm ecosystem.",
    color: "from-green-400/20 to-green-500/20",
    proficiency: 80,
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress className="text-5xl text-gray-500" />,
    description:
      "Developing RESTful APIs and middleware for efficient server-side operations.",
    color: "from-gray-400/20 to-gray-500/20",
    proficiency: 75,
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: <FaNodeJs className="text-5xl text-lime-500" />,
    description:
      "Designing and consuming RESTful APIs using HTTP methods, middleware, and JSON data structures.",
    color: "from-lime-400/20 to-lime-500/20",
    proficiency: 80,
  },
  {
    name: "NestJS",
    category: "Backend",
    icon: <SiNestjs className="text-5xl text-red-500" />,
    description:
      "Scalable backend development using modular architecture, decorators, and TypeScript with NestJS.",
    color: "from-red-400/20 to-red-500/20",
    proficiency: 80,
  },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    icon: <SiMongodb className="text-5xl text-green-600" />,
    description:
      "Managing NoSQL databases with aggregation pipelines and mongoose ODM.",
    color: "from-green-500/20 to-green-600/20",
    proficiency: 70,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: <SiPostgresql className="text-5xl text-blue-500" />,
    description:
      "Managing relational databases with ACID compliance, indexing, and advanced query support.",
    color: "from-blue-400/20 to-blue-500/20",
    proficiency: 75,
  },
  {
    name: "Prisma ORM",
    category: "Databases",
    icon: <SiPrisma className="text-5xl text-indigo-400" />,
    description:
      "Integrating type-safe database access with Prisma ORM for Node.js & TypeScript apps.",
    color: "from-indigo-400/20 to-indigo-500/20",
    proficiency: 80,
  },

  // Tools & Testing
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <FaGithub className="text-5xl text-black" />,
    description:
      "Version control, pull requests, and repository management using Git and GitHub.",
    color: "from-zinc-400/20 to-zinc-500/20",
    proficiency: 80,
  },
  {
    name: "Thunder Client",
    category: "Tools",
    icon: <SiPostman className="text-5xl text-orange-400" />,
    description:
      "Lightweight API testing directly in VS Code using Thunder Client extension.",
    color: "from-orange-300/20 to-orange-500/20",
    proficiency: 75,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman className="text-5xl text-orange-500" />,
    description:
      "Testing, debugging, and documenting REST APIs for smoother development workflows.",
    color: "from-orange-400/20 to-orange-500/20",
    proficiency: 75,
  },

  // Design
  {
    name: "Canva",
    category: "Design",
    icon: <SiCanva className="text-5xl text-indigo-500" />,
    description:
      "Designing visually appealing presentations, social media graphics, and UI prototypes with ease.",
    color: "from-indigo-400/20 to-indigo-500/20",
    proficiency: 80,
  },

  // Automation & Integration
  {
    name: "Google Sheets Automation",
    category: "Automation & Integrations",
    icon: <FaDatabase className="text-5xl text-green-400" />,
    description:
      "Created automated report cards with formulas, calculated dependent columns, and integrated with Node.js backend using Google Sheets API.",
    color: "from-green-400/20 to-green-500/20",
    proficiency: 85,
  },
];

// Category Icons
const categoryIcons = {
  Frontend: <FaHtml5 className="inline-block mr-2 text-orange-400" />,
  Backend: <FaNodeJs className="inline-block mr-2 text-green-500" />,
  Databases: <FaDatabase className="inline-block mr-2 text-blue-500" />,
  Tools: <FaGithub className="inline-block mr-2 text-gray-800" />,
  Design: <SiCanva className="inline-block mr-2 text-indigo-500" />,
  "Automation & Integrations": (
    <FaDatabase className="inline-block mr-2 text-teal-400" />
  ),
};

function Skills() {
  const groupedSkills = skills.reduce((groups, skill) => {
    const category = skill.category || "Other";
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(skill);
    return groups;
  }, {});

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

        {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-l-4 pl-3 border-blue-500 flex items-center">
              {categoryIcons[category]} {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsInCategory.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`p-6 rounded-xl bg-gradient-to-br ${skill.color} backdrop-blur-md border border-gray-800 hover:border-blue-400 transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-full bg-gray-900 shadow-inner mb-4">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">
                        {skill.description}
                      </p>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

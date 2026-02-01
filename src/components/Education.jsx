import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (Artificial Intelligence)",
      institute: "University of Lucknow",
      year: "2022 – Present",
      score: "9.25 CGPA",
      achievements:
        "Consistently maintained strong academic performance with active involvement in technical and development projects.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Object-Oriented Programming",
        "Web Technologies",
        "Software Engineering",
      ],
      projectsLink: "#projects",
      description:
        "Focused on Full Stack Development, DevOps fundamentals, scalable system design, and modern web technologies.",
      highlight: true,
    },
    {
      degree: "Senior Secondary (12th)",
      field: "Science (PCM)",
      institute: "Ravi Indian Public School, Jhunjhunu, Rajasthan",
      year: "2021 – 2022",
      score: "88.4%",
    },
    {
      degree: "Secondary (10th)",
      field: "",
      institute: "Ravi Indian Public School, Jhunjhunu, Rajasthan",
      year: "2019 – 2020",
      score: "84%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-10 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative border rounded-xl p-6 ${
                edu.highlight
                  ? "bg-gray-800/60 border-blue-500/50"
                  : "bg-gray-800/40 border-gray-700"
              }`}
            >
              {/* Icon */}
              <span className="absolute -left-[22px] top-6 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <FaGraduationCap className="text-white" />
              </span>

              {/* Degree */}
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>

              {/* Field */}
              {edu.field && (
                <p className="text-blue-400 text-sm mt-1">{edu.field}</p>
              )}

              {/* Institute */}
              <p className="text-gray-300 mt-2">{edu.institute}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span className="text-gray-400">{edu.year}</span>
                <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  {edu.score}
                </span>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="mt-3 text-gray-400 text-sm">{edu.description}</p>
              )}

              {/* Achievements */}
              {edu.achievements && (
                <p className="mt-3 text-green-400 text-sm">
                  🏆 {edu.achievements}
                </p>
              )}

              {/* Coursework */}
              {edu.coursework && (
                <div className="mt-4">
                  <p className="text-blue-400 text-sm font-semibold mb-2">
                    Relevant Coursework
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-400 text-xs">
                    {edu.coursework.map((course, i) => (
                      <li key={i}>• {course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects Link */}
              {edu.projectsLink && (
                <a
                  href={edu.projectsLink}
                  className="inline-flex items-center gap-2 mt-4 text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  View Related Projects{" "}
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

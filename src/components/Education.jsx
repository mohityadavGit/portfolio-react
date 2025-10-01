import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      id: 5,
      degree: "10th Standard",
      // field: "Science (PCM)",
      school: "Ravi Indian Public School, Jhunjhunu ,Rajasthan",
      year: "2019 - 2020",
      score: "84.00%",
    },
    {
      id: 1,
      degree: "12th Standard",
      field: "Science (PCM)",
      school: "Ravi Indian Public School, Jhunjhunu ,Rajasthan",
      year: "2021 - 2022",
      score: "88.4%",
      description:
        "Completed senior secondary with focus on Physics, Chemistry, and Mathematics.",
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (Artificial Intelligence)",
      school: "University of Lucknow  ",
      year: "2022 - Still",
      score: "9.25 CGPA",
      description:
        "Currently pursuing B.Tech in Computer Science with focus on Full Stack Development and Data Structures.",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Education Journey
        </motion.h2>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

          {/* Remove min-width container and update card sizes */}
          <div className="w-full">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform translate-x-4 md:-translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 opacity-{0.5px}">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <FaGraduationCap className="text-blue-400 text-xl " />
                    </div>
                  </div>
                </div>

                {/* Update Education Card */}
                <div
                  className={`w-[calc(100%-4rem)] sm:w-72 md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">
                      {edu.field}
                    </p>
                    <p className="text-gray-300 mb-2 text-sm sm:text-base">
                      {edu.school}
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-sm">{edu.year}</span>
                      <span className="text-green-400 font-medium bg-green-400/10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

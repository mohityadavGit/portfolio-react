import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const projects = [
  {
    title: "Dozenier Foundation – NGO Platform",
    tagline: "Production-grade NGO website with real donations & volunteers",
    description:
      "Designed and developed a full-scale NGO platform using Next.js focused on SEO, performance, and accessibility. Implemented secure donation and volunteer forms with scalable backend APIs.",
    tech: ["Next.js", "React", "Node", "MongoDB", "Tailwind"],
    link: "https://www.dozenierfoundation.org",
    preview: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    liveIframe: true, // ONLY THIS PROJECT LIVE
  },

  {
    title: "Real-Time Chat Application",
    tagline: "WebSocket-based messaging with scalable backend",
    description:
      "Built a real-time chat application using Socket.IO with authentication, REST APIs, and scalable backend deployment.",
    tech: ["React", "Node", "MongoDB"],
    link: "https://sandesh-sarthi.vercel.app/",
    preview: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    liveIframe: false,
  },

  {
    title: "HomeHive – Rental Platform",
    tagline: "Full-stack Airbnb-inspired booking system",
    description:
      "Developed a rental platform with property listing, booking, and authentication using MVC architecture and REST APIs.",
    tech: ["Node", "MongoDB"],
    link: "https://homehive-app-production.up.railway.app/",
    preview: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },

  {
    title: "Personal Portfolio Website",
    tagline: "Animated modern portfolio with responsive UI",
    description:
      "Built an interactive portfolio using React, Tailwind, and Framer Motion for smooth animations and responsive layouts.",
    tech: ["React", "Tailwind"],
    link: "https://portfolio-react-beryl.vercel.app/",
    preview: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    liveIframe: false,
  },

  {
    title: "Myntra Clone",
    tagline: "Frontend e-commerce UI with cart and filters",
    description:
      "Created a responsive Myntra UI clone with product listing, filtering, and cart features using HTML, CSS, and JavaScript.",
    tech: ["React"],
    link: "https://myntra-clone-beryl.vercel.app/",
    preview:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmclMjBvbmxpbmV8ZW58MHx8MHx8fDA%3D",
    liveIframe: false,
  },
];

const icons = {
  React: <FaReact className="text-cyan-400" />,
  Node: <FaNode className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-300" />,
  "Next.js": <TbBrandNextjs className="text-white" />,
};

export default function ProjectShowcase() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              onClick={() => setActive(project)}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer p-6 rounded-xl border transition ${
                active.title === project.title
                  ? "border-blue-500 bg-gray-900/60"
                  : "border-gray-700 bg-gray-900/30"
              }`}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-blue-400 mt-1">{project.tagline}</p>
              <p className="text-gray-400 mt-3 text-sm">
                {project.description}
              </p>

              <div className="flex gap-3 mt-4 text-lg">
                {project.tech.map((t) => (
                  <span key={t}>{icons[t]}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT PREVIEW PANEL */}
        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-900"
            >
              {/*  JAB LIVE PREVIEW DIKHAN HOGA TAB  */}
              {active.liveIframe ? (
                <iframe
                  src={active.link}
                  title={active.title}
                  className="w-full h-[420px] border-none"
                  loading="lazy"
                />
              ) : (
                <img
                  src={active.preview}
                  alt={active.title}
                  className="w-full h-[420px] object-cover"
                />
              )}

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{active.title}</h4>
                <p className="text-gray-400 text-sm mb-4">
                  {active.description}
                </p>

                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
                >
                  Open Live →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

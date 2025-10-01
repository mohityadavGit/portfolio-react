import React, { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./Contact.css";

const App = () => {
  const greeted = useRef(false);

  useEffect(() => {
    // Show welcome toast only once
    if (!greeted.current) {
      toast.custom(
        <div className="bg-gray-900 text-blue-400 px-4 py-3 rounded-md shadow-md border border-blue-600 w-[300px] text-sm">
          👋 Welcome to my portfolio! <br />
          If you ever see a blank screen, please refresh the page.
        </div>,
        { duration: 10000, id: "welcome" }
      );
      greeted.current = true;
    }

    // Messages to cycle through
    const messages = [
      "⚠️ If anything appears blank or not loading properly, try refreshing your browser. Slow internet can cause this.",
      "🚀 Refreshing the page often fixes loading issues.",
      "⚡ Make sure you have a stable internet connection for the best experience.",
      "🔄 Having trouble? Try reloading the page.",
    ];

    let index = 0;

    // Always set interval for reminder messages
    const interval = setInterval(() => {
      toast.custom(
        <div className="bg-gray-900 text-purple-400 px-4 py-3 rounded-md shadow-md border border-purple-600 w-[300px] text-sm">
          {messages[index]}
        </div>,
        {
          duration: 8000,
          id: `reminder-${index}`,
        }
      );
      index = (index + 1) % messages.length;
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;

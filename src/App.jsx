import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";

import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

import "./Contact.css";
const App = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Main></Main>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Toaster />
    </>
  );
};

export default App;

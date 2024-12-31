import React from "react";
import "./App.css";
import { Header } from "./pages/header/Header";
import { About } from "./pages/about/About";
import { Skills } from "./pages/skills/Skills";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./pages/footer/Footer";
import { Project } from "./pages/projects/Project";
import { Experience } from "./pages/experience/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Experience/>
      <Footer />
    
    </div>
  );
};

export default App;

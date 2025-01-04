import React, { useEffect } from "react";
import "./skills.css";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import javascriptImage from "../../assets/javascript.png";
import reactjsImage from "../../assets/ReactJS.png";
import bootstrapImage from "../../assets/bootstrap.jpg";
import nextImage from "../../assets/next.png";
import tailwindImage from "../../assets/tailwind.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      // once: true, // Animation happens only once
    });
  }, []);

  return (
    <section id="skills">
      <h2 className="heading" data-aos="fade-up">
        SKILLS
      </h2>
      <div className="skills_container">
        <div className="skillcard" data-aos="flip-left" data-aos-delay="100">
          <img src={htmlImage} alt="HTML Logo" className="skills_image" />
          <span>HTML</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="200">
          <img src={cssImage} alt="CSS Logo" className="skills_image" />
          <span>CSS</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="300">
          <img
            src={javascriptImage}
            alt="JavaScript Logo"
            className="skills_image"
          />
          <span>JAVASCRIPT</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="400">
          <img src={reactjsImage} alt="ReactJS Logo" className="skills_image" />
          <span>REACTJS</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="500">
          <img src={nextImage} alt="MongoDB Logo" className="skills_image" />
          <span>NEXT.JS</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="600">
          <img
            src={bootstrapImage}
            alt="Bootstrap Logo"
            className="skills_image"
          />
          <span>Bootstrap</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="600">
          <img
            src={tailwindImage}
            alt="Bootstrap Logo"
            className="skills_image"
          />
          <span>TAILWIND</span>
        </div>

      </div>
    </section>
  );
};

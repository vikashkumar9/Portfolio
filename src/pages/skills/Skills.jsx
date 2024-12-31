import React, { useEffect } from "react";
import "./skills.css";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import javascriptImage from "../../assets/javascript.png";
import reactjsImage from "../../assets/ReactJS.png";
import MongoDBImage from "../../assets/MongoDB.png";
import bootstrapImage from "../../assets/bootstrap.jpg";
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
          <img src={MongoDBImage} alt="MongoDB Logo" className="skills_image" />
          <span>MONGODB</span>
        </div>
        <div className="skillcard" data-aos="flip-left" data-aos-delay="600">
          <img
            src={bootstrapImage}
            alt="Bootstrap Logo"
            className="skills_image"
          />
          <span>Bootstrap</span>
        </div>
      </div>
    </section>
  );
};

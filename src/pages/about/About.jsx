import React, { useEffect } from "react";
import "./about.css";
import avatar from "../../assets/avatar.png";
import { SocialMedia } from "../../components/SocialmediaIcons/SocialMedia";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration for animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <>
      <section id="about" className="about_container">
        <div className="info-img">
          <div className="information">
            <p className="para" data-aos="fade-up">THIS IS ME</p>
            <h1 data-aos="fade-up">VIKASH</h1>
            <h1 data-aos="fade-up" data-aos-delay="200">Frontend Developer</h1>
            <p className="text-sm text-white" data-aos="fade-up" data-aos-delay="400">
            I'm Vikash, a passionate Front-End Web Developer specializing in creating dynamic and user-friendly web experiences.
          </p>
            <div className="d-grid d-grid gap-2 d-md-blockcol-6">
              <button className="btn btn-warning" type="button" data-aos="zoom-in">
                <a
                  href="https://drive.google.com/uc?export=download&id=1MYZ0fHAmAD026l_5F7m67zhpq3MJg7wq"
                  download
                >
                  Hire Me
                </a>
              </button>
            </div>
          </div>
          <div className="picture" data-aos="fade-left">
            <img src={avatar} className="image" alt="heroimg" />
          </div>
        </div>
        <div className="icons" data-aos="fade-up" data-aos-delay="600">
          <SocialMedia />
        </div>
      </section>
    </>
  );
};
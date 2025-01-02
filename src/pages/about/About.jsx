import React, { useEffect } from "react";
import avatar from "../../assets/avatar.png";
import { SocialMedia } from "../../components/SocialmediaIcons/SocialMedia";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section id="about" className="bg-customGray bg-cover bg-center py-8 w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-around  px-4 md:px-8">
       
        <div className="max-w-md" data-aos="fade-up">
          <p className="text-gray-300 text-lg mb-4">THIS IS ME</p>
          <h1 className="text-white text-4xl font-bold mb-2">VIKASH</h1>
          <h1 className="text-yellow-400 text-3xl font-bold mb-4">Frontend Developer</h1>
          <p className="text-gray-300 text-base mb-6" data-aos="fade-up" data-aos-delay="400">
            I'm Vikash, a passionate Front-End Web Developer specializing in creating dynamic and user-friendly web experiences.
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded shadow-lg transition-all duration-300"
            data-aos="zoom-in"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1MYZ0fHAmAD026l_5F7m67zhpq3MJg7wq"
              download
            >
              Hire Me
            </a>
          </button>
        </div>
        <div className="mt-8 md:mt-0 " data-aos="fade-left">
          <img
            src={avatar}
            alt="heroimg"
            className="w-72 h-72 md:w-88 md:h-88 rounded-full border-8 border-gray-600 hover:shadow-white "
          />
        </div>
      </div>
      <div className="md:flex md:justify-center mx-2 mt-8" data-aos="fade-up" data-aos-delay="600">
        <SocialMedia />
      </div>
    </section>
  );
};

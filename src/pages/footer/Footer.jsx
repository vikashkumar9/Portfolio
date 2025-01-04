import React from "react";
import "./footer.css";
import { SocialMedia } from "../../components/SocialmediaIcons/SocialMedia";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone, FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer_container">
      <h2 className="contact_header">Let's Connect!</h2>
      <div className="flex_conatiner">
        <div className="ph_email">
          <ul>
            <li className="ph">
              <span className="contact_text">
                <FaPhone className="conatct-icon" />
                Phone:
              </span>
              <span>
                <a href="tel:+919306075344">9306075344</a>
              </span>
            </li>
            <li className="email">
              <span className="contact_text">
                <MdOutlineEmail className="conatct-icon" />
                Email:
              </span>
              <a href="mailto:vikashparjapati59@gmail.com">vikashparjapati59@gmail.com</a>

            </li>
            <li className="addres">
              <span className="contact_text">
                <SlLocationPin className="conatct-icon" />
                Address:{" "}
              </span>
              <span>
                <p>Jhajjar (124104), Haryana, India</p>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer_icons">
          <SocialMedia />
        </div>
      </div>
      <p className="motivational_text">"Every great journey begins with a single step."</p>
      <div className="back_to_top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
      <p>© 2024 Vikash</p>
    </div>
  );
};

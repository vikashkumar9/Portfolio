import React from "react";
import "./footer.css";
import { SocialMedia } from "../../components/SocialmediaIcons/SocialMedia";

import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

import { FaPhone } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="footer_container">
      <h2 className="contact_header">You can contact me here:</h2>
      <div className="flex_conatiner">
        <div className="ph_email">
          <ul>
            <li className="ph">
              <span className="contact_text">
                <FaPhone className="conatct-icon" />
                Phone --
              </span>
              <span>
                <a href="tel:9306075344"> +919306075344</a>
              </span>
            </li>
            <li className="email">
              <span className="contact_text">
                <MdOutlineEmail className="conatct-icon" />
                E-mail --{" "}
              </span>
              <span>
                <a href="mailto:vikashparjapati59@gmail.com">
                  vikashparjapati59@gmail.com
                </a>
              </span>
            </li>

            <li className="addres">
              <span className="contact_text">
                <SlLocationPin className="conatct-icon" />
                Address --{" "}
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
      © 2024
    </div>
  );
};

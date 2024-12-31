import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "./socialmedia.css";
export const SocialMedia = () => {
  return (
    <div>
      <div className="social_icons">
        <div className="flex-icon-text ml-2">
          <a href="https://www.instagram.com/parjapati2924/">
            <FaInstagram className="icon1" />
          </a>
          <h5>Instagram</h5>
        </div>
        <div className="flex-icon-text ml-2">
          {" "}
          <a href="https://www.linkedin.com/in/vikash-parjapati-a670371b2/">
            <FaLinkedin className="icon2" />
          </a>
          <h5>Linkdin</h5>
        </div>
        <div className="flex-icon-text ml-2">
          {" "}
          <a href="https://www.facebook.com/vikash.parjapati.58555941">
            <FaFacebook className="icon3" />
          </a>
          <h5>Facebook</h5>
        </div>
        <div className="flex-icon-text ml-2">
          <a href="https://github.com/vikashkumar9">
            <FaGithub className="icon4" />
          </a>
          <h5>Github</h5>
        </div>
      </div>
    </div>
  );
};

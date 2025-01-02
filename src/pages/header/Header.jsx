import React, { useState } from "react";
import logoImage from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const menuClose=()=>{
    setMenuOpen(false);
   }
  return (
    <div >
      <header className="flex items-center justify-between px-6 py-4  bg-customGray shadow-lg ">
        <div className="logo">
          <img src={logoImage} alt="logo" className="h-12 w-12" />
        </div>
        <div>
          <ul
            className={`absolute top-16 z-50 right-0 text-center  bg-customGray shadow-lg w-full pb-4 rounded-lg  duration-300 md:static md:flex md:gap-6 md:shadow-none md:p-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
              onClick={menuClose}
                href="#about"
                className="text-white p-2 hover:text-fuchsia-800 transition-colors duration-200"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
            onClick={menuClose}

                href="#skills"
                className="text-white  p-2 hover:text-fuchsia-800 transition-colors duration-200"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                            onClick={menuClose}

                href="#projects"
                className="text-white  p-2 hover:text-fuchsia-800 transition-colors duration-200"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                            onClick={menuClose}

                href="#contact"
                className="text-white  p-2 hover:text-fuchsia-800 transition-colors duration-200"
              >
                CONTACT ME
              </a>
            </li>
            <li>
              <a
                            onClick={menuClose}

                href="#experience"
                className="text-white  p-2 hover:text-fuchsia-800 transition-colors duration-200"
              >
                EXPERIENCE
              </a>
            </li>
          </ul>
        </div>
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <RxCross1 /> : <IoMdMenu />}
        </button>
      </header>
    </div>
  );
};

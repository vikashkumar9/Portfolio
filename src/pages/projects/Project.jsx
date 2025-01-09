
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCart } from "../../components/projectCart/ProjectCart";
import ecommerceImage from "../../assets/ecomimage.png";
import Restautent from "../../assets/Restaurent.png";

export const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <section id="projects">
    <div className="slider-container project_container py-4 bg-customGray" >
        <h2 className="heading py-4">Projects</h2>
      <Slider {...settings}>
        <div className="relative px-2">
        <ProjectCart
                image={ecommerceImage}
                title="E-commerce Website"
                description="User Authentication: Create accounts with name, email, and password. Secure login for account access.Product Catalog: Display    
                products with images, descriptions, prices. Organize into categories, with filtering options.Search Feature: Quick product search for 
                users to find items easily Shopping Cart: Add products, view, modify, or remove items from the shopping cart.Logout: Secure 
               'Logout' option for users to sign out.Support Channels: Provide customer support through email, chat, and phone for user assistance."
              />
        </div>
       
        <div className="relative px-2 ">
        <ProjectCart
                image={Restautent}
                title="Restaurent Application"
                description=" Utilized Next.js, Node.js, MongoDB, Context API, CSS, Bootstrap, and Material-UI to proficiently develop and maintain a robust restaurant application. Implemented essential functionalities such as menu browsing, cart management, and user authentication (login/logout) to enhance user experience.
  The owner capabilities to add, update, and delete meals, and access a comprehensive list of all meals for management.
 Created a user-friendly interface enabling customers to contact the restaurant through email for inquiries and feedback.
  Integrated a payment option for seamless customer transactions" />
        </div>
      </Slider>
    </div>
    </section>
  );
};



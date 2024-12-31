import React, { useState, useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setResult("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", "0b7be0e4-65fc-4f7f-835a-025f81a7993a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSubmitting(false);
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="px-4 py-8 bg-customGray" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl heading font-bold">Contact Us</h2>
        </div>
      </div>
      <div className="px-6 py-10 bg-customGray">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-white shadow-md p-6 rounded-md" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-customGray mb-4">
              We are here to help you
            </h3>
            {isSubmitting && (
              <div className="text-center text-blue-500">Submitting...</div>
            )}
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  maxLength="35"
                  aria-label="Enter your full name"
                  className="w-full bg-white border border-textRed rounded-md px-4 py-2 text-lg text-customGray focus:ring-2 focus:ring-blue-500 focus:border-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  maxLength="10"
                  aria-label="Enter your mobile number"
                  className="w-full bg-white border border-textRed rounded-md px-4 py-2 text-lg text-customGray focus:ring-2 focus:ring-blue-500 focus:border-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Enter your email address"
                  className="w-full bg-white border border-textRed rounded-md px-4 py-2 text-lg text-customGray focus:ring-2 focus:ring-blue-500 focus:border-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  aria-label="Enter your message"
                  className="w-full bg-white border border-textRed rounded-md px-4 py-2 text-lg text-customGray focus:ring-2 focus:ring-blue-500 focus:border-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-textRed text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send
                </button>
              </div>
            </form>
            {result && (
              <div className="my-4 text-lg text-customGray">{result}</div>
            )}
          </div>
          <div className="md:col-span-7 bg-blue-100 shadow-md p-6 rounded-md" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-customGray mb-4">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <MdOutlineMailOutline className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-customGray font-medium">Email</span>
                  <a
                    href="mailto:vikashparjapati59@gmail.com.com"
                    className="block text-textRed md:text-lg font-bold"
                  >
                    vikashparjapati59@gmail.com.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <FaPhoneAlt className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-customGray font-medium">
                    Customer Support
                  </span>
                  <a
                    href="tel:+919306075344"
                    className="text-textRed text-lg font-bold"
                  >
                    9306075344
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <FaLocationDot className="w-6 h-6 text-textRed" />
                </div>
                <div>
                  <span className="block text-customGray font-medium">
                    Address
                  </span>
                  <p className="text-gray-900 text-base">
                    7X Fintech Pvt Limited, Main Road, Jhajjar, Haryana, 124103
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

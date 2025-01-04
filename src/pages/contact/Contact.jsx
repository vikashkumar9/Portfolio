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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
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
    <section id="contact" className="overflow-x-hidden bg-customGray">
      <div className="px-4 py-8 " data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading ">Contact Us</h2>
        </div>
      </div>
      <div className="px-6 py-10 bg-customGray">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bg-lightGray opacity-45 shadow-md p-6 rounded-md" data-aos="fade-right">
            <h3 className="text-xl font-semibold text-black mb-4">
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
                  className="w-full bg-white border border-yellow-500 rounded-md px-4 py-2 text-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  maxLength="10"
                  className="w-full bg-white border border-yellow-500 rounded-md px-4 py-2 text-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-yellow-500 rounded-md px-4 py-2 text-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-white border border-yellow-500 rounded-md px-4 py-2 text-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send
                </button>
              </div>
            </form>
            {result && (
              <div className="my-4 text-lg text-gray-700">{result}</div>
            )}
          </div>
          <div className="md:col-span-7 bg-lightGray shadow-md p-6 rounded-md" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-black mb-4">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <MdOutlineMailOutline className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <span className="block text-yellow-500 font-medium">Email</span>
                  <a
                    href="mailto:vikashparjapati59@gmail.com"
                    className="block text-gray-900 text-sm font-bold"
                  >
                    vikashparjapati59@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <FaPhoneAlt className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <span className="block text-yellow-500 font-medium">
                    Customer Support
                  </span>
                  <a href="tel:+919306075344" className="text-gray-900 text-lg font-bold">
                    9306075344
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <FaLocationDot className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <span className="block text-yellow-500 font-medium">
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

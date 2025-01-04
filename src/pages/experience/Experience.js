import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Abtusworld",
      duration: "06, 2023 - 11, 2023",
      responsibilities: [
        "Collaborated with a team to design and implement responsive and user-friendly web applications using React.js and Tailwind CSS.",
        "Developed reusable UI components to streamline project development and improve maintainability.",
        "Optimized application performance, reducing load times and improving user experience.",
        "Worked closely with backend teams to integrate APIs and ensure seamless functionality.",
        "Gained hands-on experience in Git for version control and Agile methodologies for efficient project management.",
      ],
    },
    {
      role: "Frontend Developer (Full-Time)",
      company: "Abtusworld",
      duration: "11, 2023 - Present",
      responsibilities: [
        "Led the development of scalable front-end architecture for various projects, leveraging React.js, Redux, and Next.js.",
        "Transitioned projects from traditional CSS frameworks to Tailwind CSS, improving productivity and design consistency.",
        "Created dynamic and interactive user interfaces, enhancing user engagement and satisfaction.",
        "Ensured cross-browser compatibility and responsiveness across devices.",
        "Mentored junior developers, promoting best practices and code quality standards.",
        "Contributed to product deployment on Netlify and Vercel, ensuring optimized hosting and performance.",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section id="experience">
    <div className="max-w-7xl mx-auto p-6 lg:p-12 bg-customGray">
      <h2 className="heading py-4">Experience</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="mb-10 bg-lightGray shadow-2xl rounded-lg p-8 border-2 border-gray-300 transition-all transform hover:scale-105 hover:shadow-xl duration-500"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-semibold text-black hover:text-blue-600 cursor-pointer mb-3">
            {experience.role}
          </h2>
          <p className="text-gray-900 font-medium text-xl">{experience.company}</p>
          <p className="text-gray-900 text-sm mb-4">{experience.duration}</p>
          <div className=" text-gray-300 space-y-2">
            {experience.responsibilities.map((responsibility, i) => (
              <p key={i}>{responsibility}</p>
            ))}
          </div>
        </div>
      ))}
    </div></section>
  );
};


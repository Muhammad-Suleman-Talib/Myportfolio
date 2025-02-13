import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      "name": "Frontend Master",
      "role": "Frontend Developer",
      "url": "https://www.",
      "start": "January 2024",
      "end": "Present",
      "shortDescription": [
        "Gained experience working on a large-scale frontend codebase, focusing on creating visually appealing and responsive UI components.",
        "Worked extensively with Next.js, React, and TypeScript to build dynamic and maintainable web applications.",
        "Collaborated closely with a team of developers and designers to ensure a seamless user experience.",
        "Represented the company in client meetings, discussing frontend requirements and delivering impactful solutions."
      ]
    },
    {
      "name": "YouTube",
      "role": "Frontend Content Creator",
      "url": "https://www.youtube.com",
      "start": "April 2024",
      "end": "Present",
      "shortDescription": [
        "Started a YouTube channel to share knowledge and create engaging tutorials on Next.js, React, and modern frontend technologies.",
        "Built and showcased over 50 frontend projects, including portfolios, dashboards, and e-commerce websites.",
        "Grew an audience by consistently sharing high-quality and informative content.",
        "Collaborated with leading tech brands to promote modern frontend tools and frameworks."
      ]
    },
    {
      "name": "GIAIC",
      "role": "Senior Student Team Member",
      "url": "https://www.giaic.com",
      "start": "September 2024",
      "end": "Present",
      "shortDescription": [
        "Contributed to mentoring and guiding junior students in learning frontend development with modern technologies.",
        "Helped in organizing workshops and coding sessions focused on Next.js, TypeScript, and Tailwind CSS.",
        "Engaged in team discussions to enhance the learning experience for students at GIAIC."
      ]
    },
    {
      "name": "ISTE",
      "role": "Frontend Web Developer",
      "url": "https://www.linkedin.com",
      "start": "November 2024",
      "end": "November 2025",
      "shortDescription": [
        "Developed modern and performant frontend interfaces for a variety of internal and client projects.",
        "Worked extensively with JavaScript, TypeScript, Next.js, and Tailwind CSS to create responsive and interactive web applications.",
        "Collaborated daily with cross-functional teams to ensure smooth integration of frontend and backend systems."
      ]
    },
    {
      "name": "Muhammad Suleman",
      "role": "Founder",
      "url": "https://www.linkedin.com",
      "start": "November 2024",
      "end": "November 2025",
      "shortDescription": [
        "Founded a web hosting company, focusing on creating a user-friendly interface for customers to manage their hosting services.",
        "Successfully onboarded over 300 customers, delivering seamless user experiences through an intuitive frontend design.",
        "Grew the business until graduation, after which it was sold to another company."
      ]
    }
  ]
  
  
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;

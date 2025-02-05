import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/p1.png",
      projectName: "Iphone-Store",
      projectLink: "https://iphone-store-online.vercel.app/",
      projectDescription:
        "iPhone Store Online offers a seamless shopping experience for the latest Apple products, including iPhones and accessories. Enjoy a modern design, secure checkout, and a fully responsive interface for effortless browsing.",
      projectTech: [
        "Nexjs",
        "Tailwindcss",
        "Sanity",
        "MockApi",
        "Stripe",
        "Zustand",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://iphone-store-online-5m9dknlen.vercel.app/",
      },
    },
    {
      image: "/p2.png",
      projectName: "Food-Tuck",
      projectLink: "https://food-tuck-my.vercel.app/",
      projectDescription:
        "Food Tuck – Your go-to online food hub, offering a delicious variety of meals with a seamless ordering experience. Enjoy a modern, user-friendly design with quick navigation and secure checkout.",
      projectTech: [
        "Next.js",
        "Sanity",
        "Tailwindcss",
        "Hakaton project",
        "favourate food",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://food-tuck-my.vercel.app/",
      },
    },
    {
      image: "/p3.png",
      projectName: "Resume-Builder",
      projectLink: "https://resume-builder-zeta-beige.vercel.app/",
      projectDescription:
        "Resume Builder – A sleek and intuitive platform to create professional resumes effortlessly. Customize your resume with ease, add your skills, and generate a polished document in minutes.",
      projectTech: [
        "html",
        "css",
        "javascript",
        "styled-components",
        
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://resume-builder-zeta-beige.vercel.app/",
      },
    },
    {
      image: "/p4.png",
      projectName: "Learning App",
      projectLink: "https://starlearning.netlify.app/",
      projectDescription:
        "Star Learning – An interactive and user-friendly platform designed for seamless learning experiences. Explore engaging courses, intuitive navigation, and a responsive design for effortless access anytime, anywhere.",
      projectTech: [
        "html",
        "css",
        
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://starlearning.netlify.app/",
      },
    },
    {
      image: "/p6.png",
      projectName: "Lamborghini Landing Page",
      projectLink: "https://lamborganipk.netlify.app/",
      projectDescription:
        "Lamborgani PK – A stylish and modern website offering a seamless browsing experience. Explore premium content with a sleek UI, fast performance, and full responsiveness for all devices.",
      projectTech: [
        "html",
        "css",
        "javascript",
      'UI/UX',
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://lamborganipk.netlify.app/",
      },
    },
    {
      image: "/p5.png",
      projectName: "Dressing.Pk",
      projectLink: "https://dresssingpk.netlify.app/",
      projectDescription:
        "Dressing PK – A modern and stylish online store offering trendy fashion choices with a seamless shopping experience. Browse the latest collections with a sleek UI, fast performance, and full responsiveness.",
      projectTech: [
        "html",
        "css",
        "javascript",
        "UI/UX",
        "Styled Components",
       
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://dresssingpk.netlify.app/",
      },
    },
    {
      image: "/p7.png",
      projectName: "Nike AirMax Landing Page",
      projectLink: "https://shoespk.netlify.app/",
      projectDescription:
        "Nike Air Max – Stylish, comfortable, and built with Air cushioning for ultimate support. Perfect for sports, casual wear, and all-day comfort.",
      projectTech: [
        "html",
        "css",
        "javascript",
        "UI/UX",
        "Styled Components",
        
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://shoespk.netlify.app/",
      },
    },
    {
      image: "/p8.png",
      projectName: "Ecommerce Shop",
      projectLink: "https://shopecommercepk.netlify.app/",
      projectDescription:
        "Shop Ecommerce PK – A modern and user-friendly online store offering a seamless shopping experience with fast performance and full responsiveness.",
      projectTech: [
        "html",
        "css",
        "javascript",
        "UI/UX",
        "Styled Components",
        
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://shopecommercepk.netlify.app/",
      },
    },
   
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item " key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Muhammad Suleman, and I am passionate about designing and building intuitive, user-friendly web interfaces.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://food-tuck-one.vercel.app" className="link" target="_blank">
              Resturant App
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my YouTube channel, where I demonstrate how to build
            full-stack applications.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://resume-builder-ten.vercel.app.com"
            >
              Resume Builder
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            {/* <li className="about-grid-info-list-item">React Native</li> */}
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            {/* <li className="about-grid-info-list-item">Redux Toolkit</li> */}
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">JavaScript</li>

          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/my.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

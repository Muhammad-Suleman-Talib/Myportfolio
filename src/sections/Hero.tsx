import Button from "@/components/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Hero() {
  const texts = [
    "Seamless interfaces",
    "Responsive websites",
    "Frontend Master",
    "Awesome experiences",
  ];
  
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Flag to track typing vs clearing
  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Continue typing the current text
        setDisplayedText((prevText) => prevText + texts[textIndex][charIndex]);
  
        if (charIndex === texts[textIndex].length - 1) {
          setIsTyping(false); // Stop typing, start clearing after a delay
        } else {
          setCharIndex((prevIndex) => prevIndex + 1); // Continue typing character by character
        }
      }
    }, 150); // Speed of typing (adjust to speed up/slow down typing)
  
    const clearingTimeout = setTimeout(() => {
      if (!isTyping) {
        setDisplayedText(""); // Clear the text
        setCharIndex(0); // Reset charIndex
        setIsTyping(true); // Start typing the next text
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle to next text
      }
    }, 1500); // Wait for 1.5 seconds before clearing the text after typing is done
  
    return () => {
      clearInterval(typingInterval); // Cleanup interval on component unmount
      clearTimeout(clearingTimeout); // Cleanup clearing timeout
    };
  }, [charIndex, textIndex, isTyping, texts]);
  
  
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Muhammad <span style={{color:'#f3ff0b'}}>Suleman</span>
      </motion.h2>
      <motion.h1
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
          <div className="typing-container">
      <h1 className="typing-text">
      {displayedText}
      </h1>
    </div>
      </motion.h1>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I’m a frontend developer with a strong focus on creating top-tier digital experiences. My expertise lies in designing products that are both accessible and centered around the needs of users. Currently, I’m part of a dynamic team dedicated to delivering solutions that prioritize user experience while maintaining high standards of functionality and design.
        <Link href="https://www.linkedin.com/in/muhammad-suleman-a049902b5/" target="_blank" className="link">
          Linked IN
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Let's connect with us!"
          link="/resume"
        />
      </motion.div>
    </div>
  );
}

export default Hero;

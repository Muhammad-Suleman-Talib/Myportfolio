import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src="favicon.ico"  // Replace with your image URL
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
            }}
            exit={{
              scale: 2,
            }}
            style={{ width: '100px', height: '100px' }}  // Adjust the size of the image
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;

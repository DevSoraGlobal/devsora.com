
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = [
  "DEV", "DES", "DEVS", "DEVO", "DEVSOR", "DEVSORA"
];

const LoadingScreen = ({ onExited }: { onExited: () => void }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index === texts.length - 1) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Hold the final text for a moment
      return;
    }

    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1));
    }, 200); // Glitch effect speed

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onExited}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h1
            key={index}
            className="font-headline morpheus-text text-center text-7xl sm:text-9xl md:text-[150px] font-bold tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {texts[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;


"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen2 = ({ onExited }: { onExited: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Time the second screen is visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onExited}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2 
            className="text-center text-2xl sm:text-3xl font-headline uppercase tracking-widest text-primary/80 max-w-4xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          >
            From Vision to Reality, We’re Shaping the Future of Learning
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen2;

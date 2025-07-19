
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreen2Props {
  onExited: () => void;
}

export default function LoadingScreen2({ onExited }: LoadingScreen2Props) {
  const [visible, setVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start entry animation
    setIsAnimating(true);

    const exit = () => {
      if (!isExiting) {
        setIsExiting(true);
        setTimeout(() => {
          setVisible(false);
          onExited();
        }, 1000); // Animation duration
      }
    };
    
    const handleScroll = () => {
        if (window.scrollY > 10) {
          exit();
        }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('scroll', handleScroll);

    // Auto-exit timer
    const timer = setTimeout(exit, 750);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [isExiting, onExited]);

  if (!visible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed inset-0 bg-black z-[99] flex items-center justify-center transition-opacity duration-1000 ease-in-out",
        isExiting ? "opacity-0" : "opacity-100"
    )}>
      <h2 className={cn(
          "font-headline font-bold text-primary text-center text-[5vw] md:text-[4vw] max-w-4xl px-4 transition-all duration-700 ease-out",
          isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
      )}>
        Code. Create. Collaborate. Shaping Skills Together
      </h2>
    </div>
  );
}

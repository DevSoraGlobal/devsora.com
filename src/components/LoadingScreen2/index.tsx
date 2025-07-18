
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreen2Props {
  onExited: () => void;
}

export default function LoadingScreen2({ onExited }: LoadingScreen2Props) {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exit = () => {
      if (!isExiting) {
        setIsExiting(true);
        setTimeout(() => {
          setVisible(false);
          onExited();
        }, 1000); 
      }
    };
    
    const handleScroll = () => {
        if (window.scrollY > 10) {
          exit();
        }
    };

    document.body.style.overflow = 'hidden'; // Prevent scroll on main content while this is visible

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(exit, 2000);

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
          "font-headline font-bold text-white text-center text-[5vw] md:text-[4vw] max-w-4xl px-4 transition-all duration-700 ease-out",
          isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
      )}>
        Code. Create. Collaborate. Shaping Skills Together
      </h2>
    </div>
  );
}

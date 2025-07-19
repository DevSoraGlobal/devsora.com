
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onExited: () => void;
}

export default function LoadingScreen({ onExited }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);

    // Auto-exit timer
    const timer = setTimeout(exit, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isExiting, onExited]);

  if (!visible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed inset-0 bg-black z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out",
        isExiting ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
    )}>
      <h1 className={cn(
          "font-headline font-bold text-primary text-[10vw] md:text-[8vw] transition-all duration-700 ease-out",
          isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100"
      )}>
        DEVSORA
      </h1>
    </div>
  );
}

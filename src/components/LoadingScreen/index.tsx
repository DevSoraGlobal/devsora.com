
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && visible) {
        setIsExiting(true);
        setTimeout(() => {
            setVisible(false);
        }, 1000); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Also hide after a delay in case user doesn't scroll
    const timer = setTimeout(() => {
         if (visible) {
            setIsExiting(true);
            setTimeout(() => {
                setVisible(false);
            }, 1000);
         }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed inset-0 bg-black z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out",
        isExiting ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
    )}>
      <h1 className={cn(
          "font-headline font-bold text-white text-[10vw] md:text-[8vw] transition-all duration-700 ease-out",
          isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100"
      )}>
        DEVSORA
      </h1>
    </div>
  );
}

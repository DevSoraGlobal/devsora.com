
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleScroll = () => {
    if (hasMounted) {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hasMounted]);

  const parallaxStyle = hasMounted ? { transform: `translateY(${offsetY * 0.5}px)` } : {};

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80"
        style={{ 
          ...parallaxStyle,
          backgroundImage: "url('/hero-bg-img.png')",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="font-extrabold font-headline mb-4 morpheus-text tracking-heading">
          DEVSORA
        </h1>
          <p className="max-w-2xl text-muted-foreground mb-8 font-semibold tracking-body">
          "THE AI POWERED ED-TECH PLATFORM."
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/learn" passHref>
            <Button size="lg" className="text-lg px-8 py-6 tracking-body">Start Learning</Button>
          </Link>
          <Link href="/explore" passHref>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 tracking-body">
              Alpha Platform
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

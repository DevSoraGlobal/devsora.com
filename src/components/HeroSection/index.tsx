"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundImage: "url('https://placehold.co/1920x1080.png')",
        }}
        data-ai-hint="futuristic abstract"
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-7xl md:text-9xl font-extrabold font-headline tracking-tighter mb-4 morpheus-text">
          DEVSORA
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 font-normal">
          From strategy to execution, Devsora is your partner in mastering technology and shaping your future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/learn" passHref>
            <Button size="lg" className="text-lg px-8 py-6">Start Learning</Button>
          </Link>
          <Link href="/explore" passHref>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

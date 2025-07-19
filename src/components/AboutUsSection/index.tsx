
"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function AboutUsSection() {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Block: Challenge, Approach & Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Our Mission</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">The Challenge</p>
              <p className="mt-6 text-muted-foreground font-medium tracking-body">
                In a rapidly evolving tech landscape, aspiring developers face a fragmented learning journey. They struggle to find up-to-date, practical knowledge that bridges the gap between academic theory and real-world application.
              </p>
            </div>
            
            <div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">The Approach</p>
              <p className="mt-6 text-muted-foreground font-medium tracking-body">
                Devsora provides a unified, project-based ecosystem. We combine curated, expert-led courses with collaborative projects and AI-driven mentorship to build job-ready skills and foster a culture of continuous innovation.
              </p>
            </div>
          </div>

          {/* Right Column: YouTube Video */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-full rounded-lg shadow-2xl shadow-primary/20"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        <Separator className="bg-border/20 my-24" />

        {/* Bottom Block: Final Statement */}
        <div className="text-center">
            <p className="font-bold text-3xl md:text-4xl uppercase font-headline tracking-heading text-primary/90 max-w-5xl mx-auto leading-tight">
                From strategy to execution, Devsora is your partner in mastering technology and shaping your future. Join us on this journey—learn, build, and lead with us.
            </p>
        </div>

      </div>
    </section>
  );
}

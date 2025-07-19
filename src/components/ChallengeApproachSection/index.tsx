
"use client";

import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function ChallengeApproachSection() {
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
              In today’s fast-changing tech world, aspiring programmers face challenges accessing practical, current resources for real-world careers. Traditional education is often costly and theory-heavy, lacking hands-on experience and collaboration.  There is a growing need for courses on emerging technologies and industry trends. DEVSORA aims to bridge this gap by offering cutting-edge tech courses and fostering a vibrant, open-source community where the next generation can learn, collaborate, and lead future industries.
              </p>
            </div>
            
            <div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">The Approach</p>
              <p className="mt-6 text-muted-foreground font-medium tracking-body">
              DEVSORA tackles these challenges by combining open-source collaboration with project-based, visually engaging learning. We design our platform to offer hands-on courses in emerging technologies, tailored to the needs of tomorrow’s industries. Learners can work together on real-world projects, contribute to the platform’s development, and access a supportive community of peers and mentors. By fostering innovation, teamwork, and practical skill-building, DEVSORA empowers the next generation of developers and creators to confidently shape the future.
              </p>
            </div>
          </div>

          {/* Right Column: YouTube Video */}
          <div className="aspect-w-16 aspect-h-9 min-h-[480px]">
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
      </div>
    </section>
  );
}

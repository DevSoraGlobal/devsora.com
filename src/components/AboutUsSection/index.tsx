
"use client";

import React from 'react';
import Image from 'next/image';
import { UserCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const journeySteps = [
    { year: '2021', title: 'The Spark', description: 'Devsora was conceived to bridge the skills gap.' },
    { year: '2022', title: 'Building the Platform', description: 'The core infrastructure and curriculum were developed.' },
    { year: '2023', title: 'Alpha Launch', description: 'First users were onboarded for initial feedback.' },
    { year: '2024', title: 'Public Beta', description: 'The platform opened to a wider audience.' },
    { year: 'Future', title: 'Global Scale', description: 'Expanding our reach and course offerings worldwide.' },
];

export default function AboutUsSection() {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Block: Challenge & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">The Challenge</p>
            <p className="mt-6 text-muted-foreground font-medium tracking-body">
              In a rapidly evolving tech landscape, aspiring developers face a fragmented learning journey. They struggle to find up-to-date, practical knowledge that bridges the gap between academic theory and real-world application.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold leading-7 text-transparent font-headline tracking-heading">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">The Approach</p>
            <p className="mt-6 text-muted-foreground font-medium tracking-body">
              Devsora provides a unified, project-based ecosystem. We combine curated, expert-led courses with collaborative projects and AI-driven mentorship to build job-ready skills and foster a culture of continuous innovation.
            </p>
          </div>
        </div>

        <Separator className="bg-border/20" />

        {/* Middle Block: CEO & Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 my-24">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <UserCircle2 className="w-32 h-32 text-primary flex-shrink-0" strokeWidth={1}/>
              <div>
                <blockquote className="text-xl italic text-foreground font-medium tracking-body">
                  "We're not just teaching code; we're building the next generation of tech leaders. Our vision is to democratize elite tech knowledge and empower anyone with the drive to succeed."
                </blockquote>
                <p className="mt-4 font-semibold text-primary tracking-body">— Jane Doe, CEO of Devsora</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
             <h3 className="text-2xl font-bold tracking-tight text-foreground font-headline tracking-heading mb-6">Our Journey</h3>
             <div className="relative">
                <div className="absolute left-2.5 top-2.5 h-full w-0.5 bg-border/30" />
                <ul className="space-y-8">
                    {journeySteps.map((step, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/50 border-2 border-primary z-10" />
                            <div className="ml-4">
                                <h4 className="font-bold text-foreground font-headline tracking-heading">{step.title} <span className="text-sm text-muted-foreground font-medium">({step.year})</span></h4>
                                <p className="text-sm text-muted-foreground font-medium tracking-body">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>
        
        <Separator className="bg-border/20" />

        {/* Bottom Block: Final Statement */}
        <div className="mt-24 text-center">
            <p className="font-bold text-3xl md:text-4xl uppercase font-headline tracking-heading text-primary/90 max-w-5xl mx-auto leading-tight">
                From strategy to execution, Devsora is your partner in mastering technology and shaping your future. Join us on this journey—learn, build, and lead with us.
            </p>
        </div>

      </div>
    </section>
  );
}

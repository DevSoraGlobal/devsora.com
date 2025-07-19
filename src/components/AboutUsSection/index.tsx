
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Rocket, Target, Users, Building, Globe } from 'lucide-react';

const journeySteps = [
  {
    icon: <Rocket className="h-6 w-6" />,
    year: '2021',
    title: 'The Spark',
    description: 'Devsora was conceived to bridge the widening skills gap in the tech industry, with a mission to make elite tech knowledge accessible to everyone, everywhere.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'idea lightbulb',
  },
  {
    icon: <Target className="h-6 w-6" />,
    year: '2022',
    title: 'Platform Launch',
    description: 'We officially launched our platform, welcoming our first cohort of beta students. The core of the Devsora community began to form, built on collaboration and shared goals.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'product launch',
  },
  {
    icon: <Users className="h-6 w-6" />,
    year: '2023',
    title: 'Community Growth',
    description: 'Serving thousands of learners globally, we expanded our course library and introduced live mentorship, solidifying our project-based learning model.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'community growth',
  },
  {
    icon: <Building className="h-6 w-6" />,
    year: '2024',
    title: 'Enterprise Solutions',
    description: 'Launched our B2B offerings, partnering with companies to upskill their tech teams and foster a culture of continuous innovation and learning.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'office building',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    year: 'Future',
    title: 'Global Expansion',
    description: 'Our next steps involve expanding our AI-driven mentorship program, launching in new languages, and establishing a larger global footprint to empower the next generation of developers.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'future globe',
  },
];

export default function AboutUsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = journeySteps[activeStep];

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Who We Are</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">Pioneering the Future of Tech Education</p>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground font-medium tracking-body">
            Devsora was born from a simple idea: learning should be practical, collaborative, and continuous. We combine curated, up-to-date content with hands-on projects and direct access to industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Column: Interactive Journey Content */}
          <div className="lg:col-span-2">
            <Card className="bg-secondary/50 sticky top-24">
              <CardContent className="p-0">
                <Image
                  key={activeStep} // Force re-render for animation
                  src={currentStep.image}
                  alt={currentStep.title}
                  width={800}
                  height={500}
                  className="w-full h-80 object-cover rounded-t-lg transition-all duration-500 ease-in-out"
                  data-ai-hint={currentStep.aiHint}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-headline text-primary tracking-heading">{currentStep.title} ({currentStep.year})</h3>
                  <p className="mt-4 text-muted-foreground font-medium tracking-body h-24">{currentStep.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Journey Timeline Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-headline mb-6 tracking-heading">Our Journey</h3>
            <div className="relative">
              {/* The connecting line */}
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-border -z-10"></div>
              
              <ul className="space-y-4">
                {journeySteps.map((step, index) => (
                  <li key={index} onClick={() => setActiveStep(index)} className="cursor-pointer group">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 transition-colors duration-300",
                        activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-secondary group-hover:bg-primary/50'
                      )}>
                        {step.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className={cn(
                          "font-bold transition-colors duration-300 tracking-heading",
                          activeStep === index ? 'text-primary' : 'text-foreground'
                        )}>{step.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium tracking-body">{step.year}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-24" />

        <Card className="bg-secondary p-8 flex flex-col md:flex-row items-center gap-8">
          <Image 
            src="https://placehold.co/150x150.png"
            alt="CEO Photo" 
            width={150} 
            height={150} 
            className="rounded-full flex-shrink-0"
            data-ai-hint="portrait person"
          />
          <div>
            <blockquote className="text-lg italic text-foreground font-medium tracking-body">
              "We're not just building a platform; we're building the next generation of tech leaders. Our goal is to democratize elite tech knowledge and empower anyone with the drive to succeed."
            </blockquote>
            <p className="mt-4 font-semibold text-primary tracking-body">— Jane Doe, CEO of Devsora</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

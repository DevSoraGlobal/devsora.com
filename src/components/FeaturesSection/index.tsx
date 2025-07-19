
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Lightbulb, Users, Code, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Learning Paths',
    description: 'Personalized course recommendations and adaptive learning paths tailored to your career goals.',
    details: 'Our AI analyzes your skills and suggests the most effective learning journey, ensuring you stay on track and motivated. It adapts to your progress, offering new challenges and resources just when you need them.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ai brain network'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Live Mentorship Sessions',
    description: 'Get 1-on-1 guidance from industry experts and senior engineers to solve your toughest challenges.',
    details: 'Book exclusive sessions with mentors from top tech companies to get personalized code reviews, strategic career advice, and hands-on project support. Overcome blockers and accelerate your growth.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'video call mentor'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Collaborative Projects',
    description: 'Build your portfolio by collaborating on real-world projects with a global community of developers.',
    details: 'Join a team, contribute to impactful open-source projects, and gain practical experience that stands out to employers. You’ll learn to work in an agile environment, manage version control, and ship features.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'team working code'
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Instant Code Environments',
    description: 'Launch fully configured development environments in the cloud with a single click. No setup required.',
    details: 'Access powerful, pre-built coding environments for any tech stack directly from your browser. Say goodbye to configuration headaches and start coding in seconds on a platform built for performance.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'cloud code editor'
  },
];

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const activeFeature = features[selectedFeature];

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-[0.12em]">Exclusive Features</h2>
          <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl font-headline tracking-widest">Why Choose Devsora?</p>
          <p className="mt-6 leading-8 text-muted-foreground font-medium tracking-body">
            We provide unique tools and resources to accelerate your growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Feature List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={cn(
                  "cursor-pointer transition-all duration-300 border-2",
                  selectedFeature === index 
                    ? 'border-primary shadow-2xl shadow-primary/20' 
                    : 'border-transparent hover:bg-secondary'
                )}
                onClick={() => setSelectedFeature(index)}
              >
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline tracking-heading">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground font-medium tracking-body">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column: Feature Details */}
          <div className="sticky top-24">
            <Card className="bg-secondary/50 overflow-hidden">
                <Image 
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-all duration-500 ease-in-out"
                    data-ai-hint={activeFeature.aiHint}
                    key={selectedFeature} // Force re-render on change
                />
                <div className="p-8">
                    <h3 className="text-2xl font-bold font-headline text-primary tracking-heading">{activeFeature.title}</h3>
                    <p className="mt-4 font-medium tracking-body text-muted-foreground">{activeFeature.details}</p>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Project-Centric Learning',
    description: 'Master real-world tech skills by building, collaborating, and contributing to open-source projects from day one. Learn by doing, not just watching.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Mentorship & Community Support',
    description: 'Get personalized guidance from industry mentors and join a collaborative peer community eager to help you troubleshoot, grow, and succeed.',
  },
  {
    icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
    title: 'Skill Recognition & Digital Badges',
    description: 'Showcase your achievements with uniquely designed badges as you complete modules and milestones. Earn recognition for every skill and project.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Flexible, Visual Curriculum',
    description: 'Explore a visually engaging, modular curriculum that adapts to your learning style. Access bite-sized content, interactive micro-modules, and track your progress at your own pace.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-[0.12em]">Exclusive Features</h2>
          <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl font-headline tracking-widest">Why Choose Devsora?</p>
          <p className="mt-6 leading-8 text-muted-foreground font-medium tracking-body max-w-2xl mx-auto">
            We provide unique tools and resources to accelerate your growth.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-background/40 border-border/50 text-center p-8 transition-all duration-300 group hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div className="mb-6 p-4 bg-secondary rounded-full inline-block transition-all duration-300 group-hover:bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="font-headline uppercase text-2xl font-bold tracking-heading text-primary">
                  {feature.title}
                </h3>
                <p className="font-body text-lg font-normal text-muted-foreground mt-4">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

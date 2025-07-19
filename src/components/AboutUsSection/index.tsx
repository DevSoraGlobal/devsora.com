
"use client";

import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const timeline = [
  {
    id: "1",
    title: "The Spark",
    content: "The initial idea for Devsora was born from a desire to bridge the gap between theoretical knowledge and practical application in the tech industry."
  },
  {
    id: "2",
    title: "Building the platform",
    content: "Our team began constructing the core infrastructure, focusing on a scalable and user-friendly platform for learning and collaboration."
  },
  {
    id: "3",
    title: "Alpha platform Launch",
    content: "The first version of Devsora was released to a small group of users for initial feedback and testing, helping us refine our features."
  },
  {
    id: "4",
    title: "Beta platform launch",
    content: "We expanded our user base for beta testing, gathering valuable insights to improve course content and platform stability."
  },
  {
    id: "5",
    title: "final platform launch",
    content: "With a growing community, we added more courses, projects, and features, establishing Devsora as a key player in tech education."
  },
  {
    id: "6",
    title: "growth and innovation",
    content: "We are continuously innovating, with plans to introduce AI-powered learning paths and more advanced collaborative tools."
  }
];

export default function AboutUsSection() {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: CEO Profile */}
          <div className="flex flex-col items-center text-center lg:sticky lg:top-24">
            <Image
              src="https://placehold.co/400x600.png"
              alt="CEO of Devsora"
              width={400}
              height={600}
              className="rounded-lg"
              data-ai-hint="ceo portrait"
            />
            <h2 className="font-headline uppercase font-bold text-4xl mt-6 tracking-[0.08em]">HITEN BALARA</h2>
            <p className="font-body text-xl mt-1 text-muted-foreground font-medium">CEO & Founder</p>
            <p className="uppercase font-semibold mt-8 text-1xl tracking-wider max-w-md">
            “At DEVSORA, we’re more than a platform—we’re a catalyst for growth. Our mission is to empower learners to transform ambition into real-world skills. Through innovation and collaboration, we’re shaping the next generation of creators and tech leaders.”
            </p>
          </div>

          {/* Right Column: Interactive Timeline */}
          <div className="mt-12 lg:mt-0">
            <h3 className="font-headline text-5xl font-bold uppercase text-center mb-12">Our Journey</h3>
            <h2 className="font-headline text-3xl font-bold uppercase text-center mb-12 tracking-[0.08em]">From Vision to Reality, We’re Shaping the Future of Learning</h2>
            <Accordion type="single" collapsible defaultValue="1" className="w-full">
              {timeline.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b-2 border-primary/30">
                    <AccordionTrigger className="font-headline uppercase text-2xl text-left hover:no-underline data-[state=open]:text-primary py-6">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2 text-muted-foreground">
                      <p>{item.content}</p>
                    </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="text-center mt-24">
            <p className="font-bold text-3xl md:text-4xl uppercase font-headline tracking-heading text-primary/90 max-w-5xl mx-auto leading-tight">
                FROM STRATEGY TO EXECUTION, DEVSORA IS YOUR PARTNER IN MASTERING TECHNOLOGY AND SHAPING YOUR FUTURE. JOIN US ON THIS JOURNEY—LEARN, BUILD, AND LEAD WITH US.
            </p>
        </div>
      </div>
    </section>
  );
}

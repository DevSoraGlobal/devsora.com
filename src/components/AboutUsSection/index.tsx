
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
    title: "Platform Build",
    content: "Our team began constructing the core infrastructure, focusing on a scalable and user-friendly platform for learning and collaboration."
  },
  {
    id: "3",
    title: "Alpha Launch",
    content: "The first version of Devsora was released to a small group of users for initial feedback and testing, helping us refine our features."
  },
  {
    id: "4",
    title: "Beta Testing",
    content: "We expanded our user base for beta testing, gathering valuable insights to improve course content and platform stability."
  },
  {
    id: "5",
    title: "Growth",
    content: "With a growing community, we added more courses, projects, and features, establishing Devsora as a key player in tech education."
  },
  {
    id: "6",
    title: "Next Steps",
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
            <h2 className="font-headline uppercase font-bold text-4xl mt-6">HITEN BALARA</h2>
            <p className="font-body text-xl mt-1 text-muted-foreground font-medium">CEO & Founder</p>
            <p className="font-headline uppercase text-primary font-bold mt-8 text-2xl tracking-wider max-w-md">
            “At DEVSORA, we’re more than a platform—we’re a catalyst for growth. Our mission is to empower learners to transform ambition into real-world skills. Through innovation and collaboration, we’re shaping the next generation of creators and tech leaders.”
            </p>
          </div>

          {/* Right Column: Interactive Timeline */}
          <div className="mt-12 lg:mt-0">
            <h3 className="font-headline text-5xl font-bold uppercase text-center mb-12">Our Journey</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/30" aria-hidden="true"></div>
              
              <Accordion type="single" collapsible defaultValue="1" className="w-full">
                {timeline.map((item, index) => (
                  <AccordionItem key={item.id} value={item.id} className="border-none mb-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold z-10">
                          {index + 1}
                        </span>
                      </div>
                      <div className="ml-6 w-full">
                        <AccordionTrigger className="font-headline uppercase text-2xl text-left hover:no-underline data-[state=open]:text-primary">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <p className="font-body text-lg text-muted-foreground font-medium">{item.content}</p>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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

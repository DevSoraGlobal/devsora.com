
"use client";

import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const timeline = [
  {
    id: "1",
    title: "The Spark",
    content: "OCTOBER 2024 —  The idea for DEVSORA was born from a shared passion for accessible, hands-on tech education. Our founding team began collaborating, outlining our vision, and building the foundation for an inclusive learning community."
  },
  {
    id: "2",
    title: "Building the platform",
    content: "MAY 2025 — We launched our open-source initiative, inviting contributors from around the globe. Early adopters helped shape our core features: interactive courses, real-world projects, and a vibrant community space."
  },
  {
    id: "3",
    title: "Alpha platform Launch",
    content: "AUGUST 2025 — We are releasing the alpha version of DEVSORA for early testing, gathering feedback and identifying bugs to refine the user experience."
  },
  {
    id: "4",
    title: "Beta platform launch",
    content: "OCTOBER 2025 — The beta version of DEVSORA will launch globally, opening the platform to a wider audience and enabling more users to participate, collaborate, and help us further enhance the platform."
  },
  {
    id: "5",
    title: "final platform launch",
    content: "OCTOBER 2026 — The final version of DEVSORA will launch globally, delivering a polished, feature-rich platform dedicated to empowering learners and innovators worldwide."
  },
  {
    id: "6",
    title: "growth and innovation",
    content: "2026 & BEYOND — We will continue to expand our course offerings, introduce new technologies, and foster partnerships with industry leaders. Our mission is to stay at the forefront of tech education, helping learners and creators turn ideas into impactful projects."
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
              src="/hiten.png"
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

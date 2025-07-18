import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutUsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">Who We Are</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Pioneering the Future of Tech Education</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary">The Challenge</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                In a rapidly evolving tech landscape, traditional education struggles to keep pace. Aspiring developers face a confusing maze of outdated resources, theoretical knowledge that doesn't translate to real-world skills, and a lack of mentorship. This creates a significant gap between learning and doing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline text-primary">The Approach</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Devsora was born from a simple idea: learning should be practical, collaborative, and continuous. We combine curated, up-to-date content with hands-on projects and direct access to industry experts. Our platform is a living ecosystem where you don't just learn to code—you learn to think, build, and lead like a top-tier engineer.
              </p>
            </div>
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
                <blockquote className="text-lg italic text-foreground">
                  "We're not just building a platform; we're building the next generation of tech leaders. Our goal is to democratize elite tech knowledge and empower anyone with the drive to succeed."
                </blockquote>
                <p className="mt-4 font-semibold text-primary">— Jane Doe, CEO of Devsora</p>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6 h-full bg-secondary">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-headline mb-4">Our Journey</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                      <div className="w-px h-full bg-border"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">The Idea</h4>
                      <p className="text-sm text-muted-foreground">Devsora is conceived to bridge the skills gap in the tech industry.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                      <div className="w-px h-full bg-border"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Platform Launch</h4>
                      <p className="text-sm text-muted-foreground">Our first cohort of students joins, and the community begins to grow.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                      <div className="w-px h-full bg-border"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Current Status</h4>
                      <p className="text-sm text-muted-foreground">Serving thousands of learners globally with an expanding course library.</p>
                    </div>
                  </li>
                   <li className="flex gap-4">
                     <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Next Steps</h4>
                      <p className="text-sm text-muted-foreground">Launching enterprise solutions and expanding our AI-driven mentorship program.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        <blockquote className="text-center text-xl md:text-2xl font-bold font-headline italic text-foreground max-w-4xl mx-auto">
          "FROM STRATEGY TO EXECUTION, DEVSORA IS YOUR PARTNER IN MASTERING TECHNOLOGY AND SHAPING YOUR FUTURE. JOIN US ON THIS JOURNEY—LEARN, BUILD, AND LEAD WITH US."
        </blockquote>
      </div>
    </section>
  );
}

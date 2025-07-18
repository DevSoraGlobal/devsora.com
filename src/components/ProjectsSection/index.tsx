"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent code assistant that provides real-time suggestions, bug detection, and optimizations.',
    image: 'https://placehold.co/600x400.png',
    tags: ['AI', 'VSCode Extension', 'TypeScript'],
    aiHint: 'artificial intelligence robot',
  },
  {
    title: 'Decentralized Social Network',
    description: 'A social media platform built on blockchain technology, ensuring user privacy and data ownership.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Blockchain', 'React', 'Solidity'],
    aiHint: 'social network nodes',
  },
  {
    title: 'Real-time Data Visualization',
    description: 'A powerful dashboard for visualizing complex datasets in real-time, built with D3.js and WebSockets.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Data Viz', 'D3.js', 'WebSockets'],
    aiHint: 'data visualization chart',
  },
  {
    title: 'IoT Home Automation System',
    description: 'A smart home system that connects and controls various IoT devices through a centralized mobile app.',
    image: 'https://placehold.co/600x400.png',
    tags: ['IoT', 'Raspberry Pi', 'Python'],
    aiHint: 'smart home technology',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">See What We Build</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Projects</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground font-normal">
            Explore innovative projects built by our community and team.
          </p>
        </div>
        <div className="mt-16">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden h-full flex flex-col">
                      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={project.aiHint}/>
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                          <p className="mt-2 text-muted-foreground font-normal">{project.description}</p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="link" className="p-0 h-auto mt-4 self-start">More Details</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px] bg-background">
                            <DialogHeader>
                              <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-48 object-cover rounded-t-lg" data-ai-hint={project.aiHint}/>
                              <DialogTitle className="text-2xl font-headline mt-4">{project.title}</DialogTitle>
                              <div className="flex gap-2 py-2">
                                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                              </div>
                              <DialogDescription className="text-base text-muted-foreground pt-2 font-normal">
                                {project.description} This is where more detailed information about the project would go. It could include technical specifications, challenges, and links to the live project or source code.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex justify-end gap-2 mt-4">
                               <Link href="/explore" passHref>
                                <Button variant="outline">Explore More Projects</Button>
                               </Link>
                               <Button>View Source</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext className="hidden sm:flex"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

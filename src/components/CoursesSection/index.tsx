import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Advanced JavaScript & ESNext',
    description: 'Dive deep into modern JavaScript, including asynchronous patterns, modules, and the latest ESNext features.',
    image: 'https://placehold.co/600x400.png',
    tags: [{ name: 'JavaScript', color: 'bg-red-900/30 text-red-300 border-red-700/50' }],
    aiHint: 'code abstract',
  },
  {
    title: 'High-Performance C++',
    description: 'Unlock the power of C++ for performance-critical applications. Learn about memory management and optimization.',
    image: 'https://placehold.co/600x400.png',
    tags: [{ name: 'C++', color: 'bg-blue-900/30 text-blue-300 border-blue-700/50' }],
    aiHint: 'circuit board',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Master front-end and back-end development with cutting-edge frameworks and build real-world applications.',
    image: 'https://placehold.co/600x400.png',
    tags: [{ name: 'JavaScript', color: 'bg-red-900/30 text-red-300 border-red-700/50' }, { name: 'Full-Stack', color: 'bg-purple-900/30 text-purple-300 border-purple-700/50' }],
    aiHint: 'server room',
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline">Start Your Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Featured Courses</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Handpicked courses to kickstart your career in technology.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="p-0">
                <Image src={course.image} alt={course.title} width={600} height={400} className="w-full object-cover" data-ai-hint={course.aiHint} />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{course.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 pt-0">
                <div className="flex gap-2">
                  {course.tags.map(tag => <Badge key={tag.name} variant="outline" className={tag.color}>{tag.name}</Badge>)}
                </div>
                 <Button variant="ghost" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/learn" passHref>
            <Button size="lg">
              More Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

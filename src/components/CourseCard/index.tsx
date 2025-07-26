
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/lib/courses';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const difficultyColors: { [key: string]: string } = {
  Beginner: 'bg-green-700/30 text-green-300 border-green-700/50 hover:bg-green-700/40',
  Intermediate: 'bg-orange-600/30 text-orange-400 border-orange-600/50 hover:bg-orange-600/40',
  Advanced: 'bg-red-700/30 text-red-300 border-red-700/50 hover:bg-red-700/40',
};

export default function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <Card
      className="bg-card/80 backdrop-blur-sm border-white/10 text-white rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex flex-col"
    >
      <div className="overflow-hidden" onClick={() => onClick(course)}>
        <Image
          src={course.image}
          alt={course.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          data-ai-hint={course.aiHint}
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col" onClick={() => onClick(course)}>
        <div>
            <Badge
            variant="outline"
            className={cn("font-semibold tracking-wider", difficultyColors[course.difficulty])}
            >
            {course.difficulty}
            </Badge>
            <h3 className="font-headline uppercase text-2xl font-bold mt-4 tracking-heading">
            {course.title}
            </h3>
            <p className="font-body text-lg text-muted-foreground mt-2">
            {course.description}
            </p>
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Link href={`/learn/${course.id}`} passHref>
            <Button className="w-full font-headline uppercase font-bold tracking-widest bg-primary hover:bg-primary/80 text-primary-foreground">
                Start CTO
            </Button>
        </Link>
      </div>
    </Card>
  );
}

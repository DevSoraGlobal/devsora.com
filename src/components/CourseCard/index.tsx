
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { Course } from '@/lib/courses';

interface CourseCardProps {
  course: Course;
  isEnrolled: boolean;
  onClick: (course: Course) => void;
  onEnroll: (courseId: string) => void;
}

export default function CourseCard({ course, isEnrolled, onClick, onEnroll }: CourseCardProps) {
  const { toast } = useToast();

  const handleEnroll = async (e: React.MouseEvent) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    onEnroll(course.id);
    toast({
      title: "Enrollment Successful",
      description: `You have enrolled in ${course.title}!`,
    });
  };

  return (
    <Card
      onClick={() => onClick(course)}
      className="bg-card/80 backdrop-blur-sm border-white/10 text-white rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex flex-col"
    >
      <CardContent className="p-6 flex-grow flex flex-col">
        <div>
            <h3 className="font-headline uppercase text-2xl font-bold tracking-heading">
            {course.title}
            </h3>
            <p className="font-body text-lg text-muted-foreground mt-2">
            {course.description}
            </p>
        </div>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        {isEnrolled ? (
            <Link href={`/learn/${course.slug}`} passHref>
                <Button className="w-full font-headline uppercase font-bold tracking-widest bg-green-600 hover:bg-green-700 text-primary-foreground">
                    Start Learning
                </Button>
            </Link>
        ) : (
            <Button 
              className="w-full font-headline uppercase font-bold tracking-widest bg-primary hover:bg-primary/80 text-primary-foreground"
              onClick={handleEnroll}
            >
                Enroll Now
            </Button>
        )}
      </div>
    </Card>
  );
}

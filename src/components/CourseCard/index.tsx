
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export interface Course {
  _id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  aiHint?: string;
}

interface CourseCardProps {
  course: Course;
  isEnrolled: boolean;
  onClick: (course: Course) => void;
}

export default function CourseCard({ course, isEnrolled, onClick }: CourseCardProps) {
  const { toast } = useToast();

  const handleEnroll = async (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent modal from opening
    e.preventDefault(); // prevent link navigation

    try {
      const response = await fetch('https://webserver.devsora.com/api/courses/enrollUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: course._id }),
        credentials: 'include',
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Enrollment Successful",
          description: "You have been enrolled in the course!",
        });
        // Optionally, you can refresh the page or update the state to reflect the new enrollment status
        window.location.reload();
      } else {
        toast({
          title: "Enrollment Failed",
          description: result.error || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not connect to the server.",
        variant: "destructive",
      });
    }
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
            <Link href={`/learn/${course._id}`} passHref>
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

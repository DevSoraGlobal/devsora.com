
"use client";

import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';
import type { Course } from '@/lib/courses';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface LearnPageProps {
  courses: Course[];
  enrolledCourses: string[];
  onEnroll: (courseId: string) => void;
}

export default function LearnPage({ courses, enrolledCourses, onEnroll }: LearnPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCardClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline uppercase text-5xl sm:text-6xl font-bold tracking-heading text-white">
          Our Courses
        </h1>
        <p className="font-normal text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Explore our catalog of courses and find the perfect path to level up your skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onClick={handleCardClick}
            isEnrolled={enrolledCourses.includes(course.id)}
            onEnroll={onEnroll}
          />
        ))}
        <Card className="border-2 border-dashed border-primary/30 bg-secondary/20 flex flex-col items-center justify-center text-center p-8">
            <CardContent className="p-0 flex flex-col items-center justify-center">
                <Clock className="h-12 w-12 text-primary/50 mb-4" />
                <h3 className="font-headline uppercase text-2xl font-bold tracking-heading text-white/80">
                    More Courses Coming Soon!
                </h3>
                <p className="font-normal text-lg text-muted-foreground mt-2">
                    Stay tuned for weekly updates.
                </p>
            </CardContent>
        </Card>
      </div>
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

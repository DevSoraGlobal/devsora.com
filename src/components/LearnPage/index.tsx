
"use client";

import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';

// Define a simplified Course type for this component
export interface Course {
  _id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  aiHint: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  badges: { name: string; description: string }[];
  toc: any[]; // Keep toc flexible as modal might use it
}

interface LearnPageProps {
  courses: Course[];
  enrolledCourses: string[];
}

export default function LearnPage({ courses, enrolledCourses }: LearnPageProps) {
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
        <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Explore our catalog of courses and find the perfect path to level up your skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard 
            key={course._id} 
            course={course} 
            onClick={handleCardClick}
            isEnrolled={enrolledCourses.includes(course._id)}
          />
        ))}
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

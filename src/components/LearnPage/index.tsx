
"use client";

import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';

// This is now the primary Course interface for the client-side components
export interface Course {
  _id: string;
  slug: string;
  courseName: string;
  title: string; // Keep for card compatibility if needed, or unify
  description: string;
  detailedDescription?: string;
  image?: string;
  aiHint?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  badges?: { name: string; description: string }[];
  format?: any[];
  toc?: any[]; // Keep for legacy compatibility if needed
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
  
  // Normalize course data to fit the CourseCard's expected props
  const normalizedCourses = courses.map(course => ({
    ...course,
    title: course.courseName, // Use courseName for the title
  }));

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
        {normalizedCourses.map((course) => (
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

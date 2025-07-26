
"use client";

import React, { useState } from 'react';
import { courses, Course } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';
import CourseModal from '@/components/CourseModal';

export default function LearnPage() {
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
          <CourseCard key={course.id} course={course} onClick={handleCardClick} />
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

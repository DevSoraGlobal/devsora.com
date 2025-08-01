
"use client";

import React, { useState } from 'react';
import LearnPage from '@/components/LearnPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { courses as allCourses, Course } from '@/lib/courses';

export default function Learn() {
  const [courses, setCourses] = useState<Course[]>(allCourses);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  const handleEnroll = (courseId: string) => {
    setEnrolledCourses(prev => [...prev, courseId]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <LearnPage 
          courses={courses} 
          enrolledCourses={enrolledCourses} 
          onEnroll={handleEnroll} 
        />
      </main>
      <Footer />
    </div>
  );
}


"use client";

import React, { useState, useEffect } from 'react';
import LearnPage from '@/components/LearnPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { courses as allCourses, Course } from '@/lib/courses';
import Cookies from 'js-cookie';

const ENROLLED_COURSES_COOKIE = 'enrolledCourses';

export default function Learn() {
  const [courses, setCourses] = useState<Course[]>(allCourses);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  useEffect(() => {
    const storedEnrolledCourses = Cookies.get(ENROLLED_COURSES_COOKIE);
    if (storedEnrolledCourses) {
      try {
        const parsedCourses = JSON.parse(storedEnrolledCourses);
        setEnrolledCourses(parsedCourses);
      } catch (error) {
        console.error("Failed to parse enrolled courses from cookies:", error);
      }
    }
  }, []);

  const handleEnroll = (courseId: string) => {
    const newEnrolledCourses = [...enrolledCourses, courseId];
    setEnrolledCourses(newEnrolledCourses);
    Cookies.set(ENROLLED_COURSES_COOKIE, JSON.stringify(newEnrolledCourses), { expires: 365 });
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

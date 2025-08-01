
"use client"

import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CourseContentPage from '@/components/CourseContentPage';
import { courses, Course } from '@/lib/courses';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCourse = courses.find(c => c.slug === params.slug);
    if (foundCourse) {
      setCourse(foundCourse);
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
     return (
      <div className="flex flex-col min-h-screen bg-black">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Loading...</h1>
        </main>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Course not found.</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <CourseContentPage course={course} />
      </main>
      <Footer />
    </div>
  );
}


"use client"

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CourseContentPage from '@/components/CourseContentPage';
import { courses, Course } from '@/lib/courses';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);

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

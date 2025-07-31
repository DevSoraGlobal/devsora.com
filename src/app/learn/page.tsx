
"use client";

import React, { useState, useEffect } from 'react';
import LearnPage from '@/components/LearnPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Learn() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch courses
      try {
        const coursesRes = await fetch('https://webserver.devsora.com/api/courses/coursesDetails', {
          cache: 'no-store'
        });
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(coursesData.courses || []);
        } else {
          console.error('Failed to fetch courses:', coursesRes.statusText);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }

      // Fetch user data to get enrolled courses
      try {
        const userRes = await fetch('https://webserver.devsora.com/api/auth/verify', {
          method: "GET",
          credentials: 'include',
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          setEnrolledCourses(userData.user?.enrolled || []);
        }
      } catch (error) {
        console.error('Error verifying user:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <LearnPage courses={courses} enrolledCourses={enrolledCourses} />
      </main>
      <Footer />
    </div>
  );
}

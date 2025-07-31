
import LearnPage from '@/components/LearnPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { cookies } from 'next/headers';

async function getCourses() {
    try {
        const res = await fetch('https://webserver.devsora.com/api/courses/coursesDetails', {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error('Failed to fetch courses:', res.statusText);
            return [];
        }
        const data = await res.json();
        // The API returns { success, courses, count }, so we need to access the courses property
        return data.courses || [];
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
}

async function getUser() {
    try {
        const res = await fetch('https://webserver.devsora.com/api/auth/verify', {
            method: "GET",
            credentials: 'include',
        });
        
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data.user;
    } catch (error) {
        console.error('Error verifying user:', error);
        return null;
    }
}


export default async function Learn() {
  const courses = await getCourses();
  const user = await getUser();
  const enrolledCourses = user?.enrolled || [];

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

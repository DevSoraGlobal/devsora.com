
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CourseContentPage from '@/components/CourseContentPage';
import type { Course } from '@/components/CourseContentPage';

async function getCourse(id: string): Promise<Course | null> {
    try {
        const res = await fetch('https://webserver.devsora.com/api/courses/coursesDetails', {
            cache: 'no-store'
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        const course = data.courses.find((c: any) => c._id === id);
        console.log(course)
        return course || null;
    } catch (error) {
        console.error('Failed to fetch course:', error);
        return null;
    }
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug);

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

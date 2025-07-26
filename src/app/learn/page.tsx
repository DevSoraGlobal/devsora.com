import LearnPage from '@/components/LearnPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Learn() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <LearnPage />
      </main>
      <Footer />
    </div>
  );
}

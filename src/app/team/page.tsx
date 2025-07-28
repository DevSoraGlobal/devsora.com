
import TeamPage from '@/components/TeamPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <TeamPage />
      </main>
      <Footer />
    </div>
  );
}

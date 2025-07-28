
import ContactPage from '@/components/ContactPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-headline text-center tracking-heading">Contact Us</h1>
        <p className="text-muted-foreground text-center mt-4 tracking-body">
          Contact information and a contact form will be available here.
        </p>
      </main>
      <Footer />
    </div>
  );
}

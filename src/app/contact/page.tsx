
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow flex items-center justify-center text-white">
        <div className="text-center space-y-8">
            <h1 className="font-headline text-5xl sm:text-7xl font-bold tracking-wider uppercase">
                Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
                Have questions or want to collaborate? Email us.
            </p>
            <div className="inline-flex items-center justify-center">
                <Link href="mailto:info@devsora.com" className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-primary/30 transition-transform hover:scale-105">
                    <Mail className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-semibold text-primary-foreground tracking-wider">
                        info@devsora.com
                    </span>
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

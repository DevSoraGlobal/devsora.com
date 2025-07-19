import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold font-headline text-center tracking-heading">Dashboard</h1>
        <p className="text-muted-foreground text-center mt-4 tracking-body">
          This is a protected route for authenticated users. Your profile and learning progress will be shown here.
        </p>
      </main>
      <Footer />
    </div>
  );
}

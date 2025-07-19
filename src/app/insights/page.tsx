
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'The Rise of Serverless: A Paradigm Shift',
    image: 'https://placehold.co/600x400.png',
    category: 'Backend',
    summary: 'Explore how serverless architecture is changing the way we build and deploy applications, delivering scalability and cost-efficiency without managing physical servers.',
    aiHint: 'cloud computing',
  },
  {
    title: 'Mastering State Management in Modern React',
    image: 'https://placehold.co/600x400.png',
    category: 'Frontend',
    summary: 'A deep dive into state management solutions, from Context API to Zustand, and how to choose the right tool for your next project.',
    aiHint: 'react logo',
  },
  {
    title: 'Ethical AI: Navigating the New Frontier',
    image: 'https://placehold.co/600x400.png',
    category: 'AI/ML',
    summary: 'The critical questions developers must ask when building intelligent systems to ensure fairness, transparency, and accountability.',
    aiHint: 'ai ethics brain',
  },
  {
    title: 'The Unseen Power of WebAssembly',
    image: 'https://placehold.co/600x400.png',
    category: 'WebAssembly',
    summary: 'Discover how WebAssembly is unlocking near-native performance in the browser, opening doors for complex applications and game development on the web.',
    aiHint: 'web assembly code',
    },
    {
    title: 'GraphQL vs. REST: A Developer\'s Dilemma',
    image: 'https://placehold.co/600x400.png',
    category: 'API Design',
    summary: 'An in-depth comparison of GraphQL and REST APIs, helping you decide which architecture best fits the needs of your next project.',
    aiHint: 'api data flow',
    },
    {
    title: 'Building Resilient Systems with Microservices',
    image: 'https://placehold.co/600x400.png',
    category: 'Architecture',
    summary: 'Learn the principles of microservice architecture to build scalable, maintainable, and resilient applications that can withstand failures.',
    aiHint: 'microservices architecture',
    }
];

const InsightCard = ({ insight }: { insight: (typeof insights)[0] }) => (
    <Card className="group col-span-1 flex flex-col overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
      <div className="overflow-hidden">
        <Image 
          src={insight.image} 
          alt={insight.title} 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
          data-ai-hint={insight.aiHint}
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6">
        <div>
          <p className="text-sm font-semibold text-primary tracking-heading">{insight.category}</p>
          <h3 className="mt-2 text-2xl font-bold font-headline text-foreground tracking-heading">{insight.title}</h3>
          <p className="mt-4 text-muted-foreground font-medium tracking-body leading-relaxed">{insight.summary}</p>
        </div>
        <div className="mt-6">
          <Button variant="link" asChild className="p-0 h-auto text-base text-primary group-hover:text-primary/80 transition-colors">
            <Link href="#" className="tracking-body">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <section className="py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Stay Ahead</h1>
                    <p className="mt-2 text-4xl font-bold text-foreground sm:text-5xl font-headline tracking-heading">Latest Insights & Articles</p>
                    <p className="mt-6 mx-auto max-w-2xl leading-8 text-muted-foreground font-medium tracking-body">
                        Explore our thoughts on technology, development, and the future of innovation.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {insights.map((insight) => (
                        <InsightCard key={insight.title} insight={insight} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


import React from 'react';
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
];

const FeaturedInsightCard = ({ insight }: { insight: (typeof insights)[0] }) => (
  <Card className="group col-span-1 flex flex-col overflow-hidden rounded-lg border-0 bg-transparent shadow-none">
    <div className="overflow-hidden rounded-lg">
      <Image 
        src={insight.image} 
        alt={insight.title} 
        width={600} 
        height={400} 
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
        data-ai-hint={insight.aiHint}
      />
    </div>
    <CardContent className="flex flex-col flex-grow p-0 pt-6">
      <div>
        <p className="text-sm font-semibold text-primary tracking-heading">{insight.category}</p>
        <h3 className="mt-2 text-2xl font-bold font-headline text-foreground tracking-heading">{insight.title}</h3>
        <p className="mt-4 text-muted-foreground font-medium tracking-body leading-relaxed">{insight.summary}</p>
      </div>
      <div className="mt-6">
        <Button variant="link" asChild className="p-0 h-auto text-base text-primary group-hover:text-primary/80 transition-colors">
          <Link href="/insights" className="tracking-body">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const InsightCard = ({ insight }: { insight: (typeof insights)[0] }) => (
  <Card className="group flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-lg border-0 bg-transparent shadow-none">
    <div className="w-full md:w-2/5 overflow-hidden rounded-lg">
      <Image 
        src={insight.image} 
        alt={insight.title} 
        width={300} 
        height={200} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        data-ai-hint={insight.aiHint}
      />
    </div>
    <CardContent className="w-full md:w-3/5 p-0">
      <p className="text-sm font-semibold text-primary tracking-heading">{insight.category}</p>
      <h3 className="mt-1 text-xl font-bold font-headline text-foreground tracking-heading">{insight.title}</h3>
      <p className="mt-2 text-muted-foreground font-medium tracking-body">{insight.summary}</p>
      <div className="mt-4">
        <Button variant="link" asChild className="p-0 h-auto text-base text-primary group-hover:text-primary/80 transition-colors">
            <Link href="/insights" className="tracking-body">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function InsightsSection() {
  const [featured, ...otherInsights] = insights;

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Stay Ahead</h2>
          <p className="mt-2 text-3xl font-bold text-foreground sm:text-4xl font-headline tracking-heading">Latest Insights</p>
          <p className="mt-6 leading-8 text-muted-foreground font-medium tracking-body">
            Read our latest articles and stay up-to-date with industry trends.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Featured Article */}
          <div className="lg:col-span-1">
             {featured && <FeaturedInsightCard insight={featured} />}
          </div>

          {/* Other Articles */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            {otherInsights.map((insight) => (
              <InsightCard key={insight.title} insight={insight} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/insights" passHref>
            <Button size="lg" className="tracking-body">
              More Insights <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

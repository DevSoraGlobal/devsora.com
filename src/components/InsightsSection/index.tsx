import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'The Rise of Serverless: A Paradigm Shift',
    image: 'https://placehold.co/600x400.png',
    category: 'Backend',
    summary: 'Explore how serverless architecture is changing the way we build and deploy applications.',
    aiHint: 'cloud computing',
  },
  {
    title: 'Mastering State Management in Modern React',
    image: 'https://placehold.co/600x400.png',
    category: 'Frontend',
    summary: 'A deep dive into state management solutions, from Context API to Zustand.',
    aiHint: 'react logo',
  },
  {
    title: 'Ethical AI: Navigating the New Frontier',
    image: 'https://placehold.co/600x400.png',
    category: 'AI/ML',
    summary: 'The critical questions developers must ask when building intelligent systems.',
    aiHint: 'ai ethics brain',
  },
  {
    title: 'DevOps Culture: More Than Just Tools',
    image: 'https://placehold.co/600x400.png',
    category: 'DevOps',
    summary: 'How to foster a culture of collaboration and continuous improvement in your team.',
    aiHint: 'team collaboration',
  },
];

export default function InsightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Stay Ahead</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">Latest Insights</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground font-normal tracking-body">
            Read our latest articles and stay up-to-date with industry trends.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight) => (
            <Card key={insight.title} className="group relative overflow-hidden rounded-lg">
              <Image src={insight.image} alt={insight.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={insight.aiHint}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-sm font-semibold text-primary tracking-heading">{insight.category}</p>
                <h3 className="mt-2 text-lg font-bold font-headline text-white tracking-heading">{insight.title}</h3>
                <div className="mt-4 h-0 opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                  <p className="text-sm text-gray-300 font-normal tracking-body">{insight.summary}</p>
                  <Button variant="link" className="text-white p-0 mt-2 h-auto tracking-body">Read More &rarr;</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
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

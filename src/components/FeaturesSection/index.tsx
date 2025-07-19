import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Lightbulb, Users, Code } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="h-12 w-12 text-primary" />,
    title: 'AI-Powered Learning Paths',
    description: 'Personalized course recommendations and adaptive learning paths tailored to your career goals.',
    details: 'Our AI analyzes your skills and suggests the most effective learning journey, ensuring you stay on track and motivated.'
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: 'Live Mentorship Sessions',
    description: 'Get 1-on-1 guidance from industry experts and senior engineers to solve your toughest challenges.',
    details: 'Book sessions with mentors from top tech companies to get code reviews, career advice, and project support.'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Collaborative Projects',
    description: 'Build your portfolio by collaborating on real-world projects with a global community of developers.',
    details: 'Join a team, contribute to open-source, and gain practical experience that stands out to employers.'
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Instant Code Environments',
    description: 'Launch fully configured development environments in the cloud with a single click. No setup required.',
    details: 'Access powerful, pre-built coding environments for any tech stack directly from your browser.'
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary font-headline tracking-heading">Exclusive Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline tracking-heading">Why Choose Devsora?</p>
          <p className="mt-6 leading-8 text-muted-foreground font-medium tracking-body">
            We provide unique tools and resources to accelerate your growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="group relative overflow-hidden h-[350px] flex flex-col justify-center items-center text-center p-6">
              <div className="z-10 transition-opacity duration-300 group-hover:opacity-0">
                {feature.icon}
                <h3 className="mt-6 text-xl font-bold font-headline tracking-heading">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground font-medium tracking-body">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-primary/90 p-6 flex flex-col justify-center items-center text-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold font-headline tracking-heading">{feature.title}</h3>
                <p className="mt-4 font-medium tracking-body">{feature.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

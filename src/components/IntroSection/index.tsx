import React from 'react';

export default function IntroSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-primary font-headline">Our Mission</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          Empowering the Next Generation of Innovators
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          At Devsora, our vision is to create a world where anyone, anywhere, can access world-class tech education and build the future. We bridge the gap between ambition and opportunity, providing the tools and community for you to thrive.
        </p>
      </div>
    </section>
  );
}

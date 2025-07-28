
"use client";

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
    {
        question: "What is DEVSORA?",
        answer: "DEVSORA is an open-source EduTech platform designed to help learners acquire practical programming skills and collaborate on real-world projects."
    },
    {
        question: "Who can join DEVSORA?",
        answer: "DEVSORA is for everyone! Whether you're a beginner starting your coding journey, a student looking to build a portfolio, or an experienced developer wanting to contribute to open-source, you'll find a place in our community."
    },
    {
        question: "Is DEVSORA really open-source?",
        answer: "Yes, absolutely. The entire platform is open-source, meaning you can view the source code, suggest improvements, and even contribute to its development. We believe in transparency and community-driven innovation."
    },
    {
        question: "What programming languages and skills can I learn here?",
        answer: "We offer a wide range of courses covering modern technologies, including JavaScript, Python, C++, React, Web3, UI/UX design, and more. Our curriculum is constantly expanding to meet industry demands."
    },
    {
        question: "How does collaboration work on the platform?",
        answer: "Our platform is built around real-world projects. You can join teams, work on collaborative tasks, review code, and contribute to a shared goal, simulating a professional development environment."
    },
    {
        question: "Can I contribute to the platform's development?",
        answer: "Yes! We encourage contributions from our community. You can help us fix bugs, add new features, or improve existing ones. It's a great way to gain experience and make an impact."
    },
    {
        question: "Are there any costs involved?",
        answer: "Our core mission is to make tech education accessible. While most of our content and the platform itself are free and open-source, we may offer premium services or certified courses in the future to sustain the project."
    },
    {
        question: "What makes DEVSORA different from other EduTech platforms?",
        answer: "DEVSORA's unique combination of open-source principles, project-based learning, and a strong community focus sets us apart. We don't just teach you to code; we empower you to build, collaborate, and lead."
    },
    {
        question: "How can I stay updated with new features and opportunities?",
        answer: "Follow us on our social media channels, subscribe to our newsletter, and join our community forums. We regularly post updates about new courses, projects, and platform enhancements."
    }
];

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
        <div className="container px-4 py-24 mx-auto text-center sm:py-32">
            <h1 className="font-headline text-6xl font-bold tracking-widest uppercase sm:text-7xl lg:text-8xl">
                Sikar, Rajasthan
            </h1>
            <p className="max-w-3xl mx-auto mt-8 font-body text-lg leading-relaxed text-muted-foreground">
                Plot. no. 354, Maharaja Surajmal Colony, Nawalgarh Road, Sikar, Rajasthan 332001
            </p>
        </div>

        <div className="container px-4 mx-auto text-center">
            <div className="mb-16">
                <p className="font-semibold tracking-widest text-primary font-headline">FAQ</p>
                <h2 className="font-headline text-8xl font-bold tracking-widest uppercase opacity-20">Frequently Asked Questions</h2>
                <h2 className="font-headline text-8xl font-bold tracking-widest uppercase -mt-14">Frequently Asked Questions</h2>
                <p className="max-w-3xl mx-auto mt-4 font-body text-lg leading-relaxed text-muted-foreground">
                    Everything you need to know about the product and billing.
                </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto text-left">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-primary/30">
                    <AccordionTrigger className="font-headline uppercase text-2xl text-left hover:no-underline data-[state=open]:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-2">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>

        <div className="container px-4 py-24 mx-auto text-center sm:pt-48 sm:pb-32">
            <h2 className="font-headline text-6xl font-bold tracking-widest uppercase sm:text-7xl lg:text-8xl">
                Still have any questions?
            </h2>
            <div className="mt-12">
                 <h3 className="font-headline text-4xl font-bold tracking-widest uppercase text-primary">
                    Sikar, Rajasthan
                </h3>
                <p className="max-w-3xl mx-auto mt-4 font-body text-lg leading-relaxed text-muted-foreground">
                    Plot. no. 354, Maharaja Surajmal Colony, Nawalgarh Road, Sikar, 332001
                </p>
            </div>
        </div>
    </div>
  );
}

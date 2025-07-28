
"use client";

import React from 'react';
import Image from 'next/image';

const teamMembers = [
    { name: 'HITEN BALARA', title: 'Chief Executive Officer', image: 'https://placehold.co/400x400.png', category: 'Leadership' },
    { name: 'PRANJAL', title: 'Chief Technology Officer', image: 'https://placehold.co/400x400.png', category: 'Leadership' },
    { name: 'DEVGURU PANDEY', title: 'UI/UX Designer', image: 'https://placehold.co/400x400.png', category: 'Leadership' },
    { name: 'KUNAL MAHARIA', title: 'Chief Marketing Officer', image: 'https://placehold.co/400x400.png', category: 'Marketing' },
    { name: 'MRIDUL SHARMA', title: 'Social Media Designer', image: 'https://placehold.co/400x400.png', category: 'Marketing' },
    { name: 'Akshat Shrivatava', title: 'Marketing Executive', image: 'https://placehold.co/400x400.png', category: 'Marketing' },
    { name: 'satakshi sinha', title: 'Curriculum Writer', image: 'https://placehold.co/400x400.png', category: 'Content & Community' },
    { name: 'aadhya govil', title: 'Curriculum Writer', image: 'https://placehold.co/400x400.png', category: 'Content & Community' },
    { name: 'Ashira Chitkara', title: 'Community Manager', image: 'https://placehold.co/400x400.png', category: 'Content & Community' },
    { name: 'gargi jain', title: 'Community Manager', image: 'https://placehold.co/400x400.png', category: 'Content & Community' },
    { name: 'Drishti Garg', title: 'Community Manager', image: 'https://placehold.co/400x400.png', category: 'Content & Community' },
    { name: 'ankit kumar', title: 'Backend Developer', image: 'https://placehold.co/400x400.png', category: 'Development' },
];

const leadership = teamMembers.filter(m => m.category === 'Leadership');
const marketing = teamMembers.filter(m => m.category === 'Marketing');
const contentCommunity = teamMembers.filter(m => m.category === 'Content & Community');
const development = teamMembers.filter(m => m.category === 'Development');

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="text-center group">
        <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
            <Image 
                src={member.image} 
                alt={member.name} 
                width={400} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                data-ai-hint="portrait professional"
            />
        </div>
        <h3 className="font-headline text-2xl uppercase font-bold tracking-heading">{member.name}</h3>
        <p className="font-body text-lg text-muted-foreground">{member.title}</p>
    </div>
);

const TeamSection = ({ title, description, members }: { title: string, description: string, members: typeof teamMembers }) => (
    <div className="mb-24">
        <h3 className="font-headline text-4xl uppercase font-bold tracking-heading mb-4">{title}</h3>
        <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-12 font-normal">{description}</p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map(member => (
                <TeamMemberCard key={member.name} member={member} />
            ))}
        </div>
    </div>
);

export default function TeamPage() {
  return (
    <div className="bg-black text-white">
        <div className="container px-4 py-24 mx-auto text-center sm:py-32">
            <h1 className="font-headline text-6xl font-bold tracking-widest uppercase sm:text-7xl lg:text-8xl">
                Meet the<br />
                Trailblazers Behind<br />
                <span className="text-primary">DEVSORA</span>
            </h1>
            <p className="max-w-3xl mx-auto mt-8 font-normal text-lg leading-relaxed text-muted-foreground">
                Our team is the driving force powering DEVSORA's vision. A dynamic blend of passionate educators, visionary developers, and creative innovators, we thrive on collaboration and bold ideas. Every milestone we reach and every feature we launch is a testament to our team's dedication, expertise, and relentless pursuit of excellence. We're proud to work together—building, inspiring, and shaping the future of tech education for the next generation of creators.
            </p>
        </div>

        <div className="container px-4 mx-auto text-center">
            <div className="mb-16">
                <p className="font-semibold tracking-widest text-primary font-headline">TEAM/ BRAINSTORMING</p>
                <h2 className="font-headline text-8xl font-bold tracking-widest uppercase opacity-20">Our Team</h2>
                <h2 className="font-headline text-8xl font-bold tracking-widest uppercase -mt-14">Our Team</h2>
            </div>
            
            <TeamSection 
                title="Leadership"
                description="Our leadership team brings together decades of experience in technology, education, and business to guide DEVSORA's mission."
                members={leadership} 
            />
            <TeamSection 
                title="Marketing"
                description="Our marketing experts are the storytellers who share the DEVSORA vision with the world, building a community of learners and innovators."
                members={marketing} 
            />
            <TeamSection 
                title="Content & Community"
                description="Our curriculum writers and community managers are dedicated to creating high-quality educational content and fostering a supportive, collaborative environment."
                members={contentCommunity} 
            />
            <TeamSection 
                title="Development"
                description="Our developers are the architects and builders of the DEVSORA platform, ensuring a seamless, powerful, and engaging learning experience."
                members={development} 
            />
        </div>
    </div>
  );
}

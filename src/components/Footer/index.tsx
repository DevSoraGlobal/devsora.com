import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const quickLinks = [
  { href: '/learn', label: 'Courses' },
  { href: '/explore', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const resources = [
  { href: '/insights', label: 'Blog' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Support' },
  { href: '#', label: 'Community' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Devsora</span>
            </Link>
            <p className="text-muted-foreground max-w-xs font-normal">
              The ultimate platform for developers to learn, build, and innovate.
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="#"><Github className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#"><Twitter className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#"><Linkedin className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-primary font-normal">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resources.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-primary font-normal">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary font-normal">Privacy Policy</Link></li>
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary font-normal">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-muted-foreground">
          <p className="font-normal">&copy; {new Date().getFullYear()} Devsora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code2, Github, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { href: '/learn', label: 'Courses' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline tracking-heading">Devsora</span>
            </Link>
            <p className="text-muted-foreground max-w-xs font-medium tracking-body">
              The ultimate platform for developers to learn, build, and innovate.
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/DevSoraGlobal" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.instagram.com/devsora_global/" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/company/devsora/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase tracking-heading">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-muted-foreground hover:text-primary font-medium tracking-body">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase tracking-heading">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary font-medium tracking-body">Privacy Policy</Link></li>
              <li><Link href="#" className="text-base text-muted-foreground hover:text-primary font-medium tracking-body">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center text-muted-foreground">
          <p className="font-medium tracking-body">&copy; {new Date().getFullYear()} Devsora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

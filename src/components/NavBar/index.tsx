"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/explore', label: 'Explore' },
  { href: '/insights', label: 'Insights' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/learn', label: 'Learn' },
  { href: '/global', label: 'Global' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLoggedIn = false;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="hidden sm:inline text-xl font-bold font-headline tracking-heading">Devsora</span>
          </Link>
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className={cn(
          "hidden md:flex items-center gap-2 px-3 py-2 transition-all duration-300",
           isScrolled ? "bg-black/50 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl shadow-black/20" : ""
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-red-500 tracking-body"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Right: Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {isLoggedIn ? (
            <Link href="/dashboard">
              <div className="h-8 w-8 rounded-full bg-primary" />
            </Link>
          ) : (
            <>
              <Button variant="ghost" className="tracking-body">Sign In</Button>
              <Button className="tracking-body">Sign Up</Button>
            </>
          )}
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 p-4 border-b border-border">
                    <Code2 className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold font-headline tracking-heading">Devsora</span>
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium mt-8 px-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-foreground transition-colors hover:text-red-500 tracking-body" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-border flex flex-col gap-4">
                  {isLoggedIn ? (
                     <Link href="/dashboard" passHref>
                        <Button className="w-full tracking-body">Dashboard</Button>
                    </Link>
                  ) : (
                    <>
                      <Button variant="ghost" className="w-full tracking-body">Sign In</Button>
                      <Button className="w-full tracking-body">Sign Up</Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

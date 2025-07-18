"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';

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

  const isLoggedIn = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex h-16 items-center justify-between gap-8">
        {/* Left: Logo and Brand Name */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Devsora</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="group flex-1 flex justify-center transition-transform duration-300 ease-in-out hover:scale-105">
          <nav className="hidden md:flex items-center gap-6 px-6 sm:px-8 lg:px-10 bg-background/80 backdrop-blur-sm border border-border/40 rounded-full shadow-lg group-hover:shadow-primary/20 h-16">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Link href="/dashboard">
              <div className="h-8 w-8 rounded-full bg-primary" />
            </Link>
          ) : (
            <>
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </>
          )}
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
                <Code2 className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline">Devsora</span>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 text-lg font-medium mt-16">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-foreground transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col gap-4">
                    {isLoggedIn ? (
                       <Link href="/dashboard" passHref>
                          <Button className="w-full">Dashboard</Button>
                      </Link>
                    ) : (
                      <>
                        <Button variant="ghost" className="w-full">Sign In</Button>
                        <Button className="w-full">Sign Up</Button>
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

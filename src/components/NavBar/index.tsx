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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:py-4">
      <div className="container mx-auto flex h-16 items-center justify-between relative">
        {/* Left: Logo and Brand Name */}
        <div className="flex-1 flex justify-start z-10">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline tracking-heading">Devsora</span>
          </Link>
        </div>

        {/* Center: Navigation (Absolutely Centered) */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="group transition-transform duration-300 ease-in-out hover:scale-105 pointer-events-auto">
            <nav className="flex items-center gap-2 px-3 py-2 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl shadow-black/20 group-hover:shadow-primary/20 transition-shadow duration-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary tracking-body overflow-hidden rounded-full group/link"
                >
                  <span className="relative z-10">{link.label}</span>
                   <span className="absolute inset-0 bg-primary/20 scale-0 transition-transform duration-300 ease-in-out group-hover/link:scale-100 rounded-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Right: Auth Buttons */}
        <div className="flex-1 flex justify-end items-center gap-4 z-10">
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
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2">
                <Code2 className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold font-headline tracking-heading">Devsora</span>
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
                      <Link key={link.href} href={link.href} className="text-foreground transition-colors hover:text-primary tracking-body" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto flex flex-col gap-4">
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

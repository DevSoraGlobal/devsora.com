"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import AuthModal from '@/components/AuthModal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { href: '/learn', label: 'Learn' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'signin' | 'signup'>('signin');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ fullName?: string; username?: string, email?: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch('/api/auth/verify');
        const data = await response.json();
        if (response.ok) {
          setIsLoggedIn(true);
          setUser(data.user);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };
    verifyUser();
  }, []);

  const openAuthModal = (tab: 'signin' | 'signup') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
        setIsLoggedIn(false);
        setUser(null);
        window.location.reload();
      } else {
        toast({ title: 'Logout Failed', description: 'Something went wrong.', variant: 'destructive' });
      }
    } catch (error) {
       toast({ title: 'Error', description: 'Could not connect to the server.', variant: 'destructive' });
    }
  };
  
  const headerClasses = cn(
    "sticky top-0 z-50 transition-all duration-300",
    isScrolled ? "py-2" : "py-4"
  );

  const containerClasses = cn(
      "container mx-auto flex items-center justify-between relative transition-all duration-300",
      isScrolled ? "bg-black/50 backdrop-blur-lg border border-white/10 rounded-full" : ""
  );

  return (
    <>
      <header className={headerClasses}>
        <div className={containerClasses}>
          <div className="flex items-center pl-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="hidden sm:inline text-xl font-bold font-headline tracking-heading">Devsora</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold uppercase text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground tracking-body rounded-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4 pr-4 py-2">
            {isLoggedIn && user ? (
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://api.dicebear.com/7.x/micah/svg?seed=${user.username}`} alt={user.username} />
                        <AvatarFallback>{user.username?.[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.fullName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" className="tracking-body rounded-full border-primary hover:bg-primary/10 hover:text-primary-foreground border-2" onClick={() => openAuthModal('signin')}>Sign In</Button>
                <Button className="tracking-body rounded-full" onClick={() => openAuthModal('signup')}>Sign Up</Button>
              </>
            )}
          </div>
          
          <div className="md:hidden flex items-center ml-auto">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
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
                      <Link key={link.href} href={link.href} className="text-foreground transition-colors hover:text-primary tracking-body" onClick={() => setIsMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t border-border flex flex-col gap-4">
                    {isLoggedIn ? (
                       <>
                         <Link href="/dashboard" passHref>
                            <Button className="w-full tracking-body rounded-full">Dashboard</Button>
                        </Link>
                        <Button variant="outline" className="w-full tracking-body rounded-full" onClick={handleLogout}>Logout</Button>
                       </>
                    ) : (
                      <>
                        <Button variant="outline" className="w-full tracking-body rounded-full border-primary hover:bg-primary/10 hover:text-primary-foreground" onClick={() => {openAuthModal('signin'); setIsMobileMenuOpen(false);}}>Sign In</Button>
                        <Button className="w-full tracking-body rounded-full" onClick={() => {openAuthModal('signup'); setIsMobileMenuOpen(false);}}>Sign Up</Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {!isLoggedIn && <AuthModal isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} defaultTab={authModalTab} />}
    </>
  );
}


"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  defaultTab?: 'signin' | 'signup';
}

const SignInForm = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email-signin" className="font-body text-lg">Email</Label>
      <Input id="email-signin" type="email" placeholder="you@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password-signin" className="font-body text-lg">Password</Label>
      <Input id="password-signin" type="password" placeholder="••••••••" />
    </div>
    <Button type="submit" size="lg" className="w-full font-body text-lg tracking-wider">Sign In</Button>
  </div>
);

const SignUpForm = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name-signup" className="font-body text-lg">Full Name</Label>
      <Input id="name-signup" placeholder="John Doe" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email-signup" className="font-body text-lg">Email</Label>
      <Input id="email-signup" type="email" placeholder="you@example.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password-signup" className="font-body text-lg">Password</Label>
      <Input id="password-signup" type="password" placeholder="Create a password" />
    </div>
    <Button type="submit" size="lg" className="w-full font-body text-lg tracking-wider">Create Account</Button>
  </div>
);

export default function AuthModal({ isOpen, onOpenChange, defaultTab = 'signin' }: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background text-foreground border-primary/20 w-[600px] h-auto max-h-[98vh] max-w-[95vw] sm:h-[800px] p-0 flex flex-col">
        <DialogHeader className="p-8 pb-0">
          <DialogTitle className="font-headline text-5xl text-center uppercase tracking-widest text-primary">
            Welcome to Devsora
          </DialogTitle>
          <DialogDescription className="text-center font-body text-lg text-muted-foreground pt-2">
            Sign in or create an account to continue your journey.
          </DialogDescription>
        </DialogHeader>
        <div className="p-8 flex-grow overflow-y-auto">
            <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-secondary/50">
                    <TabsTrigger value="signin" className="font-headline text-xl uppercase tracking-wider">Sign In</TabsTrigger>
                    <TabsTrigger value="signup" className="font-headline text-xl uppercase tracking-wider">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin" className="pt-8">
                    <SignInForm />
                </TabsContent>
                <TabsContent value="signup" className="pt-8">
                    <SignUpForm />
                </TabsContent>
            </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

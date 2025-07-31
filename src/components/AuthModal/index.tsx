
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  defaultTab?: 'signin' | 'signup';
}

const signUpSchema = z.object({
  fullname: z.string().min(1, 'Full name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const signInSchema = z.object({
  username_email: z.string().min(1, 'Username or email is required'),
  password: z.string().min(1, 'Password is required'),
});

const SignInForm = ({ onSuccessfulSignIn, onLoadingChange }: { onSuccessfulSignIn: () => void, onLoadingChange: (loading: boolean) => void }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    onLoadingChange(true);
    try {
      const response = await fetch('https://webserver.devsora.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Sign In Successful",
          description: "Welcome back!",
        });
        onSuccessfulSignIn();
      } else {
        toast({
          title: "Sign In Failed",
          description: result.error || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not connect to the server.",
        variant: "destructive",
      });
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username_email-signin" className="font-body text-lg">Username or Email</Label>
        <Input id="username_email-signin" {...register('username_email')} placeholder="username or email" />
        {errors.username_email && <p className="text-destructive text-sm">{`${errors.username_email.message}`}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-signin" className="font-body text-lg">Password</Label>
        <Input id="password-signin" type="password" {...register('password')} placeholder="••••••••" />
        {errors.password && <p className="text-destructive text-sm">{`${errors.password.message}`}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full font-body text-lg tracking-wider">
        Sign In
      </Button>
    </form>
  );
};

const SignUpForm = ({ onSuccessfulSignUp, onLoadingChange }: { onSuccessfulSignUp: () => void, onLoadingChange: (loading: boolean) => void }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    onLoadingChange(true);
    try {
      const response = await fetch('https://webserver.devsora.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Account Created",
          description: "You have successfully signed up!",
        });
        onSuccessfulSignUp();
      } else {
        toast({
          title: "Sign Up Failed",
          description: result.error || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
        title: "Error",
        description: "Could not connect to the server.",
        variant: "destructive",
      });
    } finally {
      onLoadingChange(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullname-signup" className="font-body text-lg">Full Name</Label>
        <Input id="fullname-signup" {...register('fullname')} placeholder="John Doe" />
         {errors.fullname && <p className="text-destructive text-sm">{`${errors.fullname.message}`}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="username-signup" className="font-body text-lg">Username</Label>
        <Input id="username-signup" {...register('username')} placeholder="johndoe" />
        {errors.username && <p className="text-destructive text-sm">{`${errors.username.message}`}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-signup" className="font-body text-lg">Email</Label>
        <Input id="email-signup" type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className="text-destructive text-sm">{`${errors.email.message}`}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-signup" className="font-body text-lg">Password</Label>
        <Input id="password-signup" type="password" {...register('password')} placeholder="Create a password" />
        {errors.password && <p className="text-destructive text-sm">{`${errors.password.message}`}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full font-body text-lg tracking-wider">
        Create Account
      </Button>
    </form>
  );
};

export default function AuthModal({ isOpen, onOpenChange, defaultTab = 'signin' }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = () => {
    onOpenChange(false);
    window.location.reload();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={isLoading ? () => {} : onOpenChange}>
      <DialogContent 
        className="bg-background text-foreground border-primary/20 w-[600px] h-auto max-h-[98vh] max-w-[95vw] sm:h-auto sm:max-h-[800px] p-0 flex flex-col"
        onInteractOutside={(e) => {
          if (isLoading) {
            e.preventDefault();
          }
        }}
      >
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
                    <SignInForm onSuccessfulSignIn={handleSuccess} onLoadingChange={setIsLoading} />
                </TabsContent>
                <TabsContent value="signup" className="pt-8">
                    <SignUpForm onSuccessfulSignUp={handleSuccess} onLoadingChange={setIsLoading}/>
                </TabsContent>
            </Tabs>
        </div>
        {isLoading && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

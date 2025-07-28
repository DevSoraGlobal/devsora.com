
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveGlobe from '@/components/Globe';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const faqs = [
  {
    question: "What is DEVSORA?",
    answer: "DEVSORA is an open-source EduTech platform designed to help learners acquire practical programming skills and collaborate on real-world projects."
  },
  {
    question: "Is DEVSORA really open-source?",
    answer: "Yes, absolutely. The entire platform is open-source, meaning you can view the source code, suggest improvements, and even contribute to its development."
  },
  {
      question: "What makes DEVSORA different?",
      answer: "DEVSORA's unique combination of open-source principles, project-based learning, and a strong community focus sets us apart. We empower you to build, collaborate, and lead."
  },
  {
    question: "Are there any costs involved?",
    answer: "Our core mission is to make tech education accessible. The platform and most of our content are free and open-source. We may offer premium services in the future to sustain the project."
  }
];

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
  }

  return (
    <div className="bg-black text-white min-h-[calc(100vh-var(--navbar-height))]">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="font-headline text-5xl sm:text-7xl font-bold tracking-wider uppercase">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-muted-foreground">
            Have a question, a project idea, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card p-8 rounded-lg border border-primary/20"
          >
            <h2 className="font-headline text-3xl font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Regarding a project..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your detailed message..." {...field} className="min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full tracking-wider uppercase font-bold">
                  Submit Form
                </Button>
              </form>
            </Form>
            
            <div className="mt-12 text-center">
                <div className="border-t border-primary/20 my-8"></div>
                <h3 className="font-headline text-2xl font-bold mb-4">Direct Contact</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-muted-foreground">
                    <a href="mailto:info@devsora.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="h-5 w-5"/>
                        info@devsora.com
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary"/>
                        Sikar, Rajasthan, India
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Globe & FAQ */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             className="flex flex-col gap-12"
          >
            <div className="relative w-full h-96 rounded-lg bg-card border border-primary/20 flex items-center justify-center overflow-hidden">
                <InteractiveGlobe />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <h2 className="absolute bottom-8 font-headline text-4xl text-white font-bold tracking-wider z-10">
                    Connecting Globally
                </h2>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/30">
                      <AccordionTrigger className="font-headline uppercase text-xl text-left hover:no-underline data-[state=open]:text-primary py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-0 text-muted-foreground">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

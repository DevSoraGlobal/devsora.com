
"use client";

import React, { useEffect } from 'react';
import { X, Clock, Award, BookOpen, ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Course } from '@/lib/courses';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in-0"
      onClick={onClose}
    >
      <div
        className="bg-black border border-primary/20 rounded-2xl w-full max-w-[1200px] h-full max-h-[90vh] flex flex-col sm:flex-row shadow-2xl shadow-primary/20 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-[110] bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/80 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-white border-r-0 sm:border-r border-primary/20">
            <h2 className="font-headline uppercase text-5xl lg:text-6xl font-bold tracking-heading text-primary">
                {course.title}
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
                {course.detailedDescription}
            </p>
            {course.duration && (
                <div className="mt-8 flex items-center gap-4 text-primary">
                    <Clock className="h-8 w-8" />
                    <span className="font-headline text-2xl font-semibold tracking-wider">{course.duration}</span>
                </div>
            )}
             {(course.badges && course.badges.length > 0) && (
                <div className="mt-10">
                    <h4 className="font-headline uppercase text-xl font-semibold tracking-wider text-white">Badges You'll Earn</h4>
                    <div className="flex flex-wrap gap-4 mt-4">
                        {course.badges.map(badge => (
                            <div key={badge.name} className="flex items-center gap-3 bg-secondary p-3 rounded-lg border border-primary/20">
                                <Award className="h-8 w-8 text-primary" />
                                <div>
                                    <p className="font-headline font-semibold text-white tracking-wider">{badge.name}</p>
                                    <p className="text-sm text-muted-foreground font-body">{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col">
            <h3 className="font-headline uppercase text-3xl font-bold tracking-wider text-white flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary"/>
                Course Outline
            </h3>
            <ScrollArea className="flex-grow mt-6 pr-4 -mr-4">
                <article className="prose prose-invert max-w-none">
                    <ReactMarkdown>{course.toc.map(c => c.content).join('\n\n')}</ReactMarkdown>
                </article>
            </ScrollArea>
             <div className="mt-6">
                <Link href={`/learn/${course.slug}`} passHref>
                    <Button size="lg" className="w-full font-headline tracking-widest text-lg">
                        Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { useEffect } from 'react';
import { X, Clock, Award, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Course } from '@/components/LearnPage'; // Reuse the interface from LearnPage

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

  const flattenTOC = (format: any[] = []): any[] => {
    const items: any[] = [];
    if (!Array.isArray(format)) return items;

    format.forEach(chapterObj => {
        const chapterName = Object.keys(chapterObj)[0];
        items.push({ isChapter: true, title: chapterName });
        const topics = chapterObj[chapterName];
        
        Object.keys(topics).forEach(topicGroupKey => {
             const topicGroup = topics[topicGroupKey as keyof typeof topics];
             Object.keys(topicGroup).forEach(topicKey => {
                 items.push({ title: topicKey });
             });
        });
    });
    return items;
  };

  const tocItems = flattenTOC(course.format);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in-0"
      onClick={onClose}
    >
      <div
        className="bg-black border border-primary/20 rounded-2xl w-full max-w-[1200px] h-full max-h-[800px] flex flex-col sm:flex-row shadow-2xl shadow-primary/20 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-[110] bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/80 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Left Section */}
        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-white border-r-0 sm:border-r border-primary/20">
            <h2 className="font-headline uppercase text-5xl lg:text-6xl font-bold tracking-heading text-primary">
                {course.courseName}
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

        {/* Right Section */}
        <div className="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col">
            <h3 className="font-headline uppercase text-3xl font-bold tracking-wider text-white flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary"/>
                Course Outline
            </h3>
            <ScrollArea className="flex-grow mt-6 pr-4 -mr-4">
                <ul className="space-y-2">
                    {tocItems.map((item, index) => (
                        <li key={index} className={cn("transition-all", item.isChapter ? 'mt-4' : 'ml-4')}>
                           {item.isChapter ? (
                                <h4 className="font-headline text-xl font-semibold text-primary tracking-wider">{item.title}</h4>
                           ) : (
                             <p className="font-body text-base text-muted-foreground">{item.title}</p>
                           )}
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </div>
      </div>
    </div>
  );
}


"use client";

import React, { useState } from 'react';
import { Course, CourseTopic } from '@/lib/courses';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, BarChart, BookOpen, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface CourseContentPageProps {
  course: Course;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

export default function CourseContentPage({ course }: CourseContentPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<CourseTopic | null>(course.toc[0]?.topics[0] || null);

  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Course TOC */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="p-6 bg-secondary/30 rounded-lg">
            <h3 className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              Course Content
            </h3>
            <ScrollArea className="mt-4 h-[calc(100vh-250px)] pr-4 -mr-4">
              <div className="space-y-4">
                {course.toc.map((chapter, chapterIndex) => (
                  <div key={chapterIndex}>
                    <h4 className="font-headline text-lg font-semibold tracking-wider text-white mb-2">
                      {chapter.title}
                    </h4>
                    <ul className="space-y-1">
                      {chapter.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>
                          <button
                            onClick={() => setSelectedTopic(topic)}
                            className={cn(
                              "w-full text-left p-2 rounded-md text-sm transition-colors flex items-start gap-2",
                              selectedTopic?.title === topic.title
                                ? "bg-primary/20 text-primary"
                                : "text-muted-foreground hover:bg-secondary/50 hover:text-white"
                            )}
                          >
                            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>{topic.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Right Side: Content Display */}
        <div className="lg:col-span-8">
            <h1 className="font-headline uppercase text-6xl font-bold tracking-heading text-primary">
                {course.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
                {course.detailedDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center gap-3">
                    <BarChart className="h-6 w-6 text-primary" />
                    <Badge variant="outline" className={`${difficultyColors[course.difficulty]} text-base font-body`}>
                        {course.difficulty}
                    </Badge>
                </div>
                <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <span className="font-body text-base text-muted-foreground">{course.duration}</span>
                </div>
            </div>

            <div className="mt-16 bg-secondary/30 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                 {selectedTopic ? (
                    <div className="text-center">
                        <h2 className="font-headline text-4xl font-bold tracking-wider">{selectedTopic.title}</h2>
                        {selectedTopic.description && (
                            <p className="text-muted-foreground font-body text-lg mt-4 max-w-lg">{selectedTopic.description}</p>
                        )}
                         <p className="font-body text-primary mt-4 text-sm font-semibold tracking-wider">Content for this topic will appear here.</p>
                    </div>
                 ) : (
                    <p className="text-muted-foreground font-body text-lg">Select a topic to begin.</p>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
}

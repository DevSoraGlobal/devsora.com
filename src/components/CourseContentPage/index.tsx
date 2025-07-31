
"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Clock, BarChart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

// New interfaces based on the API response
export interface CourseTopic {
    [key: string]: string;
}

export interface CourseChapter {
    [key: string]: CourseTopic;
}

export interface CourseFormat {
    [key: string]: CourseChapter;
}
export interface Course {
  _id: string;
  courseName: string;
  slug: string;
  description?: string;
  detailedDescription?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  format: CourseFormat[];
}

interface CourseContentPageProps {
  course: Course;
}

interface TocItem {
    title: string;
    content: string;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

export default function CourseContentPage({ course }: CourseContentPageProps) {
    // Flatten the complex format into a simple array of topics
    const flattenTOC = (format: CourseFormat[]): TocItem[] => {
        const items: TocItem[] = [];
        format.forEach(chapterObj => {
            const chapterName = Object.keys(chapterObj)[0];
            const chapterContent = chapterObj[chapterName];
            
            Object.keys(chapterContent).forEach(topicGroupKey => {
                 const topicGroup = chapterContent[topicGroupKey as keyof typeof chapterContent];
                 Object.keys(topicGroup).forEach(topicKey => {
                     items.push({ title: topicKey, content: topicGroup[topicKey] });
                 });
            });
        });
        return items;
    };
    
    const tocItems = flattenTOC(course.format);
    const [selectedTopic, setSelectedTopic] = useState<TocItem | null>(tocItems[0] || null);

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
              <div className="space-y-1">
                {tocItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTopic(item)}
                        className={cn(
                          "w-full text-left p-2 rounded-md text-sm transition-colors flex items-start gap-2",
                          selectedTopic?.title === item.title
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-white"
                        )}
                      >
                        <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{item.title}</span>
                      </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Right Side: Content Display */}
        <div className="lg:col-span-8">
            <h1 className="font-headline uppercase text-6xl font-bold tracking-heading text-primary">
                {course.courseName}
            </h1>
            <p className="font-normal text-lg text-muted-foreground mt-6 leading-relaxed">
                {course.description || "A detailed course to expand your knowledge."}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                {course.difficulty && (
                    <div className="flex items-center gap-3">
                        <BarChart className="h-6 w-6 text-primary" />
                        <Badge variant="outline" className={`${difficultyColors[course.difficulty]} text-base font-normal`}>
                            {course.difficulty}
                        </Badge>
                    </div>
                )}
                {course.duration && (
                    <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <span className="font-normal text-base text-muted-foreground">{course.duration}</span>
                    </div>
                )}
            </div>

            <div className="mt-16 bg-secondary/30 rounded-lg p-8 min-h-[300px]">
                 {selectedTopic ? (
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="font-headline text-4xl font-bold tracking-wider">{selectedTopic.title}</h2>
                        <ReactMarkdown>{selectedTopic.content}</ReactMarkdown>
                    </article>
                 ) : (
                    <p className="text-muted-foreground font-normal text-lg">Select a topic to begin.</p>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
}

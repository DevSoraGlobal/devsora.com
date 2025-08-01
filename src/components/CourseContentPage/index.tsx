
"use client";

import React, { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Clock, BarChart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import type { Course, Topic } from '@/lib/courses';

interface CourseContentPageProps {
  course: Course;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

const parseTocToTopics = (tocContent: string): Topic[] => {
    if (!tocContent) return [];

    const lines = tocContent.split('\n');
    const topics: Topic[] = [];
    let currentContent: string[] = [];
    let currentTitle = '';

    const mainTitleLine = lines.find(line => line.startsWith('# '));
    const mainTitle = mainTitleLine ? mainTitleLine.substring(2) : 'Course Introduction';

    const contentStartIndex = mainTitleLine ? lines.indexOf(mainTitleLine) + 1 : 0;
    
    for (let i = contentStartIndex; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('## ')) {
            if (currentTitle) {
                topics.push({ title: currentTitle, content: currentContent.join('\n').trim() });
            }
            currentTitle = line.substring(3).trim();
            currentContent = [];
        } else {
            currentContent.push(line);
        }
    }
    if (currentTitle) {
        topics.push({ title: currentTitle, content: currentContent.join('\n').trim() });
    }

    return topics;
};


export default function CourseContentPage({ course }: CourseContentPageProps) {
    const topics = useMemo(() => parseTocToTopics(course.toc[0]?.content || ''), [course.toc]);
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(topics[0] || null);

  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8">
            <div className="lg:sticky lg:top-24">
                <h1 className="font-headline uppercase text-6xl font-bold tracking-heading text-primary">
                    {course.title}
                </h1>
                <p className="font-normal text-lg text-muted-foreground mt-6 leading-relaxed">
                    {course.detailedDescription}
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

                <div className="mt-12 bg-secondary/30 rounded-lg p-8 min-h-[300px]">
                    {selectedTopic ? (
                        <article className="prose prose-invert prose-lg max-w-none">
                             <h2 className="text-3xl font-bold font-headline text-primary mb-4">{selectedTopic.title}</h2>
                            <ReactMarkdown>{selectedTopic.content}</ReactMarkdown>
                        </article>
                    ) : (
                        <p className="text-muted-foreground font-normal text-lg">Select a topic from the sidebar to begin.</p>
                    )}
                </div>
            </div>
        </div>

        <div className="lg:col-span-4">
          <div className="p-6 bg-secondary/30 rounded-lg lg:sticky lg:top-24">
            <h3 className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              Course Content
            </h3>
            <ScrollArea className="mt-4 h-[calc(100vh-250px)] pr-4 -mr-4">
              <div className="space-y-1">
                {topics.map((topic, topicIndex) => (
                    <button
                        key={topicIndex}
                        onClick={() => setSelectedTopic(topic)}
                        className={cn(
                        "w-full text-left p-3 rounded-md text-base transition-colors flex items-start gap-2.5",
                        selectedTopic?.title === topic.title
                            ? "bg-primary/20 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-secondary/50 hover:text-white"
                        )}
                    >
                        <CheckCircle className="h-4 w-4 mt-1 shrink-0" />
                        <span>{topic.title}</span>
                    </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

      </div>
    </div>
  );
}

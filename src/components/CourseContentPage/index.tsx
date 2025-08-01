
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Clock, BarChart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

// Interfaces to match the nested structure of the API response
export interface Topic {
    title: string;
    content: string;
}

export interface TopicGroup {
    groupName: string;
    topics: Topic[];
}

export interface Chapter {
    chapterName: string;
    topicGroups: TopicGroup[];
}

export interface Course {
  _id: string;
  courseName: string;
  description?: string;
  detailedDescription?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  format: any[]; // Use 'any' for the raw format, we will parse it
}

interface CourseContentPageProps {
  course: Course;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

export default function CourseContentPage({ course }: CourseContentPageProps) {
    useEffect(() => (
        console.log(course)
    ), [])
    
    // A function to parse the raw format from the API into our structured Chapter/Topic interfaces
    const parseCourseFormat = (format: any[]): Chapter[] => {
        if (!Array.isArray(format)) return [];

        return format.map(chapterObj => {
            const chapterName = Object.keys(chapterObj)[0];
            const topicGroupsObj = chapterObj[chapterName];
            
            const topicGroups: TopicGroup[] = Object.keys(topicGroupsObj).map(groupName => {
                const topicsObj = topicGroupsObj[groupName];
                const topics: Topic[] = Object.keys(topicsObj).map(topicTitle => ({
                    title: topicTitle,
                    content: topicsObj[topicTitle],
                }));
                return { groupName, topics };
            });

            return { chapterName, topicGroups };
        });
    };

    // useMemo will only re-parse the course format if the course object changes
    const chapters = useMemo(() => parseCourseFormat(course.format), [course]);
    
    // Set the initial selected topic to the first topic of the first group of the first chapter
    const firstTopic = chapters[0]?.topicGroups[0]?.topics[0] || null;
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(firstTopic);

  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side (now content): Course Content Display */}
        <div className="lg:col-span-8">
            <div className="lg:sticky lg:top-24">
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

                <div className="mt-12 bg-secondary/30 rounded-lg p-8 min-h-[300px]">
                    {selectedTopic ? (
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="font-headline text-4xl font-bold tracking-wider">{selectedTopic.title}</h2>
                            <ReactMarkdown>{selectedTopic.content}</ReactMarkdown>
                        </article>
                    ) : (
                        <p className="text-muted-foreground font-normal text-lg">Select a topic from the sidebar to begin.</p>
                    )}
                </div>
            </div>
        </div>

        {/* Right Side (now sidebar): Course TOC */}
        <div className="lg:col-span-4">
          <div className="p-6 bg-secondary/30 rounded-lg lg:sticky lg:top-24">
            <h3 className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-3">
              <BookOpen className="h-7 w-7" />
              Course Content
            </h3>
            <ScrollArea className="mt-4 h-[calc(100vh-250px)] pr-4 -mr-4">
              <div className="space-y-4">
                {chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex}>
                        <h4 className="font-headline text-xl font-bold tracking-wider text-white mb-2">
                           Module {chapterIndex + 1}: {chapter.chapterName}
                        </h4>
                        {chapter.topicGroups.map((group, groupIndex) => (
                             <div key={groupIndex} className="pl-2">
                                {/* <p className="text-sm font-semibold text-primary/80 mb-1">{group.groupName}</p> */}
                                <div className="space-y-1">
                                    {group.topics.map((topic, topicIndex) => (
                                        <button
                                            key={topicIndex}
                                            onClick={() => setSelectedTopic(topic)}
                                            className={cn(
                                            "w-full text-left p-2 rounded-md text-base transition-colors flex items-start gap-2.5",
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
                            </div>
                        ))}
                    </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

      </div>
    </div>
  );
}

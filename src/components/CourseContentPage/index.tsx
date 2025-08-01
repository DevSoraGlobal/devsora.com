
"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Clock, BarChart, Copy, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import type { Course, Topic, Module } from '@/lib/courses';
import { Button } from '@/components/ui/button';

interface CourseContentPageProps {
  course: Course;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

const CodeBlock = ({ node, className, children, ...props }: any) => {
    const [isCopied, setIsCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const codeText = String(children).replace(/\n$/, '');

    const handleCopy = () => {
        navigator.clipboard.writeText(codeText).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="relative group">
            <pre {...props} className={cn(className, "p-4 rounded-lg bg-black/50 my-4 overflow-x-auto")}>
                <code>{children}</code>
            </pre>
            <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleCopy}
            >
                {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
        </div>
    );
};


const ModuleContent = ({ module }: { module: Module }) => {
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(module.topics[0] || null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-1">
            <div className="lg:col-span-8">
                <div className="bg-secondary/30 rounded-lg p-8 min-h-[400px]">
                    {selectedTopic ? (
                        <article className="prose prose-invert prose-lg max-w-none">
                            <ReactMarkdown components={{ pre: CodeBlock }}>
                                {selectedTopic.content}
                            </ReactMarkdown>
                        </article>
                    ) : (
                        <p className="text-muted-foreground font-normal text-lg">Select a topic to begin.</p>
                    )}
                </div>
            </div>

            <div className="lg:col-span-4">
                <div className="p-6 bg-secondary/30 rounded-lg h-full">
                    <h3 className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-3">
                        <BookOpen className="h-7 w-7" />
                        Topics
                    </h3>
                    <ScrollArea className="mt-4 h-[350px] pr-4 -mr-4">
                        <div className="space-y-1">
                            {module.topics.map((topic, topicIndex) => (
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
    );
};


export default function CourseContentPage({ course }: CourseContentPageProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="font-headline uppercase text-6xl font-bold tracking-heading text-primary">
                {course.title}
            </h1>
            <p className="font-normal text-lg text-muted-foreground mt-6 leading-relaxed max-w-4xl mx-auto">
                {course.detailedDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
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
        </div>
        
        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {course.modules.map((module, index) => (
             <AccordionItem key={index} value={`item-${index}`} className="border-2 border-primary/20 rounded-lg mb-4 bg-black">
                <AccordionTrigger className="text-left font-headline text-3xl uppercase font-bold text-white hover:no-underline hover:text-primary data-[state=open]:text-primary px-8 py-6">
                    {module.title}
                </AccordionTrigger>
                <AccordionContent className="font-normal text-lg text-muted-foreground p-2 md:p-6">
                    <ModuleContent module={module} />
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

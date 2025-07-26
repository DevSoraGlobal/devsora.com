
"use client";

import React, { useState } from 'react';
import { Course } from '@/lib/courses';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, BarChart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface CourseContentPageProps {
  course: Course;
}

const difficultyColors: { [key: string]: string } = {
    Beginner: 'border-green-700/50 text-green-300',
    Intermediate: 'border-orange-600/50 text-orange-400',
    Advanced: 'border-red-700/50 text-red-300',
};

export default function CourseContentPage({ course }: CourseContentPageProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentModuleIndex(prevIndex => prevIndex + newDirection);
  };

  const currentModule = course.toc[currentModuleIndex];

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };


  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[calc(100vh-200px)]">
        
        {/* Left Side: Static Course Info */}
        <div className="lg:sticky lg:top-24 h-fit flex flex-col">
          <h1 className="font-headline uppercase text-6xl font-bold tracking-heading text-primary">
            {course.title}
          </h1>
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            {course.detailedDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4">
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
        </div>

        {/* Right Side: Interactive Content */}
        <div className="flex flex-col justify-center items-center overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentModuleIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full flex flex-col justify-center items-center text-center p-8 bg-secondary/30 rounded-lg"
                >
                    <h2 className="font-headline text-4xl font-bold tracking-wider">{currentModule.title}</h2>
                    <p className="text-muted-foreground font-body text-lg mt-4 max-w-lg">{currentModule.description}</p>
                    <p className="font-body text-primary mt-4 text-sm font-semibold tracking-wider">Estimated Time: {currentModule.time}</p>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 flex gap-4">
                <Button 
                    size="lg" 
                    onClick={() => paginate(-1)} 
                    disabled={currentModuleIndex === 0}
                    className="disabled:opacity-30"
                >
                    <ArrowLeft className="h-6 w-6" />
                </Button>
                <Button 
                    size="lg" 
                    onClick={() => paginate(1)} 
                    disabled={currentModuleIndex === course.toc.length - 1}
                    className="disabled:opacity-30"
                >
                    <ArrowRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

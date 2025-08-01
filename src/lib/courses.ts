
export interface Topic {
    title: string;
    content: string;
}

export interface Toc {
    title: string;
    topics: Topic[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  image?: string;
  aiHint?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  badges: { name: string; description: string }[];
  toc: Toc[];
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Master the fundamentals of JavaScript, the language of the web.',
    detailedDescription: 'This course provides a comprehensive overview of JavaScript, starting from the very basics and moving towards advanced topics. You will learn about variables, data types, functions, objects, and the DOM. By the end, you will be able to build interactive web applications.',
    difficulty: 'Beginner',
    duration: '12 Hours',
    badges: [
      { name: 'JS Basics', description: 'Completed introduction' },
      { name: 'DOM Master', description: 'Manipulated the DOM' }
    ],
    toc: [
      {
        title: 'Module 1: Introduction to JavaScript',
        topics: [
          { title: 'What is JavaScript?', content: '## What is JavaScript?\n\nJavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more.' },
          { title: 'Setting up your environment', content: '## Setting up your environment\n\nAll you need is a web browser and a text editor...' },
          { title: 'Variables and Data Types', content: '## Variables and Data Types\n\nLearn about variables (`let`, `const`, `var`) and different data types in JS.' },
          { title: 'Operators', content: '## Operators\n\nExplore arithmetic, assignment, comparison, and logical operators.' },
        ]
      },
      {
        title: 'Module 2: Control Flow',
        topics: [
          { title: 'Conditional Statements', content: '## Conditional Statements\n\nLearn to use `if`, `else if`, and `else` to control the flow of your code.' },
          { title: 'Loops', content: '## Loops\n\nUnderstand `for` and `while` loops for repetitive tasks.' },
        ]
      },
      {
        title: 'Module 3: Functions',
        topics: [
          { title: 'Defining Functions', content: '## Defining Functions\n\nLearn how to define and call functions.' },
          { title: 'Arrow Functions', content: '## Arrow Functions\n\nDiscover the modern syntax for writing functions.' },
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'advanced-react-patterns',
    title: 'Advanced React Patterns',
    description: 'Level up your React skills with advanced patterns and techniques.',
    detailedDescription: 'Dive deep into the React ecosystem. This course covers hooks, context, performance optimization, and advanced patterns like Higher-Order Components (HOCs) and Render Props. You will also learn about state management with libraries like Redux and Zustand.',
    difficulty: 'Advanced',
    duration: '20 Hours',
    badges: [
        { name: 'React Hooks Pro', description: 'Mastered advanced hooks' },
        { name: 'Performance Ninja', description: 'Optimized a React app' }
    ],
    toc: [
        {
            title: 'Module 1: Deep Dive into Hooks',
            topics: [
                { title: 'Custom Hooks', content: '## Custom Hooks\n\nLearn to build your own reusable hooks to encapsulate logic.'},
                { title: 'useReducer', content: '## useReducer\n\nManage complex state logic with the `useReducer` hook.'},
                { title: 'useContext for State Management', content: '## useContext\n\nLeverage the Context API for state management without prop drilling.'},
            ]
        },
        {
            title: 'Module 2: Performance Optimization',
            topics: [
                { title: 'Memoization with useMemo and useCallback', content: '## Memoization\n\nPrevent unnecessary re-renders using `useMemo` and `useCallback`.'},
                { title: 'Code Splitting', content: '## Code Splitting\n\nLazy load components to improve initial load time.'},
                { title: 'Analyzing Performance with Profiler', content: '## React DevTools Profiler\n\nUse the Profiler to identify performance bottlenecks.'},
            ]
        }
    ]
  }
];

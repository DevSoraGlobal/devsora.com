
export interface Topic {
    title: string;
    content: string;
}

export interface Chapter {
    title: string;
    content: string; 
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
  toc: Chapter[];
}

const jsFundamentalsToc = `
# 📘 JavaScript Fundamentals – Table of Contents

## 1. Introduction to JavaScript
- What is JavaScript?
- History and Evolution
- JavaScript in Web Development
- How JavaScript Runs in Browsers
- Setting Up Environment (Browser Console, VS Code)

## 2. Basics of JavaScript
- Syntax and Code Structure
- Variables (\`var\`, \`let\`, \`const\`)
- Data Types (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
- Type Conversion and Coercion

## 3. Operators
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Ternary Operator
- Bitwise Operators

## 4. Control Structures
- \`if\`, \`else if\`, \`else\`
- \`switch\` Statement
- Loops:
  - \`for\`, \`while\`, \`do...while\`
  - \`for...in\`, \`for...of\`
- \`break\` and \`continue\`

## 5. Functions
- Function Declaration and Expression
- Parameters and Return Values
- Arrow Functions
- Callback Functions
- Scope and Closures
- IIFE (Immediately Invoked Function Expression)

## 6. Objects
- Object Literals
- Property Access (\`dot\` and \`bracket\`)
- Nested Objects
- Object Methods
- \`this\` Keyword
- Object Destructuring

## 7. Arrays
- Creating and Accessing Arrays
- Array Methods:
  - \`push\`, \`pop\`, \`shift\`, \`unshift\`
  - \`splice\`, \`slice\`
  - \`map\`, \`filter\`, \`reduce\`, \`forEach\`
- Searching: \`indexOf\`, \`find\`, \`includes\`
- Spread Operator

## 8. Strings
- String Methods: \`slice\`, \`substring\`, \`replace\`, \`includes\`, etc.
- Template Literals
- Escape Characters

## 9. DOM Manipulation
- What is DOM?
- Selecting Elements (\`getElementById\`, \`querySelector\`)
- Changing Content and Styles
- Event Listeners and Handlers
- Creating and Removing Elements
- Traversing the DOM

## 10. Events in JavaScript
- Types of Events (Click, Submit, etc.)
- Event Propagation (Bubbling and Capturing)
- \`addEventListener\` vs Inline Events
- \`event\` Object

## 11. Error Handling
- \`try\`, \`catch\`, \`finally\`
- \`throw\` Statement
- Debugging with \`console.log()\` and DevTools

## 12. ES6+ Features (Modern JavaScript)
- \`let\` and \`const\` (Revisited)
- Arrow Functions (Revisited)
- Template Literals
- Default Parameters
- Destructuring
- Spread and Rest Operators
- Promises and \`async/await\`
- Modules (\`import\` / \`export\`)

## 13. JSON and Data Handling
- What is JSON?
- Parsing and Stringifying JSON
- Fetching JSON Data

## 14. Asynchronous JavaScript
- Callbacks
- Promises
- \`async\` / \`await\`
- \`fetch()\` API
- Error Handling in Async Code

## 15. Local Storage and Session Storage
- \`localStorage\` vs \`sessionStorage\`
- Setting, Getting, and Removing Items
- Practical Examples

## 16. Best Practices and Coding Standards
- Naming Conventions
- Code Readability
- Avoiding Common Pitfalls
- Writing Modular Code

## 17. Mini Projects for Practice
- Calculator
- To-Do List
- Form Validation
- Weather App (using API)
- Image Slider
`;


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
        title: 'JavaScript Fundamentals TOC',
        content: jsFundamentalsToc,
      },
      {
        title: 'Introduction to JavaScript',
        content: `## What is JavaScript?\n\nJavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It's one of the core technologies of the World Wide Web, alongside HTML and CSS.`,
      },
      {
        title: 'Variables and Data Types',
        content: `## Variables and Data Types\n\nIn JavaScript, variables are used to store data values. You can declare variables using \`var\`, \`let\`, or \`const\`. JavaScript has various data types, including \`String\`, \`Number\`, \`Boolean\`, \`Null\`, \`Undefined\`, \`Symbol\`, and \`BigInt\`. Understanding these is crucial for writing effective code.`
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
            title: 'Advanced React Patterns TOC',
            content: `
# 📘 Advanced React Patterns – Table of Contents

## 1. Deep Dive into Hooks
- Building Custom Hooks
- \`useReducer\` for Complex State
- \`useContext\` for Global State
- \`useImperativeHandle\`
- \`useLayoutEffect\`

## 2. Advanced Component Patterns
- Higher-Order Components (HOCs)
- Render Props
- Compound Components
- Controlled vs. Uncontrolled Components
- Prop Collections and Getters

## 3. Performance Optimization
- Memoization with \`React.memo\`, \`useMemo\`, \`useCallback\`
- Code Splitting with \`React.lazy\` and \`Suspense\`
- Windowing large lists with \`react-window\`
- Analyzing Performance with the React DevTools Profiler
`
        },
        { 
            title: 'Custom Hooks', 
            content: '## Custom Hooks\n\nLearn to build your own reusable hooks to encapsulate logic. This allows you to share stateful logic between components without repeating code.'
        },
        { 
            title: 'Memoization', 
            content: '## Memoization\n\nPrevent unnecessary re-renders using `useMemo` and `useCallback`. This is key to optimizing the performance of complex applications.'
        },
    ]
  }
];


export interface Course {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    image: string;
    aiHint: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    badges: { name: string; description: string }[];
    toc: { title: string; description: string; time: string }[];
}
  
export const courses: Course[] = [
    {
      id: 1,
      title: 'Python for Data Science',
      description: 'Master Python for data analysis and visualization with hands-on projects.',
      detailedDescription: 'This course provides a comprehensive introduction to using Python for data science. You will learn key libraries like Pandas, NumPy, and Matplotlib to manipulate, analyze, and visualize complex datasets. By the end, you will have built several real-world projects to showcase your skills.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'python data science',
      difficulty: 'Beginner',
      duration: '3-5 months',
      badges: [
        { name: 'Pythonista', description: 'Proficiency in Python basics' },
        { name: 'Data Wrangler', description: 'Mastery of Pandas DataFrames' },
      ],
      toc: [
        { title: 'Module 1: Python Fundamentals', description: 'Variables, data types, and control flow.', time: '2 weeks' },
        { title: 'Module 2: NumPy & Pandas', description: 'Working with arrays and DataFrames.', time: '4 weeks' },
        { title: 'Module 3: Data Visualization', description: 'Creating plots with Matplotlib and Seaborn.', time: '3 weeks' },
        { title: 'Module 4: Final Project', description: 'An end-to-end data analysis project.', time: '4 weeks' },
      ],
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      description: 'Deep dive into advanced React concepts like Hooks, Context, and performance.',
      detailedDescription: 'Elevate your React skills by learning advanced patterns for building scalable and maintainable applications. This course covers state management with Context and Reducers, performance optimization with memoization, and creating custom Hooks to build a flexible and powerful component architecture.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'react code abstract',
      difficulty: 'Advanced',
      duration: '2-4 months',
      badges: [
        { name: 'React Architect', description: 'Skilled in component design' },
        { name: 'State Sorcerer', description: 'Advanced state management' },
      ],
      toc: [
        { title: 'Module 1: Custom Hooks', description: 'Building reusable logic with custom Hooks.', time: '2 weeks' },
        { title: 'Module 2: Advanced State Management', description: 'useReducer, useContext, and global state.', time: '3 weeks' },
        { title: 'Module 3: Performance Optimization', description: 'React.memo, useMemo, and useCallback.', time: '3 weeks' },
        { title: 'Module 4: Final Project', description: 'Build a high-performance React application.', time: '4 weeks' },
      ],
    },
    {
      id: 3,
      title: 'Web3 & Solidity',
      description: 'Build and deploy your own smart contracts on the Ethereum blockchain.',
      detailedDescription: 'Enter the world of decentralized applications (DApps) by learning Solidity, the primary language for Ethereum smart contracts. This course will guide you through blockchain fundamentals, writing secure and efficient smart contracts, and interacting with them from a web interface using Ethers.js.',
      image: 'https://placehold.co/600x400.png',
      aiHint: 'blockchain network',
      difficulty: 'Intermediate',
      duration: '4-6 months',
      badges: [
        { name: 'Solidity Sage', description: 'Proficiency in smart contracts' },
        { name: 'DApp Developer', description: 'Building decentralized apps' },
      ],
      toc: [
        { title: 'Module 1: Blockchain Basics', description: 'Understanding decentralized technology.', time: '2 weeks' },
        { title: 'Module 2: Solidity Fundamentals', description: 'Writing your first smart contracts.', time: '4 weeks' },
        { title: 'Module 3: Building a DApp', description: 'Connecting a frontend with Ethers.js.', time: '4 weeks' },
        { title: 'Module 4: Final Project', description: 'Launch a complete decentralized application.', time: '5 weeks' },
      ],
    },
    {
        id: 4,
        title: 'UI/UX Design Fundamentals',
        description: 'Learn the principles of user-centric design to create beautiful interfaces.',
        detailedDescription: 'This course covers the core principles of UI/UX design, from user research and wireframing to prototyping and visual design. You will learn to use industry-standard tools like Figma to create intuitive and aesthetically pleasing user experiences that solve real-world problems.',
        image: 'https://placehold.co/600x400.png',
        aiHint: 'ui design sketch',
        difficulty: 'Beginner',
        duration: '2-3 months',
        badges: [
          { name: 'Wireframe Wizard', description: 'Skilled in creating layouts' },
          { name: 'Figma Pro', description: 'Mastery of design tools' },
        ],
        toc: [
          { title: 'Module 1: Intro to UX', description: 'User research and personas.', time: '2 weeks' },
          { title: 'Module 2: Wireframing & Prototyping', description: 'Building interactive mockups in Figma.', time: '3 weeks' },
          { title: 'Module 3: Visual Design Principles', description: 'Color theory, typography, and layout.', time: '3 weeks' },
          { title: 'Module 4: Final Project', description: 'Design a complete mobile application.', time: '4 weeks' },
        ],
    },
];

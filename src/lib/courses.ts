
export interface CourseTopic {
    title: string;
    description?: string;
}

export interface CourseChapter {
    title: string;
    topics: CourseTopic[];
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    description: string;
    detailedDescription: string;
    image: string;
    aiHint: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    badges: { name: string; description: string }[];
    toc: CourseChapter[];
}
  
export const courses: Course[] = [
    {
      id: 1,
      slug: 'python-for-data-science',
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
        { 
            title: '1. Introduction to Python', 
            topics: [
                { title: '1.1 What is Python?' },
                { title: '1.2 Why Python for Data Science?' },
                { title: '1.3 Setting up the Environment (Anaconda, Jupyter, VS Code)' },
                { title: '1.4 Python Basics: Variables, Data Types, Input/Output' },
                { title: '1.5 Control Flow: if, for, while, and Logic' },
                { title: '1.6 Functions, Modules, and Packages' },
                { title: '1.7 File Handling' }
            ]
        },
        {
            title: '2. Python Data Structures',
            topics: [
                { title: '2.1 Lists, Tuples, and Sets' },
                { title: '2.2 Dictionaries' },
                { title: '2.3 List Comprehensions' },
                { title: '2.4 Iterators and Generators' }
            ]
        },
        {
            title: '3. Working with Libraries',
            topics: [
                { title: '3.1 NumPy: Arrays, Broadcasting, Vectorized Operations' },
                { title: '3.2 Pandas: Series, DataFrames, Indexing, Merging, Filtering' },
                { title: '3.3 Matplotlib: Basic Plots, Histograms, Subplots' },
                { title: '3.4 Seaborn: Statistical Plots, Customization' },
                { title: '3.5 Working with Dates and Times' }
            ]
        },
        {
            title: '4. Data Preprocessing',
            topics: [
                { title: '4.1 Handling Missing Data' },
                { title: '4.2 Data Cleaning Techniques' },
                { title: '4.3 Encoding Categorical Variables' },
                { title: '4.4 Feature Scaling: Standardization, Normalization' }
            ]
        },
        {
            title: '5. Exploratory Data Analysis (EDA)',
            topics: [
                { title: '5.1 Descriptive Statistics' },
                { title: '5.2 Data Visualization Techniques' },
                { title: '5.3 Correlation and Covariance' },
                { title: '5.4 GroupBy and Aggregation' }
            ]
        },
        {
            title: '6. Working with Real-World Datasets',
            topics: [
                { title: '6.1 Importing CSV, Excel, JSON, SQL' },
                { title: '6.2 Web Scraping with requests and BeautifulSoup' },
                { title: '6.3 APIs and JSON Parsing' }
            ]
        },
        {
            title: '7. Introduction to Statistics & Probability',
            topics: [
                { title: '7.1 Mean, Median, Mode, Variance, Std. Deviation' },
                { title: '7.2 Probability Basics' },
                { title: '7.3 Distributions: Normal, Binomial, Poisson' },
                { title: '7.4 Hypothesis Testing (Z-test, T-test)' }
            ]
        },
        {
            title: '8. Introduction to Machine Learning with Scikit-Learn',
            topics: [
                { title: '8.1 What is Machine Learning?' },
                { title: '8.2 Supervised vs Unsupervised Learning' },
                { title: '8.3 Regression: Linear, Logistic' },
                { title: '8.4 Classification: k-NN, Decision Trees' },
                { title: '8.5 Clustering: k-Means, Hierarchical' },
                { title: '8.6 Model Evaluation Metrics: Accuracy, Precision, Recall, F1' },
                { title: '8.7 Cross-Validation and Grid Search' }
            ]
        },
        {
            title: '9. Projects & Case Studies',
            topics: [
                { title: '9.1 Exploratory Data Analysis Project' },
                { title: '9.2 Predictive Modeling Project' },
                { title: '9.3 Real-World Dataset Challenge (Kaggle-style)' }
            ]
        },
        {
            title: '10. Advanced Topics (Optional)',
            topics: [
                { title: '10.1 Time Series Analysis' },
                { title: '10.2 Natural Language Processing with NLTK or spaCy' },
                { title: '10.3 Working with Big Data using PySpark' },
                { title: '10.4 Introduction to Deep Learning (TensorFlow/Keras)' }
            ]
        },
        {
            title: '11. Tips & Resources',
            topics: [
                { title: '11.1 Best Practices for Data Science with Python' },
                { title: '11.2 Books, Courses, and Communities' },
                { title: '11.3 GitHub Repos to Follow' },
                { title: '11.4 Career Paths in Data Science' }
            ]
        }
      ],
    },
    {
      id: 2,
      slug: 'advanced-react-patterns',
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
        { title: 'Module 1: Custom Hooks', topics: [{title: 'Building reusable logic with custom Hooks.'}] },
        { title: 'Module 2: Advanced State Management', topics: [{title: 'useReducer, useContext, and global state.'}] },
        { title: 'Module 3: Performance Optimization', topics: [{title: 'React.memo, useMemo, and useCallback.'}] },
        { title: 'Module 4: Final Project', topics: [{title: 'Build a high-performance React application.'}] },
      ],
    },
    {
      id: 3,
      slug: 'web3-and-solidity',
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
        { title: 'Module 1: Blockchain Basics', topics: [{title: 'Understanding decentralized technology.'}] },
        { title: 'Module 2: Solidity Fundamentals', topics: [{title: 'Writing your first smart contracts.'}] },
        { title: 'Module 3: Building a DApp', topics: [{title: 'Connecting a frontend with Ethers.js.'}] },
        { title: 'Module 4: Final Project', topics: [{title: 'Launch a complete decentralized application.'}] },
      ],
    },
    {
        id: 4,
        slug: 'ui-ux-design-fundamentals',
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
          { title: 'Module 1: Intro to UX', topics: [{title: 'User research and personas.'}] },
          { title: 'Module 2: Wireframing & Prototyping', topics: [{title: 'Building interactive mockups in Figma.'}] },
          { title: 'Module 3: Visual Design Principles', topics: [{title: 'Color theory, typography, and layout.'}] },
          { title: 'Module 4: Final Project', topics: [{title: 'Design a complete mobile application.'}] },
        ],
    },
];

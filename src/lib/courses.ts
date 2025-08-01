
export interface Topic {
    title: string;
    content: string; 
}

export interface Module {
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
  modules: Module[];
}

const parseTocToTopics = (tocContent: string): Topic[] => {
    if (!tocContent) return [];

    const topics: Topic[] = [];
    const sections = tocContent.split('\n## ').slice(1);

    sections.forEach(section => {
        const lines = section.split('\n');
        const title = lines[0].trim();
        const content = '## ' + section;
        topics.push({ title, content });
    });

    return topics;
};

const backendDevModule1 = `
## 1.1 What is Backend Development?

Backend development is the part of web development that happens behind the scenes. It is responsible for how the website or app works, not how it looks. Whenever you log in, submit a form, or retrieve data from an app, backend code is working in the background to handle that.

In simple words, backend development:
- Stores and retrieves data (e.g., your profile or messages)
- Makes sure the right users can access the right data
- Handles logic and rules (like calculating prices or checking login info)

## 1.2 Why it Matters?

Backend development is crucial because it powers the core functionality of any web app. Without it:
- Websites wouldn't be able to store or process data
- Login and user actions wouldn't work
- Apps wouldn't connect to databases or other services

Learning backend gives you the skills to build real-world, interactive, and data-driven applications—whether it's a social media platform, a blog, or an e-commerce site.

## 1.3 Client vs Server Architecture

The web is based on a **client-server model**.
- The **client** is usually your web browser or mobile app.
- The **server** is where the backend code runs.

**Example**: When you open Instagram, your phone (client) sends a request to Instagram's servers, and the server sends back your feed as a response.

**Flowchart**:
- Client (Browser) —> Request —> Server
- Server —> Response —> Client (Browser)

The backend lives on the server. It processes requests, interacts with the database, and sends responses back to the client.

## 1.4 Understanding HTTP Methods

When a client communicates with the server, it uses something called **HTTP methods**.

The four main HTTP methods:

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data from the server | Get all user posts |
| POST | Send new data to the server | Add a new comment |
| PUT | Update existing data | Edit your profile |
| DELETE | Delete data | Remove a post |

Think of it like talking to a library:
- **GET**: "Show me the books"
- **POST**: "I want to donate a new book"
- **PUT**: "I want to update the title of a book"
- **DELETE**: "Remove this old book"

## 1.5 Introduction to APIs and RESTful Services

### What is an API?

An **API** (Application Programming Interface) is like a messenger between two apps/softwares. It lets them talk to each other.

**Example**: A weather app on your phone uses a weather API to get real-time data from a server.

### What is REST?

**REST** (Representational State Transfer) is a set of rules for building APIs. RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform actions.

RESTful services are popular in backend because they're simple, scalable, and work well with web technologies.

## 1.6 Overview of Backend Stacks

A **tech stack** is the combination of technologies used to build the backend.

One popular stack is:
### Python + Flask
- **Python**: A beginner-friendly programming language
- **Flask**: A lightweight framework for building web applications

### Why Python + Flask?

With Python and Flask, developers can:
- Create routes (URLs)
- Handle user inputs
- Connect to databases
- Respond to client requests

Other popular backend stacks include:
- Node.js + Express
- Java + Spring Boot
- Ruby on Rails

We focus on Python and Flask, as it's ideal for beginners.

## Recall Questions

**Q1**: What is the role of a backend in a web app?

**Q2**: Name any two HTTP methods and what they do.

**Q3**: What does an API do?

**Q4**: What is a tech stack?
`;

const backendDevModule2 = `
## 2.1 Introduction

Python is one of the most popular and beginner-friendly programming languages. In backend development, Python is widely used for building web servers, handling data, managing APIs, and much more. This module is a quick refresher of Python with a backend focus — helping you write clean, reusable code that powers real-world web applications.

## 2.2 Why It's Essential

A strong grasp of Python fundamentals:
- Helps you write backend logic clearly and efficiently
- Makes it easy to use frameworks like Flask or Django
- Prepares you to build real-world features like logins, databases, APIs, etc.

Without a solid Python foundation, developing reliable and maintainable backend systems becomes increasingly difficult and error-prone.

## 2.3 Python Basics

Before diving deep, let's revise the building blocks of Python.

### Variables
Variables are used to store data.

\`\`\`python
name = "Alice"
age = 20
\`\`\`

### Loops
Loops help us repeat actions.

**For loop:**

\`\`\`python
for i in range(3):
  print(i)
\`\`\`

**While loop:**

\`\`\`python
count = 0
while count < 3:
  print(count)
  count += 1
\`\`\`

### Conditionals
Use conditionals to make decisions in code.

\`\`\`python
age = 20
if age >= 18:
  print("Adult")
else:
  print("Minor")
\`\`\`
### Functions
Functions allow us to reuse logic.

\`\`\`python
def greet(name):
  return f"Hello, {name}!"

print(greet("Alice"))
\`\`\`

## 2.4 Core Data Structures

Python provides four main data structures that are essential for backend logic.

| Structure | Description | Example |
|-----------|-------------|---------|
| List | Ordered, changeable collection | \`fruits = ["apple", "banana"]\` |
| Dictionary | Key-value pairs | \`user = {"name": "John", "age": 25}\` |
| Tuple | Ordered, unchangeable collection | \`point = (3, 4)\` |
| Set | Unordered, unique items | \`colors = {"red", "green"}\` |

**Why they matter**: These structures help store and manage data efficiently—important for handling user info, responses, and logic in backend systems.

## 2.5 Object-Oriented Programming (OOP)

OOP is a way of structuring code around objects—real-world entities like users, books, or orders.

### Classes and Objects
A class is a blueprint. An object is an instance of that class.

\`\`\`python
class User:
  def __init__(self, name, age):
    self.name = name
    self.age = age

u1 = User("Alice", 3)
print(u1.name)
\`\`\`

### Inheritance
Inheritance lets one class use the properties and methods of another.

\`\`\`python
class Animal:
  def speak(self):
    pass

class Dog(Animal):
  def speak(self):
    return "Woof!"

class Cat(Animal):
  def speak(self):
    return "Meow!"

# Creating instances
dog = Dog()
cat = Cat()

print(dog.speak()) # Output: Woof!
print(cat.speak()) # Output: Meow!
\`\`\`

**Why OOP matters**: It keeps backend code clean, organized, and scalable—making it easier to manage large systems.

## 2.6 Writing Reusable and Scalable Code

Backend development often involves:
- Handling multiple users
- Processing large datasets
- Maintaining performance

This is why your code must be modular (split into functions/classes) and reusable.

### Example: Reusable function

\`\`\`python
def calculate_discount(price, percent):
  return price * (1 - percent / 100)
\`\`\`

You can now use this function anywhere instead of rewriting the logic each time.

**Reusability = less code, fewer bugs, more control.**

### Example: Scalable function

\`\`\`python
def send_notification(user_list, message, method="email"):
  for user in user_list:
    if method == "email":
      send_email(user, message)
    elif method == "sms":
      send_sms(user, message)
    elif method == "push":
      send_push_notification(user, message)
    else:
      print(f"Unsupported method for {user}")
\`\`\`

You can now handle multiple notification channels and send messages to any number of users, without changing the core logic. Just plug in the user list and method.

**Scalability = handles more users, more channels, and grows with your app.**

## Practice Task

Write a Python class named \`Product\` that stores name and price. Add a method to display the product details. Then create 2 product objects and print their info.
`;

const backendDevModule3 = `
## 3.1 Introduction

Now that you know the basics of Python, it's time to build your first real backend application. In this module, you'll learn to use Flask, a popular web framework in Python, to create a web server and handle routes (URLs). You'll also learn how to send and receive JSON data, which is how web apps talk to servers.

By the end of this module, you'll be able to build your first working API.

## 3.2 Backend Begins Here

This module is where things get real. You're no longer just writing Python — you're creating a live backend server that can:
- Accept requests from users or apps
- Respond with useful data
- Show how servers and web apps communicate

Understanding how to handle routes, requests, and responses is the foundation of every backend application you'll ever build.

## 3.3 What is Flask?

Flask is a lightweight and flexible web framework in Python used to build websites and APIs.

### Why Flask?
- Simple and beginner-friendly
- Quick to set up and use
- Great for small to medium backend projects

You'll be using Flask to:
- Start a web server
- Handle incoming user requests
- Send back responses

## 3.4 Setting Up Flask

### Steps to Set Up:

**1. Install Flask using pip:**

\`\`\`python
pip install flask
\`\`\`

**2. Create a Python file (e.g., app.py) and write this code:**

\`\`\`python
from flask import Flask
app = Flask(__name__)
\`\`\`

**3. Run the Server - Add a basic route and start the server:**

\`\`\`python
@app.route('/')
def home():
  return "Welcome to your first Flask app!"

if __name__ == '__main__':
  app.run(debug=True)
\`\`\`

**4. Run the app:**

\`\`\`python
python app.py
\`\`\`

Open your browser and go to http://localhost:5000 — you'll see the message!

## 3.5 What is a Web Server?

A web server is a program that:
- Waits for requests from a browser or app
- Processes those requests
- Sends back a response (like text or JSON)

In this case, Flask acts as your mini web server.

## 3.6 Understanding Routing in Flask

A route is a URL that your server listens to. In Flask, you use the \`@app.route()\` decorator to define which function should run for a particular URL.

### Example:

\`\`\`python
@app.route('/about')
def about():
  return "This is the About Page"
\`\`\`

When someone visits http://localhost:5000/about, they'll see the message from the about function.

You can route to:
- \`/\` – homepage
- \`/about\` – about page
- \`/contact\` – contact page

Each route can display something different.

## 3.7 Returning JSON Responses

In real backend apps, instead of sending plain text, you'll often send JSON — a lightweight format for data exchange.

### Example:

\`\`\`python
from flask import jsonify

@app.route('/data/')
def data():
  return jsonify({"name": "Alice", "age": 25})
\`\`\`

When this route is accessed, it will return:

\`\`\`json
{
  "name": "Alice",
  "age": 25
}
\`\`\`

## 3.8 HTTP Status Codes

Every response from a server comes with a status code to tell the browser if the request was successful or not.

### Common Status Codes:

| Code | Meaning |
|------|---------|
| 200 | OK (Success) |
| 404 | Not Found |
| 500 | Internal Server Error |

### Example with status code:

\`\`\`python
@app.route('/error')
def error():
  return jsonify({"error": "Something went wrong"}), 500
\`\`\`

## Task: Build Your First API

Create a Flask app with these routes:
- \`/\` → shows "Welcome"
- \`/hello/<name>\` → returns "Hello, <name>!"
- \`/api/data\` → returns JSON \`{ "data": [1, 2, 3] }\`

Test it by running the app and visiting the URLs in your browser.
`;

export const courses: Course[] = [
  {
    id: '3',
    slug: 'backend-development',
    title: 'Backend Development',
    description: 'Learn to build powerful server-side applications with Python and Flask.',
    detailedDescription: 'This course introduces the fundamentals of backend development. You will learn about servers, APIs, and how to build a real web application using Python and the Flask framework. By the end, you will have the skills to create your own APIs and manage server-side logic.',
    difficulty: 'Beginner',
    duration: '15 Hours',
    badges: [
      { name: 'Server Starter', description: 'Built a Flask server' },
      { name: 'API Architect', description: 'Designed a RESTful API' }
    ],
    modules: [
        {
            title: 'Module 1: Introduction to Backend Development',
            topics: parseTocToTopics(backendDevModule1)
        },
        {
            title: 'Module 2: Python Refresher (Backend-Oriented)',
            topics: parseTocToTopics(backendDevModule2)
        },
        {
            title: 'Module 3: Web Servers & Routing with Flask',
            topics: parseTocToTopics(backendDevModule3)
        }
    ]
  }
];

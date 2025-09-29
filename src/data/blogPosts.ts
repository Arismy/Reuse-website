export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "full-stack-journey",
    title: "My Journey as a Full Stack Developer",
    excerpt: "Reflecting on 5 years of web development, from frontend basics to complex backend architectures.",
    content: `
# My Journey as a Full Stack Developer

After 5 years in the industry, I've learned that being a full stack developer is more than just knowing multiple technologies—it's about understanding how all pieces fit together.

## The Beginning
When I started my career, I was fascinated by how a simple HTML page could transform into interactive experiences. My first project was a basic todo app, but it opened my eyes to the endless possibilities.

## Key Learnings
- **Frontend Evolution**: From jQuery to React, I've witnessed the rapid evolution of frontend frameworks
- **Backend Mastery**: Understanding server architecture, databases, and APIs has been crucial
- **DevOps Integration**: Learning deployment, CI/CD, and cloud services rounds out the full stack experience

## Current Focus
Today, I focus on creating scalable applications that provide excellent user experiences while maintaining clean, maintainable code.

The journey continues, and I'm excited about what's next!
    `,
    author: "Portfolio Owner",
    date: "2024-01-15",
    category: "Career",
    readTime: "5 min read",
    image: "/api/placeholder/800/400",
    tags: ["career", "development", "full-stack"]
  },
  {
    id: "react-best-practices",
    title: "React Best Practices for 2024",
    excerpt: "Essential patterns and practices every React developer should know in 2024.",
    content: `
# React Best Practices for 2024

React continues to evolve, and staying up-to-date with best practices is crucial for building maintainable applications.

## Component Architecture
- Use functional components with hooks
- Keep components small and focused
- Implement proper prop typing with TypeScript

## Performance Optimization
- Utilize React.memo for expensive components
- Implement useMemo and useCallback strategically
- Consider code splitting with React.lazy

## State Management
- Start with built-in useState and useReducer
- Consider Zustand for medium complexity
- Reserve Redux for complex state scenarios

## Testing Strategy
- Write tests that focus on user behavior
- Use React Testing Library over Enzyme
- Implement integration tests for critical paths

These practices have served me well across multiple projects and team environments.
    `,
    author: "Portfolio Owner",
    date: "2024-01-10",
    category: "Technology",
    readTime: "7 min read",
    image: "/api/placeholder/800/400",
    tags: ["react", "javascript", "best-practices"]
  },
  {
    id: "design-systems",
    title: "Building Scalable Design Systems",
    excerpt: "How to create and maintain design systems that grow with your product.",
    content: `
# Building Scalable Design Systems

A well-crafted design system is the foundation of consistent, scalable user interfaces. Here's what I've learned building design systems for various projects.

## Core Principles
- **Consistency**: Every component should follow the same patterns
- **Accessibility**: Build inclusivity from the ground up
- **Scalability**: Design for growth and change

## Component Architecture
Start with atomic design principles:
- Atoms: Basic building blocks (buttons, inputs)
- Molecules: Simple combinations (search bars)
- Organisms: Complex components (headers, cards)

## Documentation
- Living style guides
- Code examples
- Usage guidelines
- Do's and don'ts

## Tools I Recommend
- Figma for design
- Storybook for component documentation
- Tailwind CSS for utility-first styling

A good design system saves countless hours and ensures your product feels cohesive across all touchpoints.
    `,
    author: "Portfolio Owner",
    date: "2024-01-05",
    category: "Design",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    tags: ["design", "ui-ux", "systems"]
  },
  {
    id: "career-growth-tips",
    title: "5 Tips for Accelerated Career Growth",
    excerpt: "Practical advice for developers looking to advance their careers quickly.",
    content: `
# 5 Tips for Accelerated Career Growth

Career growth in tech doesn't happen by accident. Here are five strategies that have helped me and many others advance quickly.

## 1. Build in Public
Share your projects, write about your learnings, and contribute to open source. Visibility leads to opportunities.

## 2. Learn Adjacent Skills
Don't just focus on coding. Understanding design, product management, or DevOps makes you more valuable.

## 3. Seek Feedback Actively
Don't wait for annual reviews. Ask for feedback regularly and act on it promptly.

## 4. Network Authentically
Build genuine relationships in the industry. Attend meetups, conferences, and engage on professional platforms.

## 5. Take Ownership
Go beyond your job description. Identify problems and propose solutions. Leadership notices initiative.

## Final Thoughts
Growth requires intentional effort and stepping outside your comfort zone. The discomfort is temporary, but the growth is permanent.
    `,
    author: "Portfolio Owner",
    date: "2023-12-28",
    category: "Career",
    readTime: "4 min read",
    image: "/api/placeholder/800/400",
    tags: ["career", "growth", "tips"]
  }
];

export const categories = ["All", "Career", "Technology", "Design"];
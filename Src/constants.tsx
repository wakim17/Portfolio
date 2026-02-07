import React from 'react';
import { Project, Skill } from './types';
import { Code, Database, Layout, Server, Smartphone, Globe, Cpu, Terminal } from 'lucide-react';

export const PORTFOLIO_OWNER = "Wakim 17";
export const PORTFOLIO_ROLE = "Senior Full Stack Engineer";

// TODO: Replace this URL with your actual portrait image
export const PORTRAIT_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";

export const ABOUT_SUMMARY = `
  I'm a passionate developer who finds joy in solving complex problems through clean, maintainable code. 
  With over 7 years in the industry, I've had the privilege of working with startups and enterprise corporations alike.
  My approach combines technical precision with a strong focus on user experience.
`;

export const ABOUT_FULL = `
  <p class="mb-4">
    My journey into software development began with a simple curiosity about how things work on the web. 
    That curiosity quickly turned into a passion for building digital products that make a difference.
    Over the last 7+ years, I have honed my skills across the entire stack, from crafting pixel-perfect 
    front-end interfaces to architecting robust back-end systems.
  </p>
  <p class="mb-4">
    I believe that the best code is invisible to the user—it just works, instantly and intuitively. 
    I specialize in React, TypeScript, and Node.js, but I am always exploring new technologies 
    to stay ahead of the curve. Recently, I've been diving deep into Generative AI and how it can 
    transform user interactions.
  </p>
  <p>
    When I'm not coding, you can find me exploring new AI models, contributing to open source, 
    or hiking the nearest mountain trail. I am always open to new challenges and opportunities 
    to collaborate with like-minded individuals.
  </p>
`;

export const RESUME_CONTEXT = `
  You are an AI assistant for Wakim 17's portfolio website. 
  Wakim 17 is a developer passionate about building digital experiences.
  
  Skills:
  - Frontend: React, TypeScript, Tailwind CSS
  - Backend: Node.js, Databases, Cloud Infrastructure
  - AI: Gemini API, Generative Models
  
  Experience:
  - Proven track record of delivering high-quality web applications.
  
  Key Projects:
  - Reference the projects listed on the portfolio page.

  Tone: Professional, friendly, concise, and helpful. 
  If asked about contact info, direct them to the contact form section.
`;

// TODO: Replace these projects with the specific ones from wakim17.nl
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A placeholder for your primary project. Update this description with details from your existing portfolio.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'A placeholder for another significant project. Highlights include real-time data processing and UI/UX design.',
    technologies: ['Next.js', 'Firebase', 'Tailwind'],
    imageUrl: 'https://picsum.photos/800/600?random=11',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'An innovative solution focusing on performance and scalability.',
    technologies: ['Go', 'Docker', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/800/600?random=12',
    link: '#',
  },
  {
    id: '4',
    title: 'Project Delta',
    description: 'Mobile-first application designed for optimal user engagement.',
    technologies: ['React Native', 'GraphQL'],
    imageUrl: 'https://picsum.photos/800/600?random=13',
    link: '#',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React & Ecosystem', icon: <Code size={20} />, category: 'frontend' },
  { name: 'TypeScript', icon: <Terminal size={20} />, category: 'frontend' },
  { name: 'UI/UX Design', icon: <Layout size={20} />, category: 'frontend' },
  { name: 'Node.js', icon: <Server size={20} />, category: 'backend' },
  { name: 'Databases', icon: <Database size={20} />, category: 'backend' },
  { name: 'Cloud Infra', icon: <Globe size={20} />, category: 'tools' },
  { name: 'Mobile Dev', icon: <Smartphone size={20} />, category: 'frontend' },
  { name: 'AI Integration', icon: <Cpu size={20} />, category: 'backend' },
];
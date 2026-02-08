import React from 'react';
import { Project, Skill } from './types';
import { Code, Database, Layout, Server, Smartphone, Globe, Cpu, Terminal, Gamepad2 } from 'lucide-react';

export const PORTFOLIO_OWNER = "Jhony Wakim";
export const PORTFOLIO_ROLE = "Developer & Game Designer";

// TODO: Ensure this matches the file you uploaded to your public folder
export const PORTRAIT_IMAGE = "/me.jpg";

// --- HERO CONTENT ---
export const HERO_TAGLINE = "I build engaging digital experiences and lead teams to turn innovative ideas into shipped products.";

// --- SOCIAL LINKS ---
export const SOCIAL_LINKS = {
  github: "https://github.com/wakim17",
  linkedin: "https://www.linkedin.com/in/jhony-wakim-aa6a73246", 
  email: "mailto:johnywakim17@gmail.com"
};

// --- ABOUT CONTENT ---
export const ABOUT_SUMMARY = `
  My passion lies at the intersection of logic and creativity. 
  Whether I'm architecting a complex web application or designing an immersive game mechanic, 
  my goal is always the same: to craft experiences that are performant, accessible, and genuinely fun to use.
`;

export const ABOUT_FULL = `
  <p class="mb-4">
    <strong>My journey</strong> into technology didn't start with code—it started with curiosity. 
    I wanted to know how the games I played were built and how the websites I visited actually worked. 
    That curiosity quickly turned into a career.
  </p>
  <p class="mb-4">
    Over the years, I’ve evolved from a pure coder into a <strong>product-minded engineer</strong>. 
    I specialize in taking projects from the "napkin sketch" phase all the way to launch. 
    I believe that the best software doesn't just function well; it respects the user's time and intelligence.
  </p>
  <p>
    <strong>When I'm not at my keyboard</strong>, you won't find me near a screen. 
    I love hiking mountain trails, exploring new cities, and dissecting game mechanics to understand what makes them "click."
  </p>
`;

export const RESUME_CONTEXT = `
  You are an AI assistant for Jhony Wakim's portfolio. 
  Jhony is a Developer & Game Designer.
  
  Core Value: Brings projects from concept to launch.
  
  Skills:
  - Game Design (Unity, C#)
  - Full Stack Web (React, Node.js, TypeScript)
  - Leadership & Product Strategy
  
  Tone: Professional, friendly, and enthusiastic about game design.
`;

export const PROJECTS: Project[] = [
  {
    id: 'nfc-servo',
    title: 'NFC Servo Control',
    description: 'An interactive hardware project using servo motors and NFC scanning logic.',
    technologies: ['C++', 'Arduino', 'Hardware'],
    imageUrl: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=800', 
    link: '#',
    github: '#'
  },
  {
    id: 'game-proto',
    title: 'Game Design Prototype',
    description: 'A concept for a new gameplay mechanic focused on player agency.',
    technologies: ['Unity', 'C#', 'Game Design'],
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800', 
    link: '#',
    github: '#'
  },
  {
    id: 'project-3',
    title: 'Project 3 Title',
    description: 'Description coming soon...',
    technologies: ['Tech 1', 'Tech 2'],
    imageUrl: 'https://picsum.photos/800/600?random=10', 
    link: '#',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Game Design', icon: <Gamepad2 size={20} />, category: 'frontend' },
  { name: 'React & Ecosystem', icon: <Code size={20} />, category: 'frontend' },
  { name: 'TypeScript', icon: <Terminal size={20} />, category: 'frontend' },
  { name: 'Node.js', icon: <Server size={20} />, category: 'backend' },
  { name: 'Databases', icon: <Database size={20} />, category: 'backend' },
  { name: 'UI/UX Design', icon: <Layout size={20} />, category: 'frontend' },
  { name: 'Mobile Dev', icon: <Smartphone size={20} />, category: 'frontend' },
  { name: 'AI Integration', icon: <Cpu size={20} />, category: 'backend' },
];
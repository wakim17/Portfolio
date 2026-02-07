import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact',
}
import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
import { JSX, ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string; 
  
  // Detailed Content
  longDescription?: string; 
  challenges?: string[]; 
  solutions?: string[]; 
  
  technologies: string[];
  imageUrl: string;
  
  // Links
  link?: string;
  linkLabel?: string;
  github?: string;
  secondaryLink?: string;       
  secondaryLinkLabel?: string; 
}

export type SkillCategory = 'game-dev' | 'xr-hardware' | 'web-ai' | 'leadership';

// KEEP ONLY THIS SKILL INTERFACE
export interface Skill {
  name: string;
  icon: JSX.Element | ReactNode; 
  category: SkillCategory;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
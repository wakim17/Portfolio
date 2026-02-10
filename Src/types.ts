import { ReactNode } from 'react';

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
  linkLabel?: string; // NEW: Custom text for the button (e.g., "View PDF")
  github?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}
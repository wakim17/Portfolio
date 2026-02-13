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
  secondaryLink?: string;      // NEW: For your second button url
  secondaryLinkLabel?: string; // NEW: For your second button text
}

export interface Skill {
  name: string;
  icon: ReactNode;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
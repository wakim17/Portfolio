import React from 'react';
import { Project, Skill } from './types';
import { 
  Code, Database, Layout, Server, Smartphone, Globe, Cpu, Terminal, 
  Gamepad2, Palette, Layers, Box, PenTool, Mic, Glasses, FlaskConical, Zap,
  Users, Wifi, Printer, BookOpen 
} from 'lucide-react';

export const PORTFOLIO_OWNER = "Jhony Wakim";
export const PORTFOLIO_ROLE = "Developer & Game Designer";

export const PORTRAIT_IMAGE = "/me.jpg";

// UPDATE 1: The Hero Tagline (The "Future" Hook)
export const HERO_TAGLINE = "I build immersive digital experiences and prototype future innovations, turning complex ideas into shipped reality.";

export const SOCIAL_LINKS = {
  github: "https://github.com/wakim17",
  linkedin: "https://www.linkedin.com/", 
  email: "mailto:johnywakim17@gmail.com"
};

// UPDATE 2: About Summary (The "Why")
export const ABOUT_SUMMARY = `
  I am a developer who runs on curiosity. I don't just write code; I deconstruct problems to find tomorrow's solutions. 
  Whether it's optimizing XR environments or bridging hardware with software, I thrive on innovating for the future of interaction.
`;

export const ABOUT_FULL = `
  <p class="mb-4">
    <strong>My journey</strong> into technology didn't start with code—it started with a question: <em>"How does this work?"</em> 
    That curiosity quickly turned into a career of building digital products that make a difference.
  </p>
  <p class="mb-4">
    I am a <strong>disciplined and fast-learning professional</strong> with a versatile skill set in leadership and project development. 
    I have a talent for orchestrating meaningful experiences, whether that's leading a student organization or designing a complex game system.
  </p>
  <p>
    <strong>My philosophy</strong> is simple: Technology is a tool, but adaptability is the superpower. 
    I specialize in taking undefined concepts and turning them into functional, polished reality.
  </p>
`;

export const RESUME_CONTEXT = `
  You are an AI assistant for Jhony Wakim's portfolio. 
  Jhony is a Developer & Game Designer based in Groningen, Netherlands.
  Core Value: Rapid learner who brings projects from concept to launch.
  Skills: Game Design, XR/VR, Full Stack Web, Leadership.
`;

export const PROJECTS: Project[] = [
  // --- INTERNSHIP 1: Current Graduation Project ---
  {
    id: 'internship-noorderpoort',
    title: 'Virtual Reality Educator Showcase',
    description: 'My graduation project bridging the gap between complex Extended Reality technology and the classroom.',
    
    longDescription: `
      <p><strong>The Mission:</strong> Educational institutions are eager to adopt Virtual Reality, but educators often find the technology intimidating or struggle to see the practical application. My graduation project solves this by building a dedicated "Educator Showcase."</p>
      <p>I am designing a user-friendly Virtual Reality environment specifically tailored for non-technical staff. It allows teachers to experience curated, high-impact learning scenarios without the steep learning curve.</p>
      <p>By conducting user research with actual faculty members, I am refining the User Experience to ensure that the "first time user experience" converts skepticism into enthusiasm.</p>
    `,
    challenges: [
      "Educators often have zero prior experience with Virtual Reality controllers.",
      "Motion sickness is a major barrier for first-time users.",
      "Demonstrating value quickly before the user loses interest."
    ],
    solutions: [
      "Implemented a 'Gaze-based' interaction system to simplify controls.",
      "Designed a comfort-first locomotion system to minimize nausea.",
      "Curated a 'Magic Moment' library that delivers instant visual impact."
    ],

    technologies: ['Virtual Reality', 'Unity', 'User Research', 'Rapid Prototyping'],
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800', 
    link: '#', 
    linkLabel: "Coming Soon", // Custom Text
    github: '#' 
  },
  
  // --- INTERNSHIP 2: Previous Internship (2025) ---
  {
    id: 'internship-edtech-2025',
    title: 'Educational Technology & Research',
    description: 'Modernized the curriculum through interactive digital tools and strategic Artificial Intelligence research.',
    
    longDescription: `
      <p><strong>The Role:</strong> As an Educational Technology Developer, I was tasked with modernizing traditional learning materials. My focus was on creating "active learning" experiences that engage students more effectively than passive reading.</p>
      <p><strong>Interactive Content:</strong> I utilized <strong>H5P technology</strong> to build interactive video modules and quizzes that adapt to the student's pace. I also produced and integrated 360-degree video tours to provide immersive field trip experiences.</p>
      <p><strong>Research:</strong> A significant portion of my role involved researching the impact of <strong>Generative Artificial Intelligence</strong> (like ChatGPT) in education. I analyzed the ethical implications and helped formulate early guidelines for how the institution could safely adopt these tools.</p>
    `,
    challenges: [
      "Integrating new digital tools into legacy Learning Management Systems.",
      "Ensuring content was accessible to students with varying technical skills.",
      "Navigating the ethical gray areas of Artificial Intelligence in academic settings."
    ],
    solutions: [
      "Created comprehensive user manuals for staff to maintain the new tools.",
      "Conducted A/B testing with student groups to refine the interactivity.",
      "Delivered a research report on Artificial Intelligence that informed department policy."
    ],

    technologies: ['H5P Interactive Content', '360-Degree Video', 'Artificial Intelligence Research', 'Instructional Design'],
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', 
    
    // CUSTOM LINK SETUP
    link: '/internship-portfolio.pdf', // Make sure to put your PDF in the public folder and rename it to this!
    linkLabel: "View Portfolio PDF",
    
  },
  // --- PROJECT 1: The "Ambition" Project (Drone + VR) ---
  {
    id: 'vr-drone-bridge',
    title: 'Meta Quest 2 x DJI Bridge',
    description: 'Bridged a closed ecosystem (DJI Drone) with a VR Headset (Meta Quest 2) in just two weeks. Created a custom interface for immersive FPV flight control.',
    technologies: ['Unity', 'VR/XR', 'Hardware Hacking', 'C#'],
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800', 
    link: '#',
    github: '#'
  },

  // --- PROJECT 2: Hardware ---
  {
    id: 'nfc-servo',
    title: 'NFC Servo Security',
    description: 'An interactive hardware locking mechanism. Scans a specific NFC card to rotate a servo 45 degrees (unlock), and scans again to close it.',
    technologies: ['C++', 'Arduino', 'Embedded Systems'],
    imageUrl: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=800', 
    link: '#',
    github: '#'
  },

  // --- PROJECT 3: Game Dev ---
  {
    id: 'game-proto',
    title: 'Project: Agency (Prototype)',
    description: 'A gameplay mechanic prototype focused on emergent storytelling. Players influence the world state through indirect actions rather than direct combat.',
    technologies: ['Unity', 'C#', 'Game Design', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800', 
    link: '#',
    github: '#'
  },

  // --- PROJECT 4: Full Stack ---
  {
    id: 'task-master',
    title: 'Collaborative Task Board',
    description: 'A real-time project management tool with drag-and-drop functionality. Features live updates using WebSockets for team synchronization.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 5: Mobile ---
  {
    id: 'mobile-habit',
    title: 'Gamified Habit Tracker',
    description: 'A cross-platform mobile app that turns daily habits into RPG stats. Users "level up" their real life by completing daily goals.',
    technologies: ['React Native', 'TypeScript', 'Mobile UI'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 6: Multiplayer ---
  {
    id: 'multiplayer-fps',
    title: 'Arena Shooter Netcode',
    description: 'Implemented client-side prediction and server reconciliation for a fast-paced multiplayer shooter. Minimized latency perception for players.',
    technologies: ['Unreal Engine 5', 'C++', 'Networking'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 7: AI/Python ---
  {
    id: 'ai-pathfinding',
    title: 'Visual Pathfinding Algo',
    description: 'An interactive visualizer for A* and Dijkstra algorithms. Users can draw walls and watch the AI find the optimal path in real-time.',
    technologies: ['Python', 'Algorithms', 'Interactive UI'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 8: Creative/Design ---
  {
    id: 'ui-kit',
    title: 'Glassmorphism UI Kit',
    description: 'A comprehensive design system focusing on accessibility and modern aesthetics. Published as a community file for other designers.',
    technologies: ['Figma', 'UI/UX', 'Design Systems'],
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 9: Hardware/IoT ---
  {
    id: 'smart-plant',
    title: 'IoT Plant Monitor',
    description: 'A 3D-printed enclosure with sensors that tweet you when your plant needs water. Integrates custom hardware with a web API.',
    technologies: ['Raspberry Pi', 'Python', '3D Printing'],
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  },

  // --- PROJECT 10: The "Fun" One ---
  {
    id: 'retro-shader',
    title: 'Retro Shader Pack',
    description: 'A collection of custom HLSL shaders to emulate PS1 and CRT aesthetics in modern game engines. Optimized for mobile performance.',
    technologies: ['HLSL/GLSL', 'Graphics Programming', 'Unity'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', 
    link: '#',
  }
];

export const SKILLS: Skill[] = [
  // --- The Core (Game & Tech) ---
  { name: 'Game Design & Physics', icon: <Gamepad2 size={20} />, category: 'frontend' },
  { name: 'Unity & Unreal', icon: <Box size={20} />, category: 'frontend' },
  { name: 'C# & C++', icon: <Code size={20} />, category: 'backend' },
  { name: 'Multiplayer / Networking', icon: <Wifi size={20} />, category: 'backend' },

  // --- The Innovation (VR & Hardware) ---
  { name: 'XR (VR/AR) & Optimization', icon: <Glasses size={20} />, category: 'frontend' },
  { name: 'Arduino & Robotics', icon: <Cpu size={20} />, category: 'backend' },
  { name: 'Rapid Prototyping (3D/Laser)', icon: <Printer size={20} />, category: 'backend' },

  // --- The Leader (Soft Skills) ---
  { name: 'Scrum Master / Agile', icon: <Users size={20} />, category: 'design' }, 
  { name: 'Tech Documentation', icon: <BookOpen size={20} />, category: 'design' },

  // --- The Web Stack ---
  { name: 'React Ecosystem', icon: <Globe size={20} />, category: 'frontend' },
  { name: 'Python & AI', icon: <Terminal size={20} />, category: 'backend' },
  { name: 'UI/UX (Figma)', icon: <Palette size={20} />, category: 'frontend' },
];
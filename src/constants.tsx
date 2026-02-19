import React, { JSX } from 'react';
import { Project, Skill} from './types';
import { 
  Code, Database, Layout, Server, Smartphone, Globe, Cpu, Terminal, 
  Gamepad2, Palette, Layers, Box, PenTool, Mic, Glasses, FlaskConical, Zap,
  Users, Wifi, Printer, BookOpen, Sparkles, Wrench, Lightbulb, GitBranch
} from 'lucide-react';

import internshipPdf from './assets/internship-portfolio.pdf';
import armourImage from './assets/armour-game.jpg';
import RobotImage from './assets/Robot.jpg';
import trustTriangleGame from './assets/trust-triangle-print-and-play.zip'; 
import Icono from './assets/Icono.zip'; 
import twineGame from './assets/Chapter 1(Final).html?url';
import narrativePosters from './assets/Narrative posters.pdf';
import Kim from './assets/Kim.png';
import Duo from './assets/duo1.jpeg';
import PP from './assets/PP.png';
import NP from './assets/Noorderpoort.jpg';
import NPL from './assets/NPlogo.png';

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
    title: 'Virtual Reality Educator Showcase - Internship & Graduation Project',
    description: 'My graduation project bridging the gap between complex Extended Reality technology and the classroom.',
    
    longDescription: `
      <p><strong>The Mission:</strong> Educational institutions are eager to adopt Virtual Reality, but educators often find the technology intimidating or struggle to see the practical application. My graduation project solves this by building a dedicated "Educator Showcase."</p>
      <p>I am designing a user-friendly Virtual Reality environment specifically tailored for non-technical staff. It allows teachers to experience curated, high-impact learning scenarios without the steep learning curve.</p>
      <p>By conducting user research with actual faculty members, I am refining the User Experience to ensure that the "first time user experience" converts skepticism into enthusiasm.</p>
    `,
    challenges: [
      "Coming Soon."
    ],
    solutions: [
      "Coming Soon."
    ],

    technologies: ['Virtual Reality', 'Unity', 'User Research', 'Rapid Prototyping'],
    imageUrl: NP, 
    link: '#', 
    linkLabel: "Coming Soon", 
    github: '#' 
  },
  
  // --- INTERNSHIP 2 ---
{
    id: 'internship-edtech-2025',
    title: 'Educational Technology & Research - Internship',
    description: 'Modernized the curriculum through strategic AI research, immersive 360° video pilots, and experimental hardware bridges (Drone-to-VR).',
    
    longDescription: `
      <p><strong>The Role:</strong> My core responsibility was to modernize the educational curriculum by introducing "Future Tech" into the classroom. This involved a mix of strategic research and hands-on hardware prototyping.</p>
      <p><strong>Hardware Innovation (Drone & MR):</strong> I engineered a custom bridge between a <strong>DJI Drone</strong> and a <strong>Meta Quest 3</strong> to create an immersive FPV flight experience for students. Additionally, I developed <strong>Mixed Reality</strong> application that allowed students to interact with planets in space.</p>
      <p><strong>Ed-Tech & AI Research:</strong> Beyond hardware, I implemented <strong>360-degree video</strong> tours to create virtual field trips. I also conducted critical research into <strong>Generative AI</strong> (ChatGPT), analyzing its ethical implications to help the institution formulate safe usage guidelines.</p>
    `,
    challenges: [
      "Navigating the ethical gray areas of Artificial Intelligence in academic settings.",
      "Bridging closed hardware ecosystems (DJI to Meta Quest) for the drone pilot.",
      "Ensuring complex 360°/MR content was accessible to non-technical staff."
    ],
    solutions: [
      "Delivered a research report on AI that informed department policy.",
      "Engineered a custom software bridge to handle low-latency video handoff.",
      "Created comprehensive 'Teacher Guides' to lower the barrier to entry for new tech."
    ],

    technologies: ['AI Research', 'Mixed Reality', 'DJI SDK', '360° Video', 'Unity'],
    imageUrl: NPL, 
    link: internshipPdf, 
    linkLabel: "View Portfolio PDF",
    
  },
// --- PROJECT: Robotics Elective (DiciPet) ---
  {
    id: 'dicipet-social-robot',
    title: 'DiciPet: Productivity Desk Robot',
    description: 'Designed and prototyped a physical desk companion that utilizes gamification and physical movement to promote user discipline and focus.',
    
    longDescription: `
      <p><strong>The Concept:</strong> I synthesized an original entrepreneurial concept—a productivity desk car/pet called "DiciPet"—into a functional hardware prototype for a Robotics Elective. The core objective was to construct a "social robot" that actively helps users break bad habits and stay focused on their tasks.</p>
      <p><strong>Interaction & Gamification:</strong> I designed the robot's behavior to mimic a Tamagotchi-style companion, where the user's real-world productivity directly correlates to the robot's health and happiness. I engineered the state machine so that if a user loses focus, the robot might physically drive away, forcing them to physically move to snooze an alarm or reset their focus timer.</p>
      <p><strong>Hardware & Schematics:</strong> To support these dynamic, physical interactions, I evaluated the hardware requirements and utilized <strong>KiCad</strong> to design custom electrical schematics. This ensured the robot could reliably process Artificial Intelligence logic, communicate with the team's broader state machine, and execute physical locomotion.</p>
    `,
    challenges: [
      "Translating a theoretical startup concept into a functional, physical robotic prototype.",
      "Designing a state machine that accurately tracks productivity metrics and translates them into engaging physical behaviors.",
      "Routing reliable electrical circuits in KiCad to safely support both the processing hardware and the physical motors."
    ],
    solutions: [
      "Formulated a gamified interaction model where user focus directly 'feeds' the robot's digital state.",
      "Iteratively evaluated and refined the Artificial Intelligence responses based on physical testing to disrupt user procrastination effectively.",
      "Utilized KiCad to design, map, and validate clear electrical diagrams before physical assembly."
    ],

    technologies: ['Robotics', 'KiCad', 'AI Integration', 'State Machines', 'Gamification'],
    imageUrl: RobotImage, 
    link: '#',
    linkLabel: "Video Coming Soon", 
  },
  // --- PROJECT : The Trust Triangle (Client Project) ---
{
    id: 'trust-triangle-card-game',
    title: 'The Trust Triangle',
    description: 'A client-commissioned serious card game that gamifies Self-Sovereign Identity (SSI) and digital data management. Developed in collaboration with the Dutch education agency (DUO).',
    
    longDescription: `
      <p><strong>The Client Challenge:</strong> We partnered with DUO (the executive education agency of the Netherlands) and DIT-Lab to create a gamified experience for Duo workers and citizens of the netherlands to visualise the concepts of Self-Sovereign Identity (SSI). Through mixed-methods research, we discovered our target audience valued data control but feared security risks and distrusted commercial data models.</p>
      <p><strong>The Mechanics:</strong> To translate these abstract digital concepts into a tangible experience, I co-designed "The Trust Triangle," a competitive card game simulating Dutch digital administration. Players collect "Credential Cards" (like an ID or Diploma) to build a secure digital wallet, which they use to complete "Task Cards" (like applying for a student loan). To simulate real-world digital threats, players can use "Action Cards" like 'Data Breach' or 'Phishing Attack' against opponents.</p>
      <p><strong>The Impact:</strong> I designed two complementary versions of the game: a deep, strategic "Full Edition" for workshops, and a fast-paced 10-minute "Gift Edition" designed as a corporate relationship gift. The project successfully visualized the advantages and risks of SSI, earning a public endorsement from the client on LinkedIn. You may download the full game files as it is a print and play!</p>
    `,
    challenges: [
      "Translating complex, abstract Self-Sovereign Identity (SSI) systems into intuitive, physical card mechanics.",
      "Balancing the educational goal of teaching data privacy with engaging, competitive gameplay.",
      "Designing two distinct editions (Full and Gift) to accommodate both deep workshop sessions and quick 10-minute demonstrations."
    ],
    solutions: [
      "Operationalized the abstract concept of 'data control' by making efficient hand management and credential collection the primary path to victory.",
      "Materialized user anxieties about data hacking into interactive 'Action Cards' that allow players to disrupt opponents, simulating real-world security risks.",
      "Developed a clean, 'Futuristic Minimalism' UI inspired by Dutch government design to ensure the game felt like an official, trustworthy tool."
    ],

    technologies: ['Tabletop Game Design', 'Client Relations', 'UI/UX Design', 'Print & Play', 'Serious Games'],
    imageUrl: Duo, 
    link: trustTriangleGame, 
    linkLabel: "Download Print & Play", 
    },

// --- PROJECT: The Armour of God ---
  {
    id: 'armour-of-god',
    title: 'The Armour of God',
    description: 'A single-device mobile party game built in Unity that brings Christian youth together through team-based, faith-filled challenges.',
    
    longDescription: `
      <p><strong>The Challenge:</strong> Most Christian digital tools are solitary experiences, such as reading plans or simple quizzes. Our goal was to bridge the gap between "chaotic party fun" and "meaningful spiritual fellowship." Designed specifically for the NextWave Christian Youth Community, we needed a low-friction tool that could operate in environments like church basements with spotty Wi-Fi while maintaining high biblical integrity.</p>
      <p><strong>The Mechanics:</strong> Armour of God is a "pass-the-phone" experience for 4-10 players divided into two teams: Red vs. Blue. The core loop, "Equip the Armour," features six diverse mini-games based on Ephesians 6. </p>
      <p><strong>The Impact:</strong> By transforming invisible spiritual concepts into tangible game mechanics, the project provides a scalable tool for youth leaders globally. A key innovation is the Facilitator Mode, which integrates the Youth Leader as a "Human API" to judge subjective answers and award "Spirit Bonuses" for good sportsmanship. This ensures the game remains a teaching tool rather than just a distraction.</p>
    `,
    challenges: [
      "Designing a robust offline mode to ensure functionality in church environments with no internet access.",
      "Managing competitive arguments over creative or theological answers through a manual 'Facilitator' scoring system.",
      "Ensuring legibility and ergonomics for groups looking over a shoulder by locking the app to landscape mode.",
      "Creating 'accidental-touch-proof' mechanics for high-energy device passing."
    ],
    solutions: [
      "Implemented a 'Facilitator Toggle' that removes subjective games if a leader isn't present to prevent scoring disputes.",
      "Developed a 'Safe Area' script and thumb-zone ergonomics to accommodate various Android device notches and hardware.",
      "Rebranded from 'Faith Hero' to 'Armour of God' to strengthen the thematic resonance with the biblical source material.",
      "Utilized a Responsive Canvas Architecture to ensure UI readability across thousands of different aspect ratios."
    ],

    technologies: ['Mobile Game Development', 'Unity', 'Android', 'C#', 'UI/UX Design', 'Local Multiplayer'],
    imageUrl: armourImage,    
    link: 'https://wakim17.itch.io/armour-of-god',
    linkLabel: "Download on Itch.io", 
    github: 'https://github.com/wakim17/Armour-of-God'
  },


// --- PROJECT : Unreal Engine Game Development ---
{
    id: 'unreal-horror-experiment',
    title: 'Unreal Engine: Psychological Horror',
    description: 'Developed a first-person psychological horror game in Unreal Engine, driven by user psychology research and custom Blueprint scripting.',
    
    longDescription: `
      <p><strong>The Concept & Research:</strong> The primary goal was to construct a horror environment that prioritizes psychological dread over simple jump scares. Based on player research, I identified that the most effective fear is generated through atmosphere and environmental uncertainty. The challenge involved moving beyond basic mechanics to build a deeply immersive system where limited visibility and sound cues keep players in a constant state of low-level dread.</p>
      <p><strong>Blueprint Engineering:</strong> I programmed the core gameplay loop using Unreal's Blueprint visual scripting. I built a robust Line Trace system for interacting with objects (collecting scattered polaroids) and validating win conditions via an Exit Statue. I also engineered a custom AI enemy that triggers after collecting specific items, hunting the player through the environment.</p>
      <p><strong>Dynamic Audio & Optimization:</strong> To maximize immersion, I created a location-based audio system using Trigger Volumes and Timelines to seamlessly crossfade ambient sounds (Forest to Church to Cemetery). After playtesting revealed CPU performance drops, I successfully optimized the game by adjusting engine scalability, disabling hardware ray tracing, and strategically placing invisible blocking volumes to cull unnecessary rendering.</p>
    `,
    challenges: [
      "Translating user psychology survey data into actionable level design and environmental storytelling.",
      "Designing a dynamic audio system that seamlessly transitions between different environmental zones without abrupt clipping.",
      "Managing CPU performance spikes caused by large maps and complex volumetric lighting."
    ],
    solutions: [
      "Engineered custom Blueprint Timelines and Trigger Volumes to smoothly fade ambient audio based on the player's precise location.",
      "Implemented a frame-by-frame Line Trace interaction system for precise object collection and UI prompting.",
      "Optimized the project by tweaking the Early Z-pass, disabling static lighting, and analyzing 'stat unit' metrics to boost framerates from 30 to a stable 50+ FPS."
    ],

    technologies: ['Unreal Engine 5', 'Blueprint Scripting', 'UX Research', 'Level Design', 'Performance Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&q=80&w=800',     
    link: '#', 
    linkLabel: "Watch Gameplay Video", 
  },

// --- PROJECT : Wijkbedrijf Selwerd (Digital Inclusion) ---
  {
    id: 'icono-communication-game',
    title: 'Icono: Playful Communication',
    description: 'Designed a cooperative Print & Play card game for a community hub to bridge language barriers among volunteers speaking over 140 different languages.',
    
    longDescription: `
      <p><strong>The Client Challenge:</strong> Wijkbedrijf Selwerd is a diverse community hub where volunteers work together, but severe language barriers (with over 140 languages spoken) often lead to social isolation and misunderstandings. The client needed a solution to foster connection, noting that standard digital translation apps felt "cold" and transactional.</p>
      <p><strong>The Mechanics:</strong> I designed "Icono," a cooperative card game that reframes translation from a frustrating task into a playful, relationship-building activity. Players draw a combination of color-coded cards (Red: Emotions, Blue: Actions, Green: Objects) and must act out the resulting scenario without speaking, while their teammates guess the meaning in Dutch.</p>
      <p><strong>Testing & Pedagogy:</strong> I structured the game's success metrics around Bloom’s Taxonomy, specifically tracking the Affective Domain (willingness to participate, comfort with vulnerability). Through structured playtesting with the target demographic, I observed that the cooperative nature of the game successfully guided players through the "Valley of Despair" (frustration), resulting in shared laughter and genuine cross-cultural connection.</p>
    `,
    challenges: [
      "Designing a rule set that could be understood by players with A0-level Dutch proficiency.",
      "Creating a safe psychological environment where adults felt comfortable being vulnerable and acting out silly prompts.",
      "Replacing 'cold' digital translation tools with a warm, low-tech, and highly accessible physical solution."
    ],
    solutions: [
      "Engineered an intuitive color-coded card system relying entirely on universal iconography rather than text.",
      "Drafted a comprehensive Facilitation Manual to guide community leaders in maintaining a positive, encouragement-focused atmosphere.",
      "Delivered the game as an easily distributable 'Print & Play' file to ensure maximum accessibility for the non-profit organization."
    ],

    technologies: ['Serious Games', 'Print & Play', 'Pedagogical Design', 'UX Research', 'Empathy-Driven Design'],
    
    // Remember to import a photo of your cards at the top and replace this string!
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800', 
    
    // Link to the PDF or Zip of the printable cards
    link: Icono, 
    linkLabel: "Download Print & Play", 
    
  },

// --- PROJECT: Guards Up (Noorderpoort VR) ---
  {
    id: 'guards-up-vr',
    title: 'Guards Up: VR Security Simulator',
    description: 'Engineered a Virtual Reality training simulator for Noorderpoort security students to practice exam-aligned patrol scenarios and emergency responses.',
    
    longDescription: `
      <p><strong>The Client Challenge:</strong> Partnered with Noorderpoort, a major vocational school, to develop a Virtual Reality training environment for their Security Officer program. The client needed a safe, repeatable platform for students to practice high-stress, real-world scenarios (such as fires, power outages, and intruders) that are difficult to replicate in a physical classroom.</p>
      <p><strong>UX Research & Mechanics:</strong> I conducted extensive UX research, including teacher interviews and student focus groups, to map the VR mechanics directly to the official Dutch curriculum and exam criteria. I engineered dynamic patrol mechanics featuring interactive environments (doors, locks, alarms), randomized events, and mandatory exam checkpoints.</p>
      <p><strong>Feedback & Aesthetics:</strong> To ensure the game functioned as an educational tool, I implemented a robust performance feedback system that tracks critical errors and provides a post-session debrief. Visually, we utilized a stylized, toon-shaded aesthetic (inspired by games like 'I Expect You To Die') to ensure interactive objects were easily identifiable while maintaining a tense, immersive atmosphere.</p>
    `,
    challenges: [
      "Replicating strict real-world exam grading criteria within a Virtual Reality environment.",
      "Designing stress-inducing scenarios (e.g., sudden alarms, low visibility) without causing overwhelming cognitive overload.",
      "Translating complex Dutch procedural security requirements into engaging, intuitive game mechanics."
    ],
    solutions: [
      "Engineered a modular scenario library featuring distinct modes (Tutorial, Practice, Exam) to progressively build student competence.",
      "Implemented a comprehensive real-time and post-session feedback system to clearly highlight missed checkpoints and errors.",
      "Utilized a bold, toon-shaded art style to ensure visual clarity and optimal performance on the Meta Quest 2 headsets."
    ],

    technologies: ['Virtual Reality', 'Meta Quest 2', 'UX Research', 'Serious Games', 'Performance Tracking'],
    
    // Replace with a screenshot from your game!
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800', 
    
    // We will link your trailer here!
    link: 'https://www.youtube.com/watch?v=ZXPcvMzqUpU', 
    linkLabel: "Watch Trailer", 
    
    github: 'https://github.com/wakim17/Noorderpoort' 
  },

// --- PROJECT: Luna VR (Pico Headset) ---
  {
    id: 'luna-vr-pico',
    title: 'Luna VR: AI Space Companion',
    description: 'Engineered an immersive Virtual Reality experience for the Pico headset, exploring the psychological impact of lunar isolation and the mitigating role of advanced AI companions.',
    
    longDescription: `
      <p><strong>The Concept & Research:</strong> Set in a near-future lunar colony, the player assumes the role of an engineer tasked with maintaining complex systems while grappling with extreme isolation. I conducted extensive research into the psychology of space exploration and the future of Artificial Intelligence to design an experience that simulates how human-AI interaction can mitigate mental stress.</p>
      <p><strong>AI Dialogue System:</strong> I engineered an interactive dialogue system featuring "Luna," an advanced AI companion. I designed the branching narrative to mimic human empathy, allowing the player to engage in meaningful, choice-driven conversations that dynamically affect the storyline.</p>
      <p><strong>Mechanics & VR Optimization:</strong> Developed specifically for the standalone Pico VR headset, I optimized interactive 3D environments (including a custom-modeled futuristic spacecraft) to ensure high framerates and immersion.  I also designed a highly minimalistic User Interface (UI) to reduce cognitive load and keep the player focused on the narrative and atmospheric tension.</p>
    `,
    challenges: [
      "Designing an empathetic, realistic AI dialogue system that effectively mitigates the simulated psychological stress of lunar isolation.",
      "Transitioning complex 2D conceptual art (futuristic spacecraft) into optimized 3D models suitable for standalone VR rendering.",
      "Balancing narrative storytelling with interactive VR mechanics and branching dialogue choices."
    ],
    solutions: [
      "Engineered a dynamic dialogue tree allowing players to engage in meaningful, choice-driven conversations with the AI companion.",
      "Iteratively playtested and refined the UI/UX, implementing minimalistic menus to maintain high immersion and reduce cognitive load.",
      "Utilized Unity and the Pico Integration SDK to script interactive environmental puzzles and narrative triggers within the lunar dome."
    ],

    technologies: ['Virtual Reality', 'Pico VR', 'AI Dialogue Systems', 'UX/UI Design', '3D Modeling'],
    
    // Replace with a screenshot from your game!
    imageUrl: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800', 
    
    // We will link your trailer here!
    link: 'https://www.youtube.com/watch?v=O5Yf8BD-YQo&feature=youtu.be', 
    linkLabel: "Watch Trailer", 
    
    github: 'https://github.com/wakim17/VRTELEE' 
  },

// --- PROJECT: The Social Chronicle (Narrative Design) ---
  {
    id: 'the-social-chronicle',
    title: 'The Social Chronicle',
    description: 'A comprehensive narrative design and world-building project for a 1940s action-adventure game, featuring dynamic morality systems and an interactive Twine prototype.',
    
    longDescription: `
      <p><strong>The Concept & World-Building:</strong> "The Social Chronicle" is a narrative-driven concept set in 1940s California. The story follows Kim Harlan, a mother with psychic abilities whose newborn is abducted by a corrupt government official, Dr. Krane. To pitch and document this game, I designed a series of immersive "in-world" newspaper posters that outline the lore, Jungian character archetypes, and the 14-beat narrative structure.</p>
      <p><strong>Narrative Mechanics:</strong> I designed core gameplay systems directly driven by the protagonist's emotional state. The "Emotional State System" forces players to balance risk and reward: high stress grants devastating elemental power but makes Kim highly vulnerable. Furthermore, the game features "Dynamic Newspaper Headlines" that rewrite themselves based on the player's moral choices, acting as both a map and a reflection of Public Opinion.</p>
      <p><strong>Interactive Prototyping:</strong> To move the project beyond static documents, I developed an interactive, text-based playable prototype of Chapter 1 using <strong>Twine</strong>. This allowed me to test the branching dialogue, player agency, and the emotional pacing of the inciting incident before any 3D development began.</p>
    `,
    challenges: [
      "Translating complex psychological themes (grief, propaganda, and morality) into engaging, balanced gameplay mechanics.",
      "Designing a dynamic narrative feedback loop where the game world (via newspapers and public opinion) reacts organically to player aggression or goodwill.",
      "Formatting extensive Game Design Document (GDD) information into immersive, visually appealing in-world artifacts."
    ],
    solutions: [
      "Engineered an 'Emotional State System' that directly ties narrative tension to combat vulnerability and power output.",
      "Mapped a comprehensive 14-beat dramatic progression, tracking the transition of the protagonist from 'Victim' to 'Warrior'.",
      "Developed an interactive Twine prototype to playtest narrative pacing and branching dialogue choices."
    ],

    technologies: ['Narrative Design', 'World-Building', 'Twine', 'Interactive Storytelling', 'Game Design Document (GDD)'],
    
    // Replace with one of your amazing 1940s Newspaper Posters!
    imageUrl: Kim, 
    
    // We will link your Twine HTML file here!
    link: twineGame, 
    linkLabel: "Play Twine Prototype", 

    secondaryLink: narrativePosters,
    secondaryLinkLabel: "View Newspaper Posters",
  },

// --- PROJECT 11: Project Plastic (Capstone Game) ---
  {
    id: 'project-plastic',
    title: 'Project Plastic',
    description: 'A physics-based action platformer developed in Unity, designed to raise awareness about plastic pollution through satirical, fast-paced gameplay.',
    
    longDescription: `
      <p><strong>The Concept & Research:</strong> "Project Plastic" is a satirical action-platformer designed to motivate young adults (18-26) to take action against plastic waste. Utilizing BJ Fogg's Behavior Model, I aimed to create an experience that was intrinsically motivating rather than purely educational. The story follows Timmy, a turtle who turns himself into a "plastic cyborg" to fight back against the corporations polluting his beach.</p>
      <p><strong>The Mechanics:</strong> The core loop revolves around fast-paced, physics-based movement and combat. Players must collect plastic waste to upgrade their body—gaining abilities like a "Straw Sword" or "Plastic Grappling Hook"—but these upgrades come at a cost, visually corrupting the character to symbolize the harm of pollution.</p>
      <p><strong>Technical Implementation:</strong> I developed the game using <strong>Unity and C#</strong>, implementing complex character controllers for wall-running and grappling. I also modeled custom 3D assets in <strong>Blender</strong>, including the rigged turtle character, environmental props, and the modular trash weapons.</p>
    `,
    challenges: [
      "Balancing the serious message of environmental pollution with fun, satirical gameplay that appeals to a Gen Z audience.",
      "Implementing complex physics-based movement mechanics (grappling, wall-running) that felt responsive and intuitive.",
      "Creating a cohesive 3D art style (inspired by 'Adventure Time') while optimizing assets for performance."
    ],
    solutions: [
      "Designed a 'corruption' mechanic where upgrades make the player stronger but visually more polluted, creating a narrative conflict through gameplay.",
      "Conducted on-site research at Delfzijl City Beach to gather reference images and interview locals, grounding the game's setting in reality.",
      "Utilized Blender to model and rig low-poly characters, ensuring a distinct visual identity that matched the satirical tone."
    ],

    technologies: ['Unity', 'C#', 'Blender', '3D Modeling', 'Game Design', 'Serious Games'],
    
    // Replace with a screenshot of Timmy the Turtle or your gameplay!
    imageUrl: PP, 
    
    // If you have a build or a video, link it here!
    link: 'https://www.youtube.com/watch?v=mSMoXcaLbmY', 
    linkLabel: "View Gameplay", 
  },
];



// --- HELPER: Color mapping for your new categories ---
export const categoryStyles: Record<string, string> = {
  'game-dev': 'bg-purple-500/10 text-purple-400 border-purple-500/20', 
  'xr-hardware': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', 
  'web-ai': 'bg-blue-500/10 text-blue-400 border-blue-500/20', 
  'leadership': 'bg-amber-500/10 text-amber-400 border-amber-500/20', 
};

export const SKILLS: Skill[] = [
  // --- Game Development (Core) ---
  { name: 'Game Design & Physics', icon: <Gamepad2 size={20} />, category: 'game-dev' },
  { name: 'Unity & Unreal Engine', icon: <Box size={20} />, category: 'game-dev' },
  { name: 'C# & C++', icon: <Code size={20} />, category: 'game-dev' },
  { name: 'Multiplayer / Networking', icon: <Wifi size={20} />, category: 'game-dev' },
  { name: 'Blueprints & Visual Scripting', icon: <Layers size={20} />, category: 'game-dev' },

  // --- XR & Hardware (The Innovation) ---
  { name: 'XR (VR/AR) & Optimization', icon: <Glasses size={20} />, category: 'xr-hardware' },
  { name: 'Arduino & Microcontrollers', icon: <Cpu size={20} />, category: 'xr-hardware' },
  { name: 'Rapid Prototyping (3D/Laser)', icon: <Printer size={20} />, category: 'xr-hardware' },
  { name: 'IoT & Sensors', icon: <Wrench size={20} />, category: 'xr-hardware' },

  // --- Web Stack & AI (The Software) ---
  { name: 'React & Next.js Ecosystem', icon: <Globe size={20} />, category: 'web-ai' },
  { name: 'Python & AI Integration', icon: <Sparkles size={20} />, category: 'web-ai' },
  { name: 'UI/UX Prototyping (Figma)', icon: <Palette size={20} />, category: 'web-ai' },
  { name: 'Databases & APIs', icon: <Database size={20} />, category: 'web-ai' },
  { name: 'Git & CI/CD Pipelines', icon: <GitBranch size={20} />, category: 'web-ai' },

  // --- Leadership & Soft Skills (The Professional) ---
  { name: 'Scrum Master / Agile', icon: <Users size={20} />, category: 'leadership' }, 
  { name: 'Tech Documentation', icon: <BookOpen size={20} />, category: 'leadership' },
  { name: 'Problem Solving & Ideation', icon: <Lightbulb size={20} />, category: 'leadership' },
  { name: 'Systems Architecture', icon: <Terminal size={20} />, category: 'leadership' },
];
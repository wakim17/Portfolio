import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, Github, Linkedin, Mail, 
  Lightbulb, Zap, PenTool, Gamepad2, Rocket 
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import profileImg from '../assets/profile-pic.jpg'; 

const workflowSteps = [
  {
    icon: <Lightbulb size={24} />,
    title: "Concept",
    description: "Every great game starts with a question. I research player psychology and market gaps to ensure the 'fun' is there before coding starts.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    icon: <Zap size={24} />,
    title: "Innovate",
    description: "I don't settle for standard solutions. I explore emerging tech like AI and VR to find novel mechanics that push the boundaries of gameplay.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20"
  },
  {
    icon: <PenTool size={24} />,
    title: "Prototype",
    description: "I believe in 'failing fast.' I use tools to grey-box to test loops immediately. If it isn't fun with cubes, it won't be fun with graphics.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: <Gamepad2 size={24} />,
    title: "Develop",
    description: "This is where the engineering happens. Whether it's C# in Unity or Blueprints in Unreal, I build scalable systems that allow iteration without breaking.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    icon: <Rocket size={24} />,
    title: "Polish",
    description: "The last 10% is 90% of the work. I focus on 'game juice'—particles, screen shake, and sound cues—that turn a mechanic into an experience.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  }
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-24 pb-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        
        {/* TOP ROW: Intro & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12" 
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-green-400 font-mono text-sm backdrop-blur-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>
            
            <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                I am <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                    Jhony Wakim
                </span>
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-slate-200">
                    Developer & Game Designer
                </p>
            </div>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              I build immersive digital experiences and prototype future innovations, turning complex ideas into shipped reality.
            </p>

            <div className="flex gap-6 pt-4 text-slate-500">
              <a href="https://github.com/wakim17" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/jhony-wakim-aa6a73246" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><Linkedin size={32} /></a>
              <a href="mailto:johnywakim17@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><Mail size={32} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} className="relative z-10 w-full max-w-[450px]">
              <div className="relative aspect-square bg-slate-800 rounded-3xl border border-slate-700 p-2 shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-slate-900 rounded-2xl relative overflow-hidden">
                    <img 
                      src={profileImg} 
                      alt="Jhony Wakim" 
                      className="w-full h-full object-cover" 
                    />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Integrated Workflow with EXACT text */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${step.border} bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group`}
            >
              <div className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <ArrowDown size={28} />
      </motion.div>

    </section>
  );
};

export default Hero;
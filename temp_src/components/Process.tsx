import React from 'react';
import { Lightbulb, PenTool, Gamepad2, Rocket, Zap } from 'lucide-react'; // Added Zap icon
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Lightbulb size={32} />,
    title: "Concept",
    description: "Every great game starts with a question. I research player psychology and market gaps to ensure the 'fun' is there before coding starts.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    icon: <Zap size={32} />, // NEW STEP
    title: "Innovate",
    description: "I don't settle for standard solutions. I explore emerging tech like AI and VR to find novel mechanics that push the boundaries of gameplay.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20"
  },
  {
    icon: <PenTool size={32} />,
    title: "Prototype",
    description: "I believe in 'failing fast.' I use tools like Twine or grey-boxing in Unity to test loops immediately. If it isn't fun with cubes, it won't be fun with graphics.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: <Gamepad2 size={32} />,
    title: "Develop",
    description: "This is where the engineering happens. Whether it's C# in Unity or Blueprints in Unreal, I build scalable systems that allow iteration without breaking.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    icon: <Rocket size={32} />,
    title: "Polish",
    description: "The last 10% is 90% of the work. I focus on 'game juice'—particles, screen shake, and sound cues—that turn a mechanic into an experience.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  }
];

const Process = () => {
  return (
    <section className="pt-10 pb-20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="text-primary">Workflow</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I don't just write code; I craft experiences. Here is how I take an abstract idea and turn it into a playable reality.
          </p>
        </motion.div>

        {/* 2. CHANGED: Updated grid to lg:grid-cols-5 to fit the new item */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border ${step.border} bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 transition-all duration-300 group`}
            >
              <div className={`w-14 h-14 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
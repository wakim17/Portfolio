import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_OWNER, PORTFOLIO_ROLE, PORTRAIT_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-primary font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {PORTFOLIO_OWNER}
            </span>
            <br />
          </h1>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            A <strong>{PORTFOLIO_ROLE}</strong> dedicated to crafting performant, accessible, and beautiful web applications. 
            Let's build something amazing together.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-full font-semibold hover:bg-slate-800 transition-colors backdrop-blur-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@wakim17.nl" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Hero Visual - Portrait */}
        <div className="relative order-1 md:order-2 animate-slide-up flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
             {/* Decorative blob/bg */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-500 rounded-full opacity-20 blur-3xl"></div>
             
             {/* Image Container */}
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-slate-700/50 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                    src={PORTRAIT_IMAGE} 
                    alt={PORTFOLIO_OWNER} 
                    className="w-full h-full object-cover"
                />
             </div>

             {/* Floater Element */}
             <div className="absolute -bottom-6 -left-6 bg-card border border-slate-700 p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-800"></div>
                        <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-slate-800"></div>
                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-slate-800"></div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white">50+ Projects</p>
                        <p className="text-[10px] text-slate-400">Successfully Delivered</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
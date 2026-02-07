import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Make sure to install lucide-react

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 md:px-20 max-w-7xl mx-auto min-h-[80vh]">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Wakim 17
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
          A <strong className="text-white">Senior Full Stack Engineer</strong> dedicated to crafting 
          performant, accessible, and beautiful web applications. 
          Let's build something amazing together.
        </p>

        <div className="flex gap-4 pt-4">
          <button className="px-8 py-3 bg-white text-[#0a1122] rounded-full font-semibold hover:scale-105 transition transform">
            View Work &rarr;
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition">
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 pt-8 text-gray-500">
          <Github className="w-6 h-6 hover:text-white cursor-pointer transition" />
          <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition" />
          <Mail className="w-6 h-6 hover:text-white cursor-pointer transition" />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Replace this src with your actual image path */}
          <img 
            src="/path-to-your-image.jpg" 
            alt="Wakim 17" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-6 -left-4 md:left-10 bg-[#1e293b] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4 animate-bounce-slow">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-teal-400 border-2 border-[#1e293b]"></div>
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#1e293b]"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#1e293b]"></div>
          </div>
          <div>
            <div className="font-bold text-white">50+ Projects</div>
            <div className="text-xs text-gray-400">Successfully Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_OWNER, PORTFOLIO_ROLE, HERO_TAGLINE, PORTRAIT_IMAGE, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 md:px-20 max-w-7xl mx-auto min-h-[85vh]">
      
      {/* Left Content */}
      <motion.div 
        className="w-full md:w-1/2 mt-10 md:mt-0 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Available for new projects
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight text-white">
          I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            {PORTFOLIO_OWNER}
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl text-slate-300 font-medium">
            {PORTFOLIO_ROLE}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-lg leading-relaxed">
          {HERO_TAGLINE}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 pt-8 text-gray-500">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={SOCIAL_LINKS.email} className="hover:text-white hover:scale-110 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center relative"
      >
        {/* Large Image Container */}
        <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-slate-800">
          <img 
            src={PORTRAIT_IMAGE} 
            alt={PORTFOLIO_OWNER} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Decorative Blur behind image */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

        {/* BADGE REMOVED HERE */}
        
      </motion.div>
    </section>
  );
};

export default Hero;
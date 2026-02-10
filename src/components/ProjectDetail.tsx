import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Github, ExternalLink, Layers, Code2, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project not found</h2>
            <button onClick={() => navigate('/')} className="text-primary hover:underline">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative bg-slate-900">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-20 max-w-5xl">
        
        {/* Top Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        {/* Project Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mb-12"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all border border-slate-700">
                        <Github size={20} /> View Code
                    </a>
                )}
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                    >
                        <ExternalLink size={20} /> 
                        {/* Use custom label if it exists, otherwise default to 'Live Demo' */}
                        {project.linkLabel || "Live Demo"}
                    </a>
                )}
            </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-video rounded-3xl overflow-hidden border border-slate-700 shadow-2xl mb-16"
        >
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
            
            {/* Left: Deep Dive Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 space-y-12"
            >
                {/* 1. The Story (Long Description) */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Layers className="text-primary" /> Project Story
                    </h3>
                    <div className="text-slate-300 text-lg leading-relaxed space-y-4">
                        {/* If longDescription exists, use it. Otherwise, fallback to description */}
                        {project.longDescription ? (
                            <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                        ) : (
                            <p>{project.description}</p>
                        )}
                    </div>
                </div>

                {/* 2. Challenges & Solutions (If they exist) */}
                {project.challenges && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
                            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                <AlertTriangle size={20} /> Challenges
                            </h4>
                            <ul className="space-y-3">
                                {project.challenges.map((c, i) => (
                                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 shrink-0" />
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-500/5 p-6 rounded-2xl border border-green-500/10">
                            <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                <CheckCircle size={20} /> Solutions
                            </h4>
                             <ul className="space-y-3">
                                {project.solutions && project.solutions.map((s, i) => (
                                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/50 shrink-0" />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Right: Tech Stack */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
            >
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Code2 className="text-purple-400" /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-slate-900 text-blue-300 text-sm font-medium rounded-lg border border-slate-700/50">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 flex justify-center border-t border-slate-800 pt-12">
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => navigate(-1)}
                className="group flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back
            </motion.button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
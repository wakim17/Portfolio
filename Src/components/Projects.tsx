import React from 'react';
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface ProjectsProps {
  isHomePage?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  const displayedProjects = isHomePage ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <section id="projects" className={`px-8 md:px-20 max-w-7xl mx-auto ${isHomePage ? 'py-20' : 'pt-32 pb-20'}`}>
      
      {/* NEW: Top "Back to Home" Button (Only on full page) */}
      {!isHomePage && (
        <div className="mb-12">
            <button
                onClick={() => navigate('/')}
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </button>
        </div>
      )}

      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-white"
      >
        <span className="w-12 h-1 bg-primary rounded-full"></span>
        {isHomePage ? 'Featured Projects' : 'All Projects'}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              perspective={1000} 
              scale={1.02}
              transitionSpeed={1000}
              className="h-full"
            >
              <div className="h-full group bg-card rounded-xl p-6 border border-slate-700 hover:border-primary/50 shadow-xl flex flex-col relative overflow-hidden">
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Github size={24} />
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition z-20">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition z-20">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="h-48 mb-4 overflow-hidden rounded-lg bg-slate-800">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                      />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-primary transition">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tag => (
                      <span key={tag} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full mb-2 mr-2 inline-block">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-16 flex justify-center">
        {isHomePage ? (
          <button
            onClick={() => navigate('/projects')}
            className="group flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
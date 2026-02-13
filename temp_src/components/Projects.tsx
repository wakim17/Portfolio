import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Import the new component!

interface ProjectsProps {
  isHomePage?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  const displayedProjects = isHomePage ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
      <section id="projects" className={`max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 ${isHomePage ? 'py-20' : 'pt-32 pb-20'}`}>
      {/* Top Back Button (Only on full page) */}
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
            {/* Replaced the big hardcoded block with this single clean line! */}
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

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
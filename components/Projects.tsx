import React from 'react';
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  isHomePage?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  
  // If on home page, show only 2 projects, otherwise show all
  const displayedProjects = isHomePage ? PROJECTS.slice(0, 2) : PROJECTS;

  return (
    <section id="projects" className={`relative ${isHomePage ? 'py-24' : 'pt-32 pb-24'} bg-dark`}>
      {isHomePage && (
         <div className="absolute inset-0 bg-slate-900/50 skew-y-3 transform origin-bottom-left -z-10 h-full"></div>
      )}
      
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isHomePage ? 'Featured Projects' : 'All Projects'}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-lg">
            {isHomePage 
              ? "A selection of my recent work, ranging from complex web applications to experimental AI integrations."
              : "A complete collection of my technical projects, experiments, and applications."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-card border border-slate-800 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-20 -mt-12">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                        <a href={project.github} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    <a href={project.link} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-800/80 text-xs font-medium text-slate-300 rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          {isHomePage ? (
            <button
              onClick={() => navigate('/projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
            >
              View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
             <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
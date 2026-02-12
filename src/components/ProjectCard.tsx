import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt'; // Restored the Tilt import!

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasGithub = project.github && project.github.length > 0;
  const hasLink = project.link && project.link.length > 0;
  const hasSecondary = project.secondaryLink && project.secondaryLink.length > 0;

  return (
    <Tilt
      tiltMaxAngleX={8} 
      tiltMaxAngleY={8}
      perspective={1000}
      scale={1.02} // Scales up slightly on hover
      transitionSpeed={1000}
      className="h-full"
    >
      <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10 flex flex-col h-full relative">
        
        {/* Optional: Restore the subtle Glow Effect behind the card */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

        {/* 1. Clean Image Area */}
        <Link to={`/project/${project.id}`} className="block relative overflow-hidden aspect-video bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {/* Dark gradient overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </Link>

        {/* 2. Content Area */}
        <div className="p-6 flex flex-col flex-grow bg-slate-800">
          
          {/* Title */}
          <Link to={`/project/${project.id}`} className="block">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {project.title}
              </h3>
          </Link>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-slate-500 text-xs font-medium">
                  +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* 3. Bottom Footer - Organized Links */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700 mt-auto">
              
              {/* Primary Action */}
              <Link
                  to={`/project/${project.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-300 transition-colors"
              >
                  View Project <ArrowRight size={16} />
              </Link>

              {/* Quick Icon Links */}
              <div className="flex items-center gap-3">
                  {/* Secondary Link (PDF/Posters) */}
                  {hasSecondary && (
                      <Link 
                          to={`/project/${project.id}`} 
                          className="text-slate-500 hover:text-purple-400 transition-colors z-20"
                          title={project.secondaryLinkLabel || "View Extras"}
                      >
                          <Layout size={18} />
                      </Link>
                  )}
                  {/* Live Link */}
                  {hasLink && (
                      <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-green-400 transition-colors z-20"
                          onClick={(e) => e.stopPropagation()}
                          title={project.linkLabel || "Live Demo"}
                      >
                          <ExternalLink size={18} />
                      </a>
                  )}
                  {/* Github Link */}
                  {hasGithub && (
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-white transition-colors z-20"
                          onClick={(e) => e.stopPropagation()}
                          title="View Code"
                      >
                          <Github size={18} />
                      </a>
                  )}
              </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NFC Servo Control",
    description: "An interactive hardware project using servo motors and NFC scanning logic. Scans a card to open 45 degrees, and the same card again to close it.",
    tags: ["C++", "Arduino", "Hardware"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Game Design Prototype",
    description: "A concept for a new gameplay mechanic focused on player agency and emergent storytelling.",
    tags: ["Unity", "C#", "Game Design"],
    links: { demo: "#", code: "#" }
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-[#112240] rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-blue-500/30 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Github size={24} />
              </div>
              <div className="flex gap-4">
                <a href={project.links.code} className="text-gray-400 hover:text-blue-400 transition"><Github size={20} /></a>
                <a href={project.links.demo} className="text-gray-400 hover:text-blue-400 transition"><ExternalLink size={20} /></a>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
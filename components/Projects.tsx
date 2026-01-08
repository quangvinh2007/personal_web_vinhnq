import React from "react";
import { ExternalLink, Github, Users, Zap } from "lucide-react";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-accentSecondary font-mono text-sm tracking-widest uppercase">
              04. Portfolio
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold">
              Featured Projects
            </h3>
          </div>
          <p className="text-textSecondary max-w-md">
            Selected projects from university and personal development showing
            my capability to build complex fullstack systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-accentSecondary/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Users size={12} className="text-accentSecondary" />
                  Team of {project.teamSize}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase rounded">
                    {project.role}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-accentSecondary transition-colors">
                  {project.title}
                </h4>
                <p className="text-textSecondary text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-textSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold text-textPrimary hover:text-accentSecondary transition-colors"
                  >
                    <Github size={18} /> Source Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-2 glass rounded-full hover:bg-accentSecondary hover:text-background transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/quangvinh2007"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-sm font-bold hover:bg-white/5 transition-colors"
          >
            <Zap size={18} className="text-accent" /> More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

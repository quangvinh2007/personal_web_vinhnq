
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-accent/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-accent font-mono text-sm tracking-widest uppercase">03. Tech Stack</h2>
          <h3 className="text-4xl lg:text-5xl font-bold">The Tools I Master</h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A comprehensive set of technologies for frontend, backend, and cross-platform development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center gap-3 p-6 glass rounded-2xl w-32 md:w-40 hover:border-accent transition-all duration-300 hover:scale-110"
            >
              <div className="w-12 h-12 flex items-center justify-center p-2 rounded-xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-textSecondary group-hover:text-textPrimary transition-colors">
                {skill.name}
              </span>
              
              {/* Category Indicator */}
              <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${
                skill.category === 'frontend' ? 'bg-blue-400' : 
                skill.category === 'backend' ? 'bg-green-400' : 
                skill.category === 'database' ? 'bg-orange-400' : 'bg-accent'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest text-textSecondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span> Frontend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span> Backend
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span> Database
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span> Others
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

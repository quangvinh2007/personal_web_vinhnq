
import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 glass">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-accent/10 p-1.5 rounded-lg">
            <Terminal size={20} className="text-accent" />
          </div>
          <span className="text-lg font-bold">Vinh<span className="text-accent">NQ</span></span>
        </div>

        <p className="text-sm text-textSecondary flex items-center gap-1.5">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> for the Future &copy; {currentYear} VinhNQ
        </p>

        <div className="flex gap-6 text-sm font-medium text-textSecondary">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

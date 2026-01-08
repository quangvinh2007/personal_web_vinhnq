
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-accentSecondary font-mono text-sm tracking-widest uppercase">02. My Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold">What I Can Do For You</h3>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Leveraging modern tech stacks to deliver high-quality digital products tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group glass p-8 rounded-3xl hover:bg-accent/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-accent/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-textSecondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-32 space-y-4">
              <h2 className="text-accent font-mono text-sm tracking-widest uppercase">
                01. About Me
              </h2>
              <h3 className="text-4xl font-bold">My Education & Journey</h3>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-textSecondary leading-relaxed">
                I am a Software Engineering graduate from{" "}
                <span className="text-white font-semibold">FPT University</span>
                . My journey in tech is driven by a passion for solving
                real-world problems through clean, efficient code. With a strong
                foundation in <span className="text-accent">Java</span> and a
                deep focus on the{" "}
                <span className="text-accent">MERN stack</span>, I enjoy
                building applications from the ground up—from database design to
                frontend animations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl hover:border-accent/30 transition-colors">
                <GraduationCap className="mb-4 text-accent" size={32} />
                <h4 className="text-lg font-bold mb-2">Education</h4>
                <p className="text-textSecondary text-sm">
                  FPT University
                  <br />
                  Software Engineering (Software Technical)
                </p>
              </div>
              <div className="glass p-6 rounded-2xl hover:border-accentSecondary/30 transition-colors">
                <MapPin className="mb-4 text-accentSecondary" size={32} />
                <h4 className="text-lg font-bold mb-2">Location</h4>
                <p className="text-textSecondary text-sm">
                  Danang City, Vietnam
                  <br />
                  Available for Remote/On-site
                </p>
              </div>
              <div className="glass p-6 rounded-2xl hover:border-accentSecondary/30 transition-colors">
                <Briefcase className="mb-4 text-accentSecondary" size={32} />
                <h4 className="text-lg font-bold mb-2">Role</h4>
                <p className="text-textSecondary text-sm">
                  Fresh Graduate Fullstack Dev
                  <br />
                  Specialized in MERN & Java
                </p>
              </div>
              <div className="glass p-6 rounded-2xl hover:border-accent/30 transition-colors">
                <Award className="mb-4 text-accent" size={32} />
                <h4 className="text-lg font-bold mb-2">Goal</h4>
                <p className="text-textSecondary text-sm">
                  Help businesses build
                  <br />
                  scalable & sleek web apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

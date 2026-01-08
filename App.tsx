import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

const App: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 3 + 2,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="universe-background min-h-screen text-textPrimary selection:bg-accent/30 relative overflow-x-hidden">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Nebula Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-nebula-purple to-space-darker opacity-80"></div>

        {/* Animated Nebula Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cosmic-blue rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}

        {/* Shooting Star Effect */}
        <div className="absolute inset-0 animate-shoot-star"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Top Glow Line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-blue via-nebula-purple to-cosmic-blue opacity-40 z-[60] shadow-lg shadow-nebula-purple/50"></div>

      {/* Cosmic Dust Particles (optional subtle effect) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-5"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0.2)), radial-gradient(2px 2px at 60px 70px, #fff, rgba(0,0,0,0.2)), radial-gradient(1px 1px at 50px 50px, #fff, rgba(0,0,0,0.2)), radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0.2)), radial-gradient(2px 2px at 90px 10px, #fff, rgba(0,0,0,0.2))",
          backgroundSize: "200px 200px",
          animation: "drift 20s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default App;

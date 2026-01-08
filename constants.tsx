import React from "react";
import { Layout, Smartphone, Database, Code } from "lucide-react";
import { Project, Skill, Service } from "./types";
import rentzyImg from "./public/images/rentzy.png";
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cinepa - Movie Booking System",
    description:
      "An intermediary platform where multiple cinema owners can register and list showtimes. Users can seamlessly book tickets similar to Cinema platforms.",
    technologies: ["Java Web JSP", "SQL Server", "HTML/CSS/JS"],
    role: "Fullstack Developer",
    teamSize: 5,
    link: "https://github.com/GitF1/CinePa",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Travelmate - Connect Travelers",
    description:
      "A travel companion platform allowing users to find buddies and co-plan trips via a mobile app and an administrative dashboard.",
    technologies: ["React Native", "React JS", "Node JS", "MongoDB"],
    role: "Fullstack Developer (App & Web)",
    teamSize: 5,
    link: "https://github.com/TravelmateProjects",
    image:
      "https://play-lh.googleusercontent.com/e3uKMb09GkVjWYf-XpkVzve5jLeKtdyAXF1FiBl3rwynNxeLuDqMCXzl2doZeZIhyg",
  },
  {
    id: 3,
    title: "Rentzy - Self-Driving Car Rental",
    description:
      "A marketplace connecting car owners and renters. Includes comprehensive booking flows and owner dashboards.",
    technologies: ["Node JS", "Express JS", "React JS", "MySQL"],
    role: "Fullstack Developer",
    teamSize: 5, // Assumed since no team count mentioned specifically for this one, but user listed links.
    link: "https://github.com/vankhai-coder/SEP_Rentzy",
    image: rentzyImg,
  },
];

export const SKILLS: Skill[] = [
  {
    name: "React JS",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Node JS",
    category: "backend",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express JS",
    category: "backend",
    icon: "https://cdn.simpleicons.org/express/FFFFFF",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Git",
    category: "other",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "MySQL",
    category: "database",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "SQL Server",
    category: "database",
    icon: "https://img.icons8.com/color/1200/microsoft-sql-server.jpg",
  },
  {
    name: "React Native",
    category: "frontend",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Java",
    category: "backend",
    icon: "https://stackjava.com/wp-content/uploads/2017/11/java-logo.png",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    description:
      "Building high-performance, responsive websites with modern UI/UX using MERN stack and React.",
    icon: <Layout className="w-8 h-8 text-accent" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android using React Native.",
    icon: <Smartphone className="w-8 h-8 text-accentSecondary" />,
  },
  {
    title: "Fullstack Solutions",
    description:
      "End-to-end development including robust backend architectures and intuitive frontends.",
    icon: <Code className="w-8 h-8 text-accent" />,
  },
  {
    title: "Database Management",
    description:
      "Designing and optimizing complex database structures with MySQL, SQL Server, and MongoDB.",
    icon: <Database className="w-8 h-8 text-accentSecondary" />,
  },
];

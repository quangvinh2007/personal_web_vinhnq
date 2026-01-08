
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  teamSize: number;
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

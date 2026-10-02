export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  githubUrl?: string;
  liveDemoAvailable?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface DigitalService {
  id: string;
  name: string;
  shortDesc: string;
  deliverables: string[];
  tag: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface WhyWorkItem {
  title: string;
  description: string;
  iconName: string;
}

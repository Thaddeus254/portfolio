export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'language';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  socialLinks: SocialLink[];
  resumeUrl: string;
  projects: Project[];
}
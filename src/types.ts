export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  employmentType: string;
  period: string;
  isCurrent?: boolean;
  industry: 'FinTech & Banking' | 'Media & Telecom' | 'Retail & POS' | 'Enterprise & Systems';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
  category: 'graduate' | 'undergraduate' | 'medical' | 'teaching';
}

export interface AiMlTrainingInfo {
  title: string;
  status: string;
  description: string;
  focusAreas: {
    name: string;
    description: string;
    tools: string[];
  }[];
  enterpriseApplications: string[];
}

export interface ContactInfo {
  name: string;
  title: string;
  address: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolioUrl: string;
  objective: string;
  qualifications: string[];
}

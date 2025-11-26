export interface Education {
  school: string;
  period: string;
  location: string;
  degree: string;
  details: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  projects?: {
    title: string;
    description: string[];
  }[];
  generalDescription?: string[];
}

export interface Research {
  title: string;
  institution: string;
  period: string;
  location: string;
  role?: string;
  advisors?: string;
  details: string[];
}

export interface Award {
  name: string;
  issuer: string;
  year: string;
  location: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface ResumeData {
  profile: {
    name: string;
    email: string;
    phone: string;
    location: string; // Inferred or current
    summary: string;
    image: string;
  };
  education: Education[];
  experience: Experience[];
  research: Research[];
  awards: Award[];
  presentations: string[];
  activities: {
    role: string;
    organization: string;
    period: string;
    location: string;
    details: string[];
  }[];
  skills: Skill[];
}
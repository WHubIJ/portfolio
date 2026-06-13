export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  challenges: string
  learnings: string
  githubUrl: string
  liveUrl?: string
  isEnterprise?: boolean
  isBuilding?: boolean
  imagePlaceholder: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: 'internship' | 'full-time' | 'contract' | 'freelance'
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon: string
  level: 'proficient' | 'experienced' | 'familiar'
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

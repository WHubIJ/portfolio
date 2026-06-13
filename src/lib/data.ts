import type { Project, Experience, SkillCategory, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/wisdom-imade-a0b0bb36b',
  github: 'https://github.com/WHubIJ',
  email: 'wisdomimade14@gmail.com',
}

export const SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact', level: 'proficient' },
      { name: 'TypeScript', icon: 'SiTypescript', level: 'proficient' },
      { name: 'JavaScript', icon: 'SiJavascript', level: 'proficient' },
      { name: 'Vue', icon: 'SiVuedotjs', level: 'experienced' },
      { name: 'Flutter', icon: 'SiFlutter', level: 'experienced' },
      { name: 'HTML', icon: 'SiHtml5', level: 'proficient' },
      { name: 'CSS', icon: 'SiCss', level: 'proficient' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 'proficient' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'ASP.NET Core', icon: 'SiDotnet', level: 'proficient' },
      { name: 'C#', icon: 'SiCsharp', level: 'proficient' },
      { name: 'Java', icon: 'SiJava', level: 'experienced' },
      { name: 'Spring Boot', icon: 'SiSpring', level: 'experienced' },
      { name: 'REST APIs', icon: 'TbApi', level: 'proficient' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'SQL Server', icon: 'SiMicrosoftsqlserver', level: 'proficient' },
      { name: 'MySQL', icon: 'SiMysql', level: 'proficient' },
      { name: 'Firebase', icon: 'SiFirebase', level: 'experienced' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', icon: 'SiMicrosoftazure', level: 'experienced' },
      { name: 'Docker', icon: 'SiDocker', level: 'experienced' },
      { name: 'Git', icon: 'SiGit', level: 'proficient' },
      { name: 'GitHub', icon: 'SiGithub', level: 'proficient' },
      { name: 'Linux', icon: 'SiLinux', level: 'experienced' },
    ],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'viva-hotels',
    title: 'Full Stack Developer Intern',
    company: 'VIVA Hotels',
    location: 'Spain',
    period: '2024',
    type: 'internship',
    description:
      'Contributed to a live corporate product at a real hospitality tech company, working across the full stack in a professional cross-functional team.',
    responsibilities: [
      'Developed complete frontend pages using React and TypeScript',
      'Built reusable UI component library with Material UI',
      'Integrated REST APIs and managed complex data flows',
      'Implemented file upload and download functionality',
      'Integrated Azure Storage solutions for asset management',
      'Connected DocuWare document management services',
      'Participated in UI/UX review sessions',
      'Contributed to collaborative code reviews',
      'Collaborated in multidisciplinary Agile teams',
      'Worked on a production application used in a real corporate environment',
    ],
    technologies: ['React', 'TypeScript', 'Material UI', 'ASP.NET Core', 'Azure', 'DocuWare', 'REST APIs'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'soka',
    title: 'SOKA',
    description: 'Cross-platform event management and ticketing platform.',
    longDescription:
      'SOKA is a full-featured event management platform built for both organizers and attendees. The app handles everything from event creation to QR-validated ticket scanning, with role-based flows for organizers and clients.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    features: [
      'Event creation and management dashboard',
      'Ticket purchasing and payment flow',
      'QR code generation and validation scanning',
      'Organizer and client role separation',
      'Firebase real-time backend',
    ],
    challenges:
      'Designing a QR validation system that works reliably offline and syncing ticket state in real-time across multiple concurrent check-in devices.',
    learnings:
      'Deep understanding of Firebase real-time capabilities, cross-platform Flutter development patterns, and building secure role-based authentication flows.',
    githubUrl: 'https://github.com/WHubIJ/SOKA.git',
    imagePlaceholder: '#6C63FF',
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    description: 'Desktop application for complete book and collection management.',
    longDescription:
      'A fully functional desktop application that handles the lifecycle of a library collection — from inventory to borrowing records — built with a clean architecture separating data, logic, and UI.',
    technologies: ['Java', 'MySQL', 'JDBC'],
    features: [
      'Full CRUD operations for books, members and loans',
      'Persistent MySQL database storage',
      'JDBC integration with connection pooling',
      'Search and filter functionality',
      'Clean layered architecture',
    ],
    challenges:
      'Implementing efficient database queries for complex search operations and maintaining clean separation between the data access layer and business logic.',
    learnings:
      'Solid grounding in JDBC patterns, relational database design, and building maintainable desktop applications with proper architectural layering.',
    githubUrl: 'https://github.com/WHubIJ/Library-Managment.git',
    imagePlaceholder: '#00D4A4',
  },
  {
    id: 'extranet-api',
    title: 'Extranet API',
    description: 'Enterprise REST API for document and data management.',
    longDescription:
      'A production-grade ASP.NET Core REST API developed during my internship at VIVA Hotels. Handles enterprise document workflows, Azure Storage integration and complex business logic for internal operations.',
    technologies: ['ASP.NET Core', 'C#', 'Azure Storage', 'SQL Server'],
    features: [
      'RESTful API architecture with versioning',
      'Azure Blob Storage integration for file management',
      'JWT authentication and authorization',
      'File upload, download, and management endpoints',
      'Business logic for document processing workflows',
    ],
    challenges:
      'Designing a scalable file management architecture that handles large enterprise document volumes while maintaining performance and security.',
    learnings:
      'Professional-grade API design, Azure Storage SDK integration, and writing maintainable .NET code in a corporate codebase.',
    githubUrl: '#',
    isEnterprise: true,
    imagePlaceholder: '#F59E0B',
  },
  {
    id: 'extranet-frontend',
    title: 'Extranet Frontend',
    description: 'Enterprise internal application for document and business processes.',
    longDescription:
      'A full React + TypeScript frontend built for internal business operations at VIVA Hotels. The application powers document management, file workflows, and cross-team operational dashboards.',
    technologies: ['React', 'TypeScript', 'Material UI'],
    features: [
      'Multi-section dashboard interfaces',
      'Full REST API integration layer',
      'File upload and management UI',
      'Reusable component library',
      'Fully responsive across device sizes',
    ],
    challenges:
      'Building a consistent component library that met the design standards of an existing enterprise product and integrating with complex multi-service APIs.',
    learnings:
      'Enterprise-scale React architecture, Material UI theming at a professional level, and developing in a real production codebase with code review standards.',
    githubUrl: '#',
    isEnterprise: true,
    imagePlaceholder: '#EC4899',
  },
  {
    id: 'VibeStats',
    title: 'VibeStats',
    description: 'Real-time analytics stats of your Spotify listening habits.',
    longDescription:
      'A Flutter app that replicates Spotifys core features, allowing users to log in with their Spotify account, browse their playlists, saved albums, and followed artists, and view detailed song information.',
    technologies: ['Flutter', 'Dart', 'Spotify API'],
    features: [
      'Spotify OAuth login and user authentication',
      'Playlist and album browsing',
      'Saved tracks and artists management',
      'Detailed song information display',
      'Real-time listening statistics',
    ],
    challenges:
      'Creating a seamless authentication flow with Spotify’s OAuth system and efficiently managing API rate limits while fetching user data in real-time.',
    learnings:
      'Learning how to integrate third-party APIs in Flutter, handling OAuth authentication flows, and managing state effectively in a complex app with multiple data sources.',
    githubUrl: 'https://github.com/WHubIJ/Spotify.git',
    imagePlaceholder: '#1DB954',
  },
  {
    id: 'enterprise-management-system',
    title: 'Enterprise Management System',
    description: 'An internal enterprise application for managing employees, projects, and resources.',
    longDescription:
      'Enterprise Management System is a comprehensive administration platform designed to manage organizations with multiple branches and hierarchical structures. The application centralizes branch management, user roles, document handling, inventory tracking, and financial operations through a secure role-based access system.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security'],
    features: [
      'Hierarchical organization structure management',
    'Role-based access control (Administrator, Manager, Staff)',
    'Branch lifecycle management and status tracking',
    'Document upload and administration',
    'Inventory management system',
    'Financial records and reporting',
    'Secure JWT authentication and authorization',
    'RESTful API architecture',
    ],
    challenges:
      'Designing a flexible domain model capable of handling hierarchical organizational structures while enforcing role-based permissions and maintaining data consistency across multiple branches and administrative levels.',
    learnings:
      'Deep understanding of Java and Spring Boot frameworks, database design with PostgreSQL, and implementing secure role-based authentication and authorization.',
    githubUrl: '#',
    isBuilding: true,
    imagePlaceholder: '#2e687d',
  },
]

# Wisdom Imade Isibor | Full Stack Developer Portfolio

Professional portfolio website for Wisdom Imade Isibor, a Full Stack Developer focused on building modern, responsive, and maintainable web applications.

The site presents selected projects, professional experience, technical skills, and contact information in a clean portfolio format suitable for recruiters, collaborators, and hiring teams.

## Overview

This portfolio is built as a fast, type-safe, single-page React application with dedicated routes for home, projects, experience, and contact. It highlights practical full stack experience across frontend development, backend APIs, databases, cloud services, and production-oriented workflows.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

## Features

- Responsive portfolio layout for desktop and mobile
- Animated page sections using Framer Motion
- Dedicated project pages with technologies, features, challenges, and learnings
- Experience section focused on real-world full stack work
- Contact page with email, LinkedIn, GitHub, and availability status
- Centralized content configuration in `src/lib/data.ts`
- Production-ready Vite build setup

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Home page sections
│   └── ui/           # Reusable UI components
├── features/
│   ├── contact/      # Contact page
│   ├── experience/   # Experience page
│   ├── home/         # Home page
│   └── projects/     # Projects page
├── hooks/            # Custom React hooks
├── lib/              # Animations and portfolio data
├── types/            # TypeScript interfaces
├── App.tsx           # Application routes
├── main.tsx          # React entry point
└── index.css         # Global styles
```

## Content Management

Most portfolio content is managed from:

```text
src/lib/data.ts
```

Use this file to update:

- Navigation links
- Social links
- Skills
- Experience
- Projects

Static assets such as the CV and Open Graph image are stored in:

```text
public/
```

## Deployment

This project can be deployed to any static hosting platform that supports Vite builds.

Recommended options:

- Vercel
- Netlify
- GitHub Pages

Typical production command:

```bash
npm run build
```

Build output:

```text
dist/
```

## Contact

- Email: wisdomimade14@gmail.com
- GitHub: https://github.com/WHubIJ
- LinkedIn: https://www.linkedin.com/in/wisdom-imade-a0b0bb36b


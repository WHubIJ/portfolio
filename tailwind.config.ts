import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#111118',
        'surface-2': '#18181F',
        'surface-3': '#1E1E28',
        border: '#2A2A38',
        'border-subtle': '#1E1E28',
        primary: '#6C63FF',
        'primary-dim': '#4C44CC',
        'primary-glow': 'rgba(108, 99, 255, 0.15)',
        accent: '#00D4A4',
        'accent-dim': '#00A882',
        text: '#F0EFF8',
        'text-muted': '#8888AA',
        'text-subtle': '#555570',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108, 99, 255, 0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 99, 255, 0.15)',
        'glow-accent': '0 0 40px rgba(0, 212, 164, 0.1)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
} satisfies Config

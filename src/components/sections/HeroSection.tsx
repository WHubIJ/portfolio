import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiReact, SiDotnet, SiSpring, SiTypescript } from 'react-icons/si'
import { fadeUp, staggerContainer } from '@/lib/animations'

const TECH_BADGES = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiDotnet, label: 'ASP.NET Core', color: '#512BD4' },
  { icon: SiSpring, label: 'Spring Boot', color: '#6DB33F' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-dot-bg opacity-30 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 py-20 text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto"
        >
          Building scalable web{' '}
          <span className="gradient-text">applications</span>
          {' '}from frontend to backend.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer specializing in{' '}
          <span className="text-text font-medium">React</span>,{' '}
          <span className="text-text font-medium">ASP.NET Core</span>,{' '}
          <span className="text-text font-medium">Spring Boot</span> and modern web technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/projects" className="btn-primary">
            View Projects
            <HiArrowRight size={16} />
          </Link>
          <a href="/src/assets/CV_Wisdom_Isibor_FullStack_Junior.pdf" download className="btn-outline">
            <HiDownload size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {TECH_BADGES.map(({ icon: Icon, label, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface-2/60 backdrop-blur text-sm text-text-muted font-display hover:border-primary/40 hover:text-text transition-all duration-200"
            >
              <Icon size={14} style={{ color }} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-text-subtle">
            <span className="text-2xs font-mono uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-border to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

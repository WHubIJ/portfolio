import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { HiExternalLink, HiChevronDown, HiLockClosed, HiCode } from 'react-icons/hi'
import type { Project } from '@/types'
import { scaleIn } from '@/lib/animations'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      variants={scaleIn}
      custom={index}
      className="card-base overflow-hidden group hover:border-primary/30 transition-colors duration-300 flex flex-col"
    >
      {/* Image placeholder */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: project.imagePlaceholder + '15' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `radial-gradient(ellipse at center, ${project.imagePlaceholder}20 0%, transparent 70%)` }}
        >
          <span
            className="text-5xl font-display font-bold opacity-20"
            style={{ color: project.imagePlaceholder }}
          >
            {project.title.charAt(0)}
          </span>
        </div>
        {(project.isEnterprise || project.isBuilding) && (
          <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
            {project.isEnterprise && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-background/80 backdrop-blur border border-border text-text-muted">
                <HiLockClosed size={10} />
                Enterprise
              </span>
            )}
            {project.isBuilding && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-primary/10 backdrop-blur border border-primary/30 text-primary">
                <HiCode size={10} />
                Building
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-text group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{project.description}</p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Features list */}
        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-text-subtle">
              <span className="text-primary mt-0.5 shrink-0">›</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1 text-xs font-mono text-text-subtle hover:text-primary transition-colors"
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiChevronDown size={14} />
          </motion.span>
          {expanded ? 'Hide details' : 'Challenges & learnings'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-3 pt-3 border-t border-border-subtle">
                <div>
                  <p className="text-2xs font-mono text-primary uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-xs text-text-muted leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <p className="text-2xs font-mono text-accent uppercase tracking-wider mb-1">Learnings</p>
                  <p className="text-xs text-text-muted leading-relaxed">{project.learnings}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border-subtle">
          {project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2 px-4"
            >
              <SiGithub size={13} />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border/50 text-xs text-text-subtle font-display cursor-not-allowed">
              <HiLockClosed size={11} />
              Private repo
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <HiExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

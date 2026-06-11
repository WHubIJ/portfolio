import { motion } from 'framer-motion'
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { fadeUp, staggerContainer, slideInLeft } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { EXPERIENCE, SOCIAL_LINKS } from '@/lib/data'

export default function ExperiencePage() {
  return (
    <div className="pt-24 section-padding">
      <div className="section-container max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          description="Professional experience building real-world software in production environments."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {EXPERIENCE.map((exp) => (
              <motion.div key={exp.id} variants={slideInLeft} className="relative pl-16">
                {/* Icon dot */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center shadow-card">
                  <HiBriefcase className="text-primary" size={18} />
                </div>

                {/* Card */}
                <div className="card-base p-6 hover:border-primary/30 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-text">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-display font-medium text-primary">{exp.company}</span>
                        <span className="text-text-subtle">·</span>
                        <span className="text-sm text-text-muted">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="tag">{exp.period}</span>
                      <span className="text-xs font-mono text-accent capitalize">{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-5">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Responsibilities</h4>
                    <motion.ul
                      variants={staggerContainer}
                      className="grid sm:grid-cols-2 gap-2"
                    >
                      {exp.responsibilities.map((r) => (
                        <motion.li
                          key={r}
                          variants={fadeUp}
                          className="flex items-start gap-2.5 text-sm text-text-muted"
                        >
                          <HiCheckCircle className="text-accent mt-0.5 shrink-0" size={14} />
                          {r}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div variants={slideInLeft} className="relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center shadow-card">
                <span className="text-primary text-lg font-display font-bold">D</span>
              </div>
              <div className="card-base p-6 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-text">
                      DAM — Multiplatform Application Development
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-display font-medium text-accent">University / CFGS</span>
                    </div>
                  </div>
                  <span className="tag">2022–2024</span>
                </div>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Degree covering full-stack development, databases, mobile development, and software architecture. Foundation for real-world engineering practice.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaLinkedin size={16} />
            Full profile on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  )
}

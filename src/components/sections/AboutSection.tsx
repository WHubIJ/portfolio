import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { fadeUp, staggerContainer, scaleIn } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'

const HIGHLIGHTS = [
  'DAM Graduate (Multiplatform Application Development)',
  'Real production experience at a corporate company',
  'Full development lifecycle: frontend to backend',
  'API design, Azure Cloud, Docker & DevOps',
  'Cross-functional Agile team collaboration',
  'Continuous learner, always shipping',
]

const STATS = [
  { value: '2+', label: 'Technologies\nmastered', accent: 'primary' },
  { value: '4+', label: 'Production\nprojects', accent: 'accent' },
  { value: '1', label: 'Corporate\ninternship', accent: 'primary' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface/20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <SectionHeader
              label="About Me"
              title="Entry-level engineer with real-world impact."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
                I'm Wisdom Isibor, a Full Stack Developer who graduated with a DAM degree and then took that knowledge into a real production environment. During my internship at{' '}
                <span className="text-text font-medium">VIVA Hotels</span>, I built and shipped features used by the business every day — not toy projects, but actual enterprise software.
              </motion.p>
              <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
                My technical reach spans the full stack: from crafting polished interfaces in{' '}
                <span className="text-text font-medium">React and TypeScript</span>, to architecting backend services in{' '}
                <span className="text-text font-medium">ASP.NET Core and Spring Boot</span>, to deploying on{' '}
                <span className="text-text font-medium">Azure</span> with Docker. I care about code quality, clear APIs, and solutions that don't just work on day one.
              </motion.p>
              <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
                I thrive in cross-functional teams and English-speaking environments. I bring an engineer's mindset to every feature: understand the problem, design cleanly, ship with confidence.
              </motion.p>

              {/* Highlights */}
              <motion.ul variants={staggerContainer} className="mt-6 space-y-2.5">
                {HIGHLIGHTS.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <HiCheckCircle className="text-accent mt-0.5 shrink-0" size={16} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Right — stats card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label }) => (
                <motion.div
                  key={value}
                  variants={scaleIn}
                  className="card-base p-5 text-center group hover:border-primary/40 transition-colors duration-200"
                >
                  <div className="text-3xl font-display font-bold gradient-text">{value}</div>
                  <div className="mt-1 text-xs text-text-subtle font-mono whitespace-pre-line leading-relaxed">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience card */}
            <motion.div
              variants={fadeUp}
              className="card-base p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
                  — Professional Experience
                </div>
                <div className="font-display font-semibold text-text">Full Stack Developer Intern</div>
                <div className="text-sm text-text-muted mt-0.5">VIVA Hotels · 2024</div>
                <div className="mt-3 text-sm text-text-muted leading-relaxed">
                  Contributed to a live corporate product in a professional cross-functional team, covering the full stack end-to-end.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'ASP.NET Core', 'Azure'].map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <span className="section-label">
        <span className="w-4 h-px bg-primary" />
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg text-text-muted leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

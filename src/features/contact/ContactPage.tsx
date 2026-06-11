import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiUser, HiChat, HiPaperAirplane } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { SOCIAL_LINKS } from '@/lib/data'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' }

const CONTACT_LINKS = [
  {
    icon: HiMail,
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    color: '#6C63FF',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'wisdom-imade-a0b0bb36b',
    href: SOCIAL_LINKS.linkedin,
    color: '#0A66C2',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'WHubIJ',
    href: SOCIAL_LINKS.github,
    color: '#F0EFF8',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending — integrate with your preferred service (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('sent')
    setForm(INITIAL_FORM)
  }

  return (
    <div className="pt-24 section-padding">
      <div className="section-container max-w-5xl">
        <SectionHeader
          label="Contact"
          title="Let's build something."
          description="I'm open to Frontend, Backend, and Full Stack opportunities. Reach out and let's talk."
          centered
        />

        <div className="flex justify-center">
          {/* Left — contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-md space-y-4"
          >
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-base hover:border-primary/40 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color + '15' }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-subtle uppercase tracking-wider">{label}</div>
                  <div className="text-sm text-text-muted group-hover:text-text transition-colors truncate mt-0.5">
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability status */}
            <motion.div
              variants={fadeUp}
              className="p-4 card-base border-accent/20 bg-accent/5"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
                Currently available
              </div>
              <p className="mt-2 text-sm text-text-muted">
                Open to full-time and contract positions. Response within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

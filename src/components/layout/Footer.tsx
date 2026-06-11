import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/30 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display font-bold text-lg">
              <span className="text-text">Wisdom</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-1.5 text-sm text-text-subtle max-w-xs">
              Full Stack Developer. Building web applications from frontend to backend.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-text-muted hover:text-text transition-colors font-display"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-primary/50 transition-all"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-primary/50 transition-all"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email"
              className="p-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-primary/50 transition-all"
            >
              <HiMail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-subtle font-mono">
          <p>© {year} Wisdom Imade Isibor. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

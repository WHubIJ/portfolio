import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_ITEMS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-lg tracking-tight group">
          <span className="text-text">Wisdom</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-colors duration-150 ${
                    active ? 'text-text' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-surface-2 border border-border rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="/src/assets/CV_Wisdom_Isibor_FullStack_Junior.pdf"
          download
          className="hidden md:inline-flex btn-primary text-sm py-2"
        >
          Download CV
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-text transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-display font-medium transition-colors ${
                        active
                          ? 'bg-surface-2 text-text'
                          : 'text-text-muted hover:text-text hover:bg-surface-2'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <a href="/src/assets/CV_Wisdom_Isibor_FullStack_Junior.pdf" download className="btn-primary w-full justify-center text-sm py-2.5">
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

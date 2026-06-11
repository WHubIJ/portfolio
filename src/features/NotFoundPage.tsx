import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center px-4"
      >
        <motion.div
          variants={fadeUp}
          className="text-[10rem] font-display font-bold leading-none gradient-text opacity-20 select-none"
        >
          404
        </motion.div>
        <motion.h1 variants={fadeUp} className="mt-4 text-2xl font-display font-semibold text-text">
          Page not found
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-text-muted max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

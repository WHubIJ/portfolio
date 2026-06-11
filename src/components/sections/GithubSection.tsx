import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { SOCIAL_LINKS } from '@/lib/data'

const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'

export default function GithubSection() {
  return (
    <section id="github" className="section-padding bg-surface/20">
      <div className="section-container">
        <SectionHeader
          label="Open Source"
          title="Code I've shipped."
          description="A snapshot of my GitHub activity and the languages I work with day-to-day."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Stats card */}
          <motion.div variants={fadeUp} className="w-full max-w-2xl">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=6C63FF&icon_color=00D4A4&text_color=8888AA&bg_color=00000000&rank_icon=github`}
              alt="GitHub Stats"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Languages */}
          <motion.div variants={fadeUp} className="w-full max-w-sm">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=6C63FF&text_color=8888AA&bg_color=00000000&langs_count=8`}
              alt="Most Used Languages"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Streak */}
          <motion.div variants={fadeUp} className="w-full max-w-2xl">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&stroke=2A2A38&ring=6C63FF&fire=00D4A4&currStreakLabel=8888AA&sideLabels=8888AA&dates=555570&background=00000000`}
              alt="GitHub Streak"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-2"
          >
            <SiGithub size={16} />
            View full profile on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

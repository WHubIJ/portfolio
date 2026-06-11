import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <div className="pt-24 section-padding">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Things I've built."
          description="A mix of personal projects and professional enterprise work — each one a chance to go deeper on a problem."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

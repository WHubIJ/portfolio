import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiJavascript, SiVuedotjs, SiFlutter,
  SiHtml5, SiCss, SiTailwindcss,
  SiDotnet, SiSpring,
  SiMysql, SiFirebase,
  SiDocker, SiGit, SiGithub, SiLinux,
} from 'react-icons/si'
import {
  FaJava, FaDatabase, FaCloud,
} from 'react-icons/fa'
import { TbApi, TbBrandCSharp, TbBrandAzure } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import { staggerContainer, scaleIn, fadeUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#6C63FF',
  Backend: '#00D4A4',
  Databases: '#F59E0B',
  'Cloud & DevOps': '#EC4899',
}

interface SkillItem {
  name: string
  Icon: IconType
}

const SKILL_CATEGORIES: { name: string; skills: SkillItem[] }[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'Vue', Icon: SiVuedotjs },
      { name: 'Flutter', Icon: SiFlutter },
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'ASP.NET Core', Icon: SiDotnet },
      { name: 'C#', Icon: TbBrandCSharp },
      { name: 'Java', Icon: FaJava },
      { name: 'Spring Boot', Icon: SiSpring },
      { name: 'REST APIs', Icon: TbApi },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'SQL Server', Icon: FaDatabase },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Firebase', Icon: SiFirebase },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', Icon: TbBrandAzure },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Cloud', Icon: FaCloud },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="A modern full-stack toolkit."
          description="Technologies I've used to build production software — from polished UIs to scalable backend services."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => {
            const accentColor = CATEGORY_COLORS[category.name] ?? '#6C63FF'
            return (
              <motion.div
                key={category.name}
                variants={scaleIn}
                className="card-base p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1 h-5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  <h3 className="font-display font-semibold text-text">{category.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map(({ name, Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-surface-3 border border-border-subtle hover:border-border transition-all duration-150 cursor-default"
                    >
                      <Icon
                        size={15}
                        className="shrink-0"
                        style={{ color: accentColor, opacity: 0.85 }}
                      />
                      <span className="text-sm text-text-muted font-display truncate">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-text-subtle font-mono"
        >
          + continuously adding new technologies
        </motion.p>
      </div>
    </section>
  )
}

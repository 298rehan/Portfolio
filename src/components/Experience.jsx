import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react'

const Experience = ({ theme }) => {
  const [expandedItem, setExpandedItem] = useState(null)
  const isDark = theme === 'dark'

  const experiences = [
    {
      id: 1,
      type: 'training',
      title: 'DevOps Program',
      organization: 'Techzeen',
      period: 'Jun 2026 - Jan 2027',
      icon: Briefcase,
      details: [
        'Linux administration and system operations',
        'Git and GitHub workflows for version control',
        'Docker containerization basics',
        'Cloud computing fundamentals',
        'Networking concepts',
        'CI/CD pipelines and automation'
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Intermediate in Computer Science',
      organization: 'Karachi',
      period: '2024 - 2026',
      icon: GraduationCap,
      details: [
        'Currently pursuing Intermediate in Computer Science',
        'Programming fundamentals and computer concepts'
      ]
    },
    {
      id: 3,
      type: 'education',
      title: 'Matriculation in Computer Science',
      organization: 'Saeeda Academy | Karachi Board',
      period: '2023 - 2024',
      icon: GraduationCap,
      details: [
        'Completed with Grade A',
        'Specialized in Computer Science',
        'Foundation in programming and computer concepts'
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-zinc-900'
        }`}>Experience</h2>
        <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'}>
          My journey in technology and continuous learning
        </p>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const Icon = exp.icon
          const isExpanded = expandedItem === exp.id

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`p-5 backdrop-blur-md rounded-2xl border transition-all ${
                isDark
                  ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/[0.12]'
                  : 'bg-white/60 border-zinc-200 hover:border-zinc-300'
              }`}>
                <button
                  onClick={() => setExpandedItem(isExpanded ? null : exp.id)}
                  className="w-full flex items-start gap-4 text-left"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    exp.type === 'training' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`text-base font-semibold mb-1 ${
                          isDark ? 'text-white' : 'text-zinc-900'
                        }`}>{exp.title}</h3>
                        <p className={`text-sm mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                          {exp.organization}
                        </p>
                        <p className={`text-xs font-medium ${isDark ? 'text-zinc-600' : 'text-zinc-500'}`}>
                          {exp.period}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={18} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                      </motion.div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2">
                        <ul className="space-y-2">
                          {exp.details.map((detail, idx) => (
                            <li key={idx} className={`flex items-start gap-2 text-sm ${
                              isDark ? 'text-zinc-400' : 'text-zinc-600'
                            }`}>
                              <span className={`w-1 h-1 mt-2 flex-shrink-0 rounded-full ${
                                isDark ? 'bg-zinc-500' : 'bg-zinc-400'
                              }`} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience

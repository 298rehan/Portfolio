import { motion } from 'framer-motion'

const Skills = ({ theme }) => {
  const isDark = theme === 'dark'

  const skills = [
    { name: 'Linux', level: 75, category: 'OS' },
    { name: 'Git', level: 80, category: 'VCS' },
    { name: 'GitHub', level: 75, category: 'VCS' },
    { name: 'Docker', level: 60, category: 'Containers' },
    { name: 'Cloud Computing', level: 65, category: 'Cloud' },
    { name: 'Networking', level: 60, category: 'Cloud' },
    { name: 'CI/CD', level: 55, category: 'DevOps' },
    { name: 'Microsoft Office', level: 85, category: 'Tools' },
    { name: 'Technical Troubleshooting', level: 70, category: 'Tools' },
  ]

  const categories = ['OS', 'VCS', 'Containers', 'Cloud', 'DevOps', 'Tools']

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-zinc-900'
        }`}>Skills</h2>
        <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'}>
          Technical skills and tools I work with
        </p>
      </motion.div>

      {categories.map((category, catIndex) => {
        const categorySkills = skills.filter(s => s.category === category)

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="space-y-3"
          >
            <h3 className={`text-xs font-semibold tracking-wide uppercase ${
              isDark ? 'text-zinc-500' : 'text-zinc-600'
            }`}>{category}</h3>
            <div className="space-y-3">
              {categorySkills.map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-zinc-600' : 'text-zinc-500'
                    }`}>{skill.level}%</span>
                  </div>
                  <div className={`h-1.5 rounded-full overflow-hidden ${
                    isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`p-5 backdrop-blur-md rounded-2xl border ${
          isDark ? 'bg-zinc-900/40 border-white/[0.08]' : 'bg-white/60 border-zinc-200'
        }`}
      >
        <h3 className={`text-xs font-semibold tracking-wide uppercase mb-4 ${
          isDark ? 'text-zinc-500' : 'text-zinc-600'
        }`}>Languages</h3>
        <div className="flex flex-wrap gap-2">
          {['Urdu', 'English'].map((lang, idx) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                isDark
                  ? 'bg-white/[0.05] text-zinc-300 border-white/[0.08]'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200'
              }`}
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Skills

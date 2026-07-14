import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const isDark = theme === 'dark'

  const filters = ['All', 'DevOps', 'Frontend', 'Full-Stack']

  const projects = [
    {
      id: 1,
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline using GitHub Actions for CI/CD.',
      category: 'DevOps',
      span: 'col-span-1',
      tech: ['GitHub Actions', 'Docker', 'Shell'],
      github: 'https://github.com/298rehan',
      demo: '#'
    },
    {
      id: 2,
      title: 'Docker Setup',
      description: 'Containerized web application with multi-stage builds.',
      category: 'DevOps',
      span: 'col-span-1',
      tech: ['Docker', 'Compose', 'Nginx'],
      github: 'https://github.com/298rehan',
      demo: '#'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'Modern portfolio with React, TailwindCSS, and Framer Motion animations.',
      category: 'Frontend',
      span: 'col-span-1 lg:col-span-2',
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/298rehan',
      demo: '#'
    },
    {
      id: 4,
      title: 'Linux Server',
      description: 'Automated server configuration using shell scripts.',
      category: 'DevOps',
      span: 'col-span-1',
      tech: ['Linux', 'Bash', 'Admin'],
      github: 'https://github.com/298rehan',
      demo: '#'
    },
    {
      id: 5,
      title: 'Task Manager',
      description: 'Full-stack app with real-time updates and authentication.',
      category: 'Full-Stack',
      span: 'col-span-1 lg:col-span-2',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/298rehan',
      demo: '#'
    },
    {
      id: 6,
      title: 'Git Automation',
      description: 'Custom Git hooks and scripts for development workflows.',
      category: 'DevOps',
      span: 'col-span-1',
      tech: ['Git', 'Bash', 'Hooks'],
      github: 'https://github.com/298rehan',
      demo: '#'
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-zinc-900'
        }`}>Projects</h2>
        <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'}>
          A showcase of my technical work and experiments
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === filter
                ? isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'
                : isDark
                  ? 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-zinc-300'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`${project.span} group p-5 backdrop-blur-md rounded-2xl border transition-all relative overflow-hidden ${
                isDark
                  ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/[0.12] hover:shadow-lg hover:shadow-black/20'
                  : 'bg-white/60 border-zinc-200 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50'
              }`}
            >
              <div className="relative z-10">
                <h3 className={`text-base font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>{project.title}</h3>
                <p className={`text-sm mb-4 line-clamp-2 ${
                  isDark ? 'text-zinc-500' : 'text-zinc-600'
                }`}>{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium border ${
                        isDark
                          ? 'bg-white/[0.05] text-zinc-400 border-white/[0.06]'
                          : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors border ${
                      isDark
                        ? 'bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white border-white/[0.08]'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border-zinc-200'
                    }`}
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg text-xs text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Projects

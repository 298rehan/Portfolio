import { motion } from 'framer-motion'
import { TrendingUp, Code2, Zap, Rocket } from 'lucide-react'

const Overview = ({ theme }) => {
  const stats = [
    { icon: TrendingUp, label: 'Years Experience', value: '1+', accent: 'indigo' },
    { icon: Code2, label: 'Projects', value: '5+', accent: 'violet' },
    { icon: Zap, label: 'Technologies', value: '8+', accent: 'emerald' },
    { icon: Rocket, label: 'Status', value: 'Available', accent: 'amber' },
  ]

  const strengths = ['Problem Solving', 'Teamwork', 'Time Management', 'Quick Learner', 'Continuous Learning']
  const interests = ['Open-source', 'Home Lab', 'Tech Blogging', 'Learning']

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className={`text-5xl lg:text-7xl font-bold tracking-tight ${
          theme === 'dark' ? 'text-white' : 'text-zinc-900'
        }`}>
          Building the future of{' '}
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
            theme === 'dark' ? 'from-white via-zinc-200 to-zinc-500' : 'from-zinc-900 via-zinc-700 to-zinc-500'
          }`}>
            DevOps
          </span>
        </h1>
        
        <p className={`text-lg leading-relaxed max-w-3xl ${
          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          Motivated Computer Science student completing an eight-month DevOps program at Techzeen. 
          Developing practical knowledge of Linux, Git, Docker, cloud fundamentals, networking, and CI/CD concepts.
        </p>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className={`text-sm font-medium ${
            theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
          }`}>Open to DevOps internship opportunities</span>
        </div>
      </motion.div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const accentColors = {
            indigo: 'text-indigo-400',
            violet: 'text-violet-400',
            emerald: 'text-emerald-400',
            amber: 'text-amber-400'
          }
          
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group p-4 backdrop-blur-md rounded-2xl border hover:shadow-lg hover:shadow-black/20 transition-all ${
                theme === 'dark' 
                  ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/[0.12]' 
                  : 'bg-white/60 border-zinc-200 hover:border-zinc-300 hover:shadow-zinc-200'
              }`}
            >
              <Icon size={20} className={`mb-2 ${accentColors[stat.accent]}`} />
              <div className={`text-2xl font-bold mb-0.5 ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>{stat.value}</div>
              <div className={`text-xs font-medium ${
                theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
              }`}>{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className={`p-6 backdrop-blur-md rounded-2xl border transition-all ${
            theme === 'dark' 
              ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/[0.12]' 
              : 'bg-white/60 border-zinc-200 hover:border-zinc-300'
          }`}
        >
          <h3 className={`text-sm font-semibold mb-4 tracking-wide uppercase ${
            theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>Core Strengths</h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <span
                key={strength}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/[0.05] text-zinc-300 border-white/[0.08] hover:border-white/[0.12]' 
                    : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className={`p-6 backdrop-blur-md rounded-2xl border transition-all ${
            theme === 'dark' 
              ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/[0.12]' 
              : 'bg-white/60 border-zinc-200 hover:border-zinc-300'
          }`}
        >
          <h3 className={`text-sm font-semibold mb-4 tracking-wide uppercase ${
            theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white/[0.05] text-zinc-300 border-white/[0.08] hover:border-white/[0.12]' 
                    : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overview

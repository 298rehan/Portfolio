import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const Sidebar = ({ tabs, activeTab, setActiveTab, theme }) => {
  return (
    <div className="flex flex-col h-full p-5">
      {/* Profile Card */}
      <div className={`mb-8 p-4 backdrop-blur-md rounded-2xl border ${
        theme === 'dark' 
          ? 'bg-zinc-800/30 border-white/[0.08]' 
          : 'bg-zinc-100/50 border-zinc-200'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
              <User size={22} className="text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 ${
                theme === 'dark' ? 'border-[#030303]' : 'border-white'
              }`}></span>
            </span>
          </div>
          <div>
            <h3 className={`font-semibold text-sm tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}>Rehan Jameel</h3>
            <p className={`text-xs font-medium ${
              theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
            }`}>DevOps Engineer</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all relative ${
                isActive
                  ? theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  : theme === 'dark' 
                    ? 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-lg ${
                    theme === 'dark' ? 'bg-white/[0.08]' : 'bg-zinc-200'
                  }`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={18} className="relative z-10" />
              <span className="text-sm font-medium relative z-10 tracking-tight">{tab.label}</span>
            </motion.button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className={`pt-4 border-t ${
        theme === 'dark' ? 'border-white/[0.06]' : 'border-zinc-200'
      }`}>
        <p className={`text-[10px] font-medium tracking-wide uppercase ${
          theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          © 2024
        </p>
      </div>
    </div>
  )
}

export default Sidebar

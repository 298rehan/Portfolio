import { motion } from 'framer-motion'
import { Sun, Moon, Download, Menu, X } from 'lucide-react'

const RESUME_URL = `${import.meta.env.BASE_URL}Rehan_Jameel_DevOps_CV.pdf`

const Header = ({
  theme,
  toggleTheme,
  tabs,
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const isDark = theme === 'dark'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${
          isDark
            ? 'border-white/[0.08] bg-zinc-900/70'
            : 'border-zinc-200 bg-white/80'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          {/* Logo */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <span className="text-sm font-bold text-white">RJ</span>
            </div>
            <div className="hidden sm:block">
              <span className={`block text-sm font-semibold tracking-tight ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                Rehan Jameel
              </span>
              <span className="text-[11px] font-medium text-zinc-500">DevOps Engineer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-white/[0.08] text-white'
                        : 'bg-zinc-200 text-zinc-900'
                      : isDark
                        ? 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <motion.a
              href={RESUME_URL}
              download="Rehan_Jameel_DevOps_CV.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:from-indigo-600 hover:to-violet-700 sm:px-4"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`rounded-xl border p-2.5 transition-colors ${
                isDark
                  ? 'border-white/[0.08] bg-white/[0.05] hover:bg-white/[0.1]'
                  : 'border-zinc-200 bg-zinc-100 hover:bg-zinc-200'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-indigo-600" />
              )}
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-xl border p-2.5 transition-colors lg:hidden ${
                isDark
                  ? 'border-white/[0.08] bg-white/[0.05] hover:bg-white/[0.1]'
                  : 'border-zinc-200 bg-zinc-100 hover:bg-zinc-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={18} className={isDark ? 'text-zinc-300' : 'text-zinc-700'} />
              ) : (
                <Menu size={18} className={isDark ? 'text-zinc-300' : 'text-zinc-700'} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`fixed inset-x-0 top-[4.25rem] z-40 border-b px-4 py-4 backdrop-blur-xl lg:hidden ${
            isDark
              ? 'border-white/[0.08] bg-zinc-900/95'
              : 'border-zinc-200 bg-white/95'
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-white/[0.08] text-white'
                        : 'bg-zinc-200 text-zinc-900'
                      : isDark
                        ? 'text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </motion.div>
      )}
    </>
  )
}

export default Header

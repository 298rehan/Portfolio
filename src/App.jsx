import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Briefcase, FolderKanban, Brain, Mail } from 'lucide-react'
import Header from './components/Header'
import Overview from './components/Overview'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')
    document.documentElement.classList.toggle('dark', savedTheme !== 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
    document.documentElement.classList.toggle('dark', newTheme !== 'light')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const renderTab = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview theme={theme} />
      case 'experience':
        return <Experience theme={theme} />
      case 'projects':
        return <Projects theme={theme} />
      case 'skills':
        return <Skills theme={theme} />
      case 'contact':
        return <Contact theme={theme} />
      default:
        return <Overview theme={theme} />
    }
  }

  return (
    <div className={`relative flex h-screen w-full flex-col overflow-hidden font-sans ${
      theme === 'dark' ? 'bg-[#030303] text-zinc-100' : 'bg-white text-zinc-900'
    }`}>
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#030303] to-[#0B0F19]" />
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/5 blur-[120px]" />
            <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/3 blur-[150px]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-50" />
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
          </>
        )}
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Header with desktop nav */}
      <div className="relative z-50 shrink-0">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>

      {/* Centered main content */}
      <main className="relative z-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="scrollbar-thin mx-auto h-full w-full max-w-7xl overflow-y-auto px-4 py-8 sm:px-6 lg:px-10"
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Contact = ({ theme }) => {
  const isDark = theme === 'dark'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! This is a demo form.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/298rehan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rehan-jameel-71493b2b1' },
    { icon: Mail, label: 'Email', href: 'mailto:rehanjameel298@gmail.com' },
  ]

  const cardClass = isDark
    ? 'bg-zinc-900/40 border-white/[0.08]'
    : 'bg-white/60 border-zinc-200'

  const inputClass = isDark
    ? 'bg-zinc-800/50 border-white/[0.08] text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:ring-indigo-500/20'
    : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-indigo-500/50 focus:ring-indigo-500/20'

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-zinc-900'
        }`}>Contact</h2>
        <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'}>
          Feel free to reach out for opportunities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-6 backdrop-blur-md rounded-2xl border ${cardClass}`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-xs font-medium mb-2 ${
                isDark ? 'text-zinc-500' : 'text-zinc-600'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all text-sm ${inputClass}`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-xs font-medium mb-2 ${
                isDark ? 'text-zinc-500' : 'text-zinc-600'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all text-sm ${inputClass}`}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-xs font-medium mb-2 ${
                isDark ? 'text-zinc-500' : 'text-zinc-600'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all resize-none text-sm ${inputClass}`}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className={`w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isDark
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800'
              }`}
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className={`p-5 backdrop-blur-md rounded-2xl border ${cardClass}`}>
            <h3 className={`text-xs font-semibold tracking-wide uppercase mb-4 ${
              isDark ? 'text-zinc-500' : 'text-zinc-600'
            }`}>Connect</h3>
            <div className="space-y-2">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-white/[0.03] hover:bg-white/[0.06] text-zinc-400 hover:text-white'
                        : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className={`p-5 backdrop-blur-md rounded-2xl border ${cardClass}`}>
            <h3 className={`text-xs font-semibold tracking-wide uppercase mb-4 ${
              isDark ? 'text-zinc-500' : 'text-zinc-600'
            }`}>Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className={`mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`} />
                <p className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  North Karachi, Karachi
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className={`mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`} />
                <p className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  0320-1292851
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className={`mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-zinc-500' : 'text-zinc-400'
                }`} />
                <p className={`text-sm ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  rehanjameel298@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className={`p-4 backdrop-blur-md rounded-2xl border ${
            isDark ? 'bg-emerald-900/20 border-emerald-800/30' : 'bg-emerald-50 border-emerald-200'
          }`}>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-emerald-800'
              }`}>Available for opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

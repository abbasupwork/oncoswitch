'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import OncoSwitchLogo from '@/components/OncoSwitchLogo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>('en')

  // const t = getTranslations(language)

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const navigationItems = [
    { name: language === 'ru' ? 'Главная' : 'Home', href: '/' },
    { name: language === 'ru' ? 'Демо' : 'Demo', href: '/demo' },
    { 
      name: language === 'ru' ? 'Продукт' : 'Product', 
      href: '#',
      dropdown: [
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Sequence Designer', href: '/designer' },
        { name: 'AI Chat', href: '/chat' },
        { name: 'Switch Library', href: '/library' },
        { name: 'Experiment Tracker', href: '/experiments' },
        { name: 'Analytics', href: '/analytics' }
      ]
    },
    { name: language === 'ru' ? 'О нас' : 'About', href: '/about' },
    { name: language === 'ru' ? 'Контакты' : 'Contact', href: '/contact' }
  ]

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="relative z-50 border-b border-white/20 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <OncoSwitchLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              {language === 'ru' ? 'Войти' : 'Login'}
            </Button>
            <Button variant="gradient" size="sm">
              {language === 'ru' ? 'Начать бесплатно' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-purple-600 transition-colors"
                        >
                          {item.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="px-4 pt-4 space-y-2 border-t border-gray-200">
                  <Button variant="outline" size="sm" className="w-full">
                    {language === 'ru' ? 'Войти' : 'Login'}
                  </Button>
                  <Button variant="gradient" size="sm" className="w-full">
                    {language === 'ru' ? 'Начать бесплатно' : 'Get Started'}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation

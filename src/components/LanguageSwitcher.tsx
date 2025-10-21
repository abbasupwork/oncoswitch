'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { Language, getCurrentLanguage, setLanguage } from '@/lib/i18n'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<Language>('ru')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setCurrentLang(getCurrentLanguage())
  }, [])

  const handleLanguageChange = useCallback((lang: Language) => {
    setCurrentLang(lang)
    setLanguage(lang)
    setIsOpen(false)
  }, [])

  const languages = [
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ]

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === currentLang)?.flag}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
        >
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150"
              whileHover={{ backgroundColor: '#f9fafb' }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium text-gray-900">
                  {language.name}
                </span>
              </div>
              {currentLang === language.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4 text-primary-600" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
        />
      )}
    </div>
  )
}

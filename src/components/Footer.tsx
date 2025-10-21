'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import OncoSwitchLogo from '@/components/OncoSwitchLogo'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  // const t = getTranslations(language)

  const footerSections = [
    {
      title: language === 'ru' ? 'Продукт' : 'Product',
      links: [
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Demo', href: '/demo' },
        { name: 'Sequence Designer', href: '/designer' },
        { name: 'AI Chat', href: '/chat' },
        { name: 'Switch Library', href: '/library' },
        { name: 'Experiment Tracker', href: '/experiments' },
        { name: 'Analytics', href: '/analytics' }
      ]
    },
    {
      title: language === 'ru' ? 'Компания' : 'Company',
      links: [
        { name: language === 'ru' ? 'О нас' : 'About', href: '/about' },
        { name: language === 'ru' ? 'Команда' : 'Team', href: '/team' },
        { name: language === 'ru' ? 'Карьера' : 'Careers', href: '/careers' },
        { name: language === 'ru' ? 'Партнеры' : 'Partners', href: '/partners' },
        { name: language === 'ru' ? 'Пресса' : 'Press', href: '/press' }
      ]
    },
    {
      title: language === 'ru' ? 'Ресурсы' : 'Resources',
      links: [
        { name: language === 'ru' ? 'Документация' : 'Documentation', href: '/docs' },
        { name: 'API', href: '/api' },
        { name: language === 'ru' ? 'Блог' : 'Blog', href: '/blog' },
        { name: language === 'ru' ? 'Поддержка' : 'Support', href: '/support' },
        { name: language === 'ru' ? 'Сообщество' : 'Community', href: '/community' }
      ]
    },
    {
      title: language === 'ru' ? 'Правовая информация' : 'Legal',
      links: [
        { name: language === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy', href: '/privacy' },
        { name: language === 'ru' ? 'Условия использования' : 'Terms of Service', href: '/terms' },
        { name: 'Licenses', href: '/licenses' },
        { name: 'Security', href: '/security' }
      ]
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/oncoswitch',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/oncoswitch',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/oncoswitch',
      icon: Github,
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      href: 'mailto:contact@oncoswitch.ai',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'contact@oncoswitch.ai',
      href: 'mailto:contact@oncoswitch.ai'
    },
    {
      icon: Phone,
      text: '+971 4 123 4567',
      href: 'tel:+97141234567'
    },
    {
      icon: MapPin,
      text: 'Dubai International Financial Centre, Dubai, UAE',
      href: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <OncoSwitchLogo size="md" className="mb-6" />
            <p className="text-gray-300 mb-6 max-w-md">
              {language === 'ru' 
                ? 'Революционная AI-платформа для дизайна ДНК-переключателей. Новое поколение персонализированной генной терапии.'
                : 'Revolutionary AI platform for DNA switch design. Next generation personalized gene therapy.'
              }
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                {language === 'ru' ? 'Подпишитесь на обновления' : 'Subscribe to Updates'}
              </h3>
              <p className="text-gray-300 text-sm">
                {language === 'ru' ? 'Получайте последние новости о развитии OncoSwitch' : 'Get the latest news about OncoSwitch development'}
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder={language === 'ru' ? 'Ваш email' : 'Your email'}
                className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <Button 
                variant="gradient" 
                size="sm" 
                className="rounded-l-none"
              >
                {language === 'ru' ? 'Подписаться' : 'Subscribe'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} OncoSwitch. {language === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {language === 'ru' ? 'Политика конфиденциальности' : 'Privacy'}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {language === 'ru' ? 'Условия использования' : 'Terms'}
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                {language === 'ru' ? 'Cookies' : 'Cookies'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

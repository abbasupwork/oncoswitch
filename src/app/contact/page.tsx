'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Contact() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Симуляция отправки формы
    setTimeout(() => {
      setIsSubmitting(false)
      alert(language === 'ru' 
        ? 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.' 
        : 'Message sent! We will contact you soon.'
      )
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'ru' ? 'Email' : 'Email',
      details: ['contact@oncoswitch.ai', 'support@oncoswitch.ai'],
      description: language === 'ru' ? 'Отправьте нам сообщение в любое время' : 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: language === 'ru' ? 'Телефон' : 'Phone',
      details: ['+971 4 123 4567', '+971 4 123 4568'],
      description: language === 'ru' ? 'Вс-Чт: 9:00 - 18:00 (GST)' : 'Sun-Thu: 9:00 - 18:00 (GST)'
    },
    {
      icon: MapPin,
      title: language === 'ru' ? 'Адрес' : 'Address',
      details: ['Dubai International Financial Centre', 'Dubai, UAE', 'United Arab Emirates'],
      description: language === 'ru' ? 'Наш главный офис в Дубае' : 'Our main office in Dubai'
    },
    {
      icon: Clock,
      title: language === 'ru' ? 'Часы работы' : 'Working Hours',
      details: language === 'ru' ? ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: 10:00 - 16:00'] : ['Mon-Fri: 9:00 - 18:00', 'Sat-Sun: 10:00 - 16:00'],
      description: language === 'ru' ? 'Время работы службы поддержки' : 'Customer support hours'
    }
  ]

  const departments = [
    {
      icon: MessageSquare,
      title: language === 'ru' ? 'Общие вопросы' : 'General Inquiries',
      email: 'info@oncoswitch.ai',
      description: language === 'ru' ? 'Общая информация о продукте и услугах' : 'General information about products and services'
    },
    {
      icon: Users,
      title: language === 'ru' ? 'Партнерство' : 'Partnerships',
      email: 'partnerships@oncoswitch.ai',
      description: language === 'ru' ? 'Сотрудничество и партнерские программы' : 'Collaboration and partnership programs'
    },
    {
      icon: Globe,
      title: language === 'ru' ? 'Пресса' : 'Press',
      email: 'press@oncoswitch.ai',
      description: language === 'ru' ? 'Медиа-запросы и пресс-релизы' : 'Media inquiries and press releases'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Navigation />

      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Назад к главной' : 'Back to Home'}
            </Link>
            
            <Badge variant="gradient" className="mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Свяжитесь с нами' : 'Contact Us'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'Контакты' : 'Contact'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Готовы начать работу с OncoSwitch? Свяжитесь с нами любым удобным способом'
                : 'Ready to start working with OncoSwitch? Contact us in any convenient way'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">{language === 'ru' ? 'Отправить сообщение' : 'Send Message'}</CardTitle>
                  <CardDescription>
                    {language === 'ru' ? 'Заполните форму, и мы свяжемся с вами в течение 24 часов' : 'Fill out the form and we will contact you within 24 hours'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label={language === 'ru' ? 'Имя *' : 'Name *'}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={language === 'ru' ? 'Ваше имя' : 'Your name'}
                      />
                      <Input
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <Input
                      label={language === 'ru' ? 'Компания' : 'Company'}
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={language === 'ru' ? 'Название компании' : 'Company name'}
                    />
                    
                    <Input
                      label={language === 'ru' ? 'Тема *' : 'Subject *'}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={language === 'ru' ? 'Тема сообщения' : 'Message subject'}
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ru' ? 'Сообщение *' : 'Message *'}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        placeholder={language === 'ru' ? 'Расскажите нам о вашем проекте или вопросе...' : 'Tell us about your project or question...'}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting 
                        ? (language === 'ru' ? 'Отправляем...' : 'Sending...') 
                        : (language === 'ru' ? 'Отправить сообщение' : 'Send Message')
                      }
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Специализированные отделы
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Для более быстрого ответа обращайтесь напрямую к нужному отделу
                  </p>
                </div>
                
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <dept.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {dept.title}
                            </h4>
                            <p className="text-purple-600 font-medium mb-2">
                              {dept.email}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {dept.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наше местоположение
            </h2>
            <p className="text-xl text-gray-600">
              Посетите наш офис в Дубае, ОАЭ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Интерактивная карта будет здесь
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Dubai International Financial Centre, Dubai, UAE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

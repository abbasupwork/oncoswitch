'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  Heart,
  Microscope,
  Shield,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function About() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const teamMembers = [
    {
      name: 'Malika Gallyamova',
      role: language === 'ru' ? 'Основатель и CEO' : 'Founder and CEO',
      expertise: 'AI & Computer Science',
      image: '/team/malika.jpg',
      description: language === 'ru' 
        ? 'MSc AI & Computer Science, University of Birmingham. BA Film Director (Editing and Post-Production) UAL. Опыт в управлении командами и сложными процессами. Эксперт в области нетворкинга и коммуникаций.'
        : 'MSc AI & Computer Science, University of Birmingham. BA Film Director (Editing and Post-Production) UAL. Experience in team management and complex processes. Expert in networking and communications.'
    },
    {
      name: 'Vitaliy Volkov',
      role: language === 'ru' ? 'Со-основатель и CTO' : 'Co-founder and CTO',
      expertise: 'AI & Bioinformatics',
      image: '/team/vitaliy.jpg',
      description: language === 'ru'
        ? 'MSc AI & Computer Science, University of Birmingham. Выпускник РНИМУ им. Н.И. Пирогова. Старший биоинформатик в Genomed. Опыт работы над крупным проектом в области AI в биотехнологиях (Gemotek). Создал аналитическую систему поддержки принятия решений для радиоонкологов.'
        : 'MSc AI & Computer Science, University of Birmingham. Graduate of RNRMU named after N.I. Pirogov. Senior bioinformatician at Genomed. Experience working on a large project in AI in biotechnologies (Gemotek). Created an analytical decision support system for radio-oncologists for thyroid scintigram analysis.'
    }
  ]

  const values = [
    {
      icon: Target,
      title: language === 'ru' ? 'Точность' : 'Accuracy',
      description: language === 'ru' ? 'Мы стремимся к максимальной точности в предсказаниях и анализе' : 'We strive for maximum accuracy in predictions and analysis'
    },
    {
      icon: Heart,
      title: language === 'ru' ? 'Сострадание' : 'Compassion',
      description: language === 'ru' ? 'Каждый пациент важен, мы работаем для улучшения их жизни' : 'Every patient matters, we work to improve their lives'
    },
    {
      icon: Lightbulb,
      title: language === 'ru' ? 'Инновации' : 'Innovation',
      description: language === 'ru' ? 'Постоянно развиваем новые технологии и подходы' : 'Constantly developing new technologies and approaches'
    },
    {
      icon: Shield,
      title: language === 'ru' ? 'Безопасность' : 'Safety',
      description: language === 'ru' ? 'Высокие стандарты безопасности данных и исследований' : 'High standards of data security and research'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: language === 'ru' ? 'Основание компании' : 'Company Founded',
      description: language === 'ru' ? 'Создание OncoSwitch с миссией революционизировать генную терапию' : 'Creating OncoSwitch with the mission to revolutionize gene therapy'
    },
    {
      year: '2021',
      title: language === 'ru' ? 'Первый прототип' : 'First Prototype',
      description: language === 'ru' ? 'Разработка первого AI-алгоритма для предсказания активности' : 'Development of the first AI algorithm for activity prediction'
    },
    {
      year: '2022',
      title: language === 'ru' ? 'Партнерство с университетами' : 'University Partnerships',
      description: language === 'ru' ? 'Сотрудничество с ведущими исследовательскими центрами' : 'Collaboration with leading research centers'
    },
    {
      year: '2023',
      title: language === 'ru' ? 'Клинические испытания' : 'Clinical Trials',
      description: language === 'ru' ? 'Начало первых клинических испытаний с пациентами' : 'Beginning of first clinical trials with patients'
    },
    {
      year: '2024',
      title: language === 'ru' ? 'Запуск платформы' : 'Platform Launch',
      description: language === 'ru' ? 'Публичный запуск OncoSwitch для исследователей' : 'Public launch of OncoSwitch for researchers'
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
              <Users className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'О компании' : 'About Company'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'О OncoSwitch' : 'About OncoSwitch'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Мы создаем будущее персонализированной медицины, используя искусственный интеллект для разработки точных ДНК-переключателей'
                : 'We are creating the future of personalized medicine, using artificial intelligence to develop precise DNA switches'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы верим, что каждый пациент заслуживает персонализированного лечения. 
                OncoSwitch использует передовые технологии искусственного интеллекта 
                для создания точных ДНК-переключателей, которые могут революционизировать 
                лечение онкологических заболеваний.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Наша цель — сделать персонализированную генную терапию доступной 
                для всех пациентов, независимо от их местоположения или экономического статуса.
              </p>
              <Button variant="gradient" size="lg">
                Присоединиться к миссии
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Microscope, label: 'Исследования', value: '50+' },
                { icon: Users, label: 'Пациенты', value: '1000+' },
                { icon: Award, label: 'Публикации', value: '25+' },
                { icon: Globe, label: 'Страны', value: '15+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которые направляют нашу работу каждый день
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Эксперты в области биологии, AI и технологий, работающие вместе 
              для создания будущего медицины
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="purple" className="mx-auto mb-2">
                      {member.role}
                    </Badge>
                    <CardDescription className="text-sm font-medium text-purple-600">
                      {member.expertise}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наш путь
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ключевые моменты в развитии OncoSwitch
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-cyan-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  
                  <div className="ml-8 flex-1">
                    <Card variant="elevated">
                      <CardHeader>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        <CardDescription className="text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Присоединяйтесь к революции в медицине
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Станьте частью команды, которая меняет будущее здравоохранения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassmorphism" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Присоединиться к команде
              </Button>
              <Button variant="outline" size="lg" className="border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white">
                {language === 'ru' ? 'Связаться с нами' : 'Contact Us'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

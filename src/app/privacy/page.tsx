'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Privacy() {
  const lastUpdated = "15 декабря 2024"

  const sections = [
    {
      icon: Database,
      title: "Сбор данных",
      content: "Мы собираем только необходимые данные для предоставления наших услуг, включая информацию о пользователях, последовательностях ДНК и результатах анализа."
    },
    {
      icon: Lock,
      title: "Защита данных",
      content: "Все данные шифруются с использованием современных алгоритмов шифрования. Мы используем SSL/TLS для защиты передачи данных."
    },
    {
      icon: Eye,
      title: "Использование данных",
      content: "Данные используются исключительно для улучшения наших AI-алгоритмов и предоставления персонализированных рекомендаций."
    },
    {
      icon: UserCheck,
      title: "Права пользователей",
      content: "Пользователи имеют право на доступ, исправление, удаление и переносимость своих данных в соответствии с GDPR."
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
              Назад к главной
            </Link>
            
            <Badge variant="gradient" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Политика конфиденциальности
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Конфиденциальность
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы серьезно относимся к защите ваших данных и конфиденциальности
            </p>
            
            <div className="mt-6 text-sm text-gray-500">
              Последнее обновление: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Введение</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OncoSwitch (&ldquo;мы&rdquo;, &ldquo;наш&rdquo;, &ldquo;нас&rdquo;) серьезно относится к защите вашей конфиденциальности. 
                Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем 
                и защищаем вашу информацию при использовании нашей платформы.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Используя OncoSwitch, вы соглашаетесь с условиями данной Политики конфиденциальности.
              </p>
            </motion.div>

            {/* Key Principles */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Ключевые принципы</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Detailed Sections */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Информация, которую мы собираем</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Персональная информация</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Имя и контактная информация</li>
                      <li>Адрес электронной почты</li>
                      <li>Информация об организации</li>
                      <li>Профессиональная информация</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Данные исследований</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ДНК-последовательности</li>
                      <li>Результаты анализа</li>
                      <li>Метаданные экспериментов</li>
                      <li>Настройки и предпочтения</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Как мы используем информацию</h2>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Предоставление и улучшение наших услуг</li>
                    <li>Разработка и обучение AI-алгоритмов</li>
                    <li>Персонализация пользовательского опыта</li>
                    <li>Обеспечение безопасности платформы</li>
                    <li>Соблюдение правовых обязательств</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Защита данных</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Мы применяем следующие меры безопасности:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Шифрование данных в покое и при передаче</li>
                    <li>Регулярные аудиты безопасности</li>
                    <li>Ограниченный доступ к данным</li>
                    <li>Мониторинг и обнаружение угроз</li>
                    <li>Резервное копирование и восстановление</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Ваши права</h2>
                <div className="space-y-4 text-gray-700">
                  <p>В соответствии с GDPR и другими законами о защите данных, вы имеете право:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Доступ к вашим персональным данным</li>
                    <li>Исправление неточных данных</li>
                    <li>Удаление ваших данных</li>
                    <li>Ограничение обработки данных</li>
                    <li>Переносимость данных</li>
                    <li>Возражение против обработки</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Контактная информация</h2>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Если у вас есть вопросы о данной Политике конфиденциальности или хотите 
                    воспользоваться своими правами, свяжитесь с нами:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@oncoswitch.ai</p>
                    <p><strong>Телефон:</strong> +971 4 123 4567</p>
                    <p><strong>Адрес:</strong> Dubai International Financial Centre, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

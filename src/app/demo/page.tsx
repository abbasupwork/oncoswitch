'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Play, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import OncoSwitchLogo from '@/components/OncoSwitchLogo'
import { OncoSwitchActivityPredictor } from '@/components/OncoSwitchActivityPredictor'

export default function Demo() {
  const [status, setStatus] = useState<'online' | 'analyzing' | 'offline'>('online')
  const [cellLine] = useState('HepG2 (Гепатоцеллюлярная карцинома)')

  const handleStartAnalysis = () => {
    setStatus('analyzing')
    // Симуляция анализа
    setTimeout(() => {
      setStatus('online')
    }, 3000)
  }

  const handleGoOffline = () => {
    setStatus('offline')
    setTimeout(() => {
      setStatus('online')
    }, 2000)
  }

  const getMessage = () => {
    switch (status) {
      case 'analyzing':
        return `Анализирую последовательность для ${cellLine}...`
      case 'offline':
        return 'Сервис временно недоступен'
      default:
        return 'Готов к анализу'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/20 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <OncoSwitchLogo size="md" />
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Главная
              </Link>
              <Link href="/roadmap" className="text-gray-700 hover:text-purple-600 transition-colors">
                Roadmap
              </Link>
              <Link href="/designer" className="text-gray-700 hover:text-purple-600 transition-colors">
                Designer
              </Link>
              <Link href="/chat" className="text-gray-700 hover:text-purple-600 transition-colors">
                AI Chat
              </Link>
              <Link href="/library" className="text-gray-700 hover:text-purple-600 transition-colors">
                Library
              </Link>
            </div>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

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
              <Play className="w-4 h-4 mr-2" />
              Демонстрация
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                OncoSwitch Activity Predictor
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Демонстрация работы AI-системы для предсказания активности ДНК-переключателей
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Panel - Controls */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="elevated" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Управление демо</CardTitle>
                  <CardDescription>
                    Попробуйте различные состояния Activity Predictor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button 
                      variant="gradient" 
                      onClick={handleStartAnalysis}
                      disabled={status === 'analyzing'}
                      className="w-full"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Запустить анализ
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleGoOffline}
                      disabled={status === 'analyzing'}
                      className="w-full"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Симуляция сбоя
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-gray-900 mb-2">Текущий статус:</h4>
                    <Badge 
                      variant={status === 'online' ? 'success' : status === 'analyzing' ? 'info' : 'error'}
                      className="text-sm"
                    >
                      {status === 'online' ? 'Онлайн' : 
                       status === 'analyzing' ? 'Анализирую...' : 'Оффлайн'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Информация о демо</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Клеточная линия:</span>
                      <span className="font-medium">{cellLine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Длина последовательности:</span>
                      <span className="font-medium">200 bp</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Формат:</span>
                      <span className="font-medium text-green-600">Валидная ДНК</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Panel - Activity Predictor */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <OncoSwitchActivityPredictor
                status={status}
                message={getMessage()}
                cellLine={cellLine}
                className="w-full max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Возможности Activity Predictor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мощный AI-инструмент для анализа и предсказания активности ДНК-переключателей
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time анализ',
                description: 'Мгновенный анализ последовательностей с высокой точностью',
                icon: '⚡'
              },
              {
                title: 'Множественные клеточные линии',
                description: 'Поддержка различных типов клеток и тканей',
                icon: '🧬'
              },
              {
                title: 'AI-предсказания',
                description: 'Использование машинного обучения для точных прогнозов',
                icon: '🤖'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <OncoSwitchLogo size="sm" className="mb-4 md:mb-0" />
            <div className="text-sm text-gray-400">
              © 2024 OncoSwitch. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

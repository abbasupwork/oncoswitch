'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  FlaskConical,
  Play,
  Pause,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Experiments() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const experiments = [
    {
      id: 1,
      name: language === 'ru' ? 'Тест OncoSwitch-v1.0' : 'OncoSwitch-v1.0 Test',
      status: 'completed',
      progress: 100,
      startDate: '2024-12-10',
      duration: '2h 30m',
      results: { success: 87, total: 100 }
    },
    {
      id: 2,
      name: language === 'ru' ? 'Оптимизация GC-содержания' : 'GC Content Optimization',
      status: 'running',
      progress: 65,
      startDate: '2024-12-15',
      duration: '1h 45m',
      results: null
    },
    {
      id: 3,
      name: language === 'ru' ? 'Анализ стабильности' : 'Stability Analysis',
      status: 'pending',
      progress: 0,
      startDate: '2024-12-16',
      duration: '3h 00m',
      results: null
    }
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { color: 'success', icon: CheckCircle, text: language === 'ru' ? 'Завершено' : 'Completed' }
      case 'running':
        return { color: 'info', icon: Play, text: language === 'ru' ? 'Выполняется' : 'Running' }
      case 'pending':
        return { color: 'warning', icon: Clock, text: language === 'ru' ? 'Ожидает' : 'Pending' }
      default:
        return { color: 'default', icon: Clock, text: language === 'ru' ? 'Неизвестно' : 'Unknown' }
    }
  }

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
              <FlaskConical className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Experiment Tracker' : 'Experiment Tracker'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'Трекер экспериментов' : 'Experiment Tracker'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Отслеживайте и управляйте вашими экспериментами с ДНК-переключателями' 
                : 'Track and manage your DNA switch experiments'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">12</div>
                <div className="text-sm text-gray-600">
                  {language === 'ru' ? 'Всего экспериментов' : 'Total Experiments'}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-sm text-gray-600">
                  {language === 'ru' ? 'Завершено' : 'Completed'}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-gray-600">
                  {language === 'ru' ? 'Выполняется' : 'Running'}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                <div className="text-sm text-gray-600">
                  {language === 'ru' ? 'Ожидает' : 'Pending'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiments List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {experiments.map((experiment, index) => {
              const statusConfig = getStatusConfig(experiment.status)
              return (
                <motion.div
                  key={experiment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="elevated" className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                            <FlaskConical className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {experiment.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {language === 'ru' ? 'Начато:' : 'Started:'} {experiment.startDate}
                            </p>
                          </div>
                        </div>
                        <Badge variant={statusConfig.color as "default" | "success" | "error" | "info" | "warning" | "gradient" | "purple"}>
                          <statusConfig.icon className="w-4 h-4 mr-2" />
                          {statusConfig.text}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-sm text-gray-600 mb-2">
                            {language === 'ru' ? 'Прогресс' : 'Progress'}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${experiment.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {experiment.progress}%
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-600 mb-2">
                            {language === 'ru' ? 'Длительность' : 'Duration'}
                          </div>
                          <div className="text-lg font-semibold text-gray-900">
                            {experiment.duration}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-600 mb-2">
                            {language === 'ru' ? 'Результаты' : 'Results'}
                          </div>
                          {experiment.results ? (
                            <div className="text-lg font-semibold text-green-600">
                              {experiment.results.success}/{experiment.results.total}
                            </div>
                          ) : (
                            <div className="text-lg font-semibold text-gray-400">
                              {language === 'ru' ? 'Ожидается' : 'Pending'}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-4 h-4 mr-2" />
                          {language === 'ru' ? 'Аналитика' : 'Analytics'}
                        </Button>
                        {experiment.status === 'running' && (
                          <Button variant="outline" size="sm">
                            <Pause className="w-4 h-4 mr-2" />
                            {language === 'ru' ? 'Пауза' : 'Pause'}
                          </Button>
                        )}
                        {experiment.status === 'pending' && (
                          <Button variant="gradient" size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            {language === 'ru' ? 'Запустить' : 'Start'}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

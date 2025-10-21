'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Activity,
  Target,
  Zap,
  Users,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Analytics() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const metrics = [
    {
      title: language === 'ru' ? 'Всего анализов' : 'Total Analyses',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: BarChart3,
      color: 'blue'
    },
    {
      title: language === 'ru' ? 'Средняя точность' : 'Average Accuracy',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'green'
    },
    {
      title: language === 'ru' ? 'Время анализа' : 'Analysis Time',
      value: '4.2s',
      change: '-15.3%',
      trend: 'down',
      icon: Clock,
      color: 'purple'
    },
    {
      title: language === 'ru' ? 'Активные пользователи' : 'Active Users',
      value: '89',
      change: '+8.7%',
      trend: 'up',
      icon: Users,
      color: 'orange'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'analysis',
      description: language === 'ru' ? 'Анализ OncoSwitch-v1.0 завершен' : 'OncoSwitch-v1.0 analysis completed',
      time: '2 минуты назад',
      status: 'success'
    },
    {
      id: 2,
      type: 'optimization',
      description: language === 'ru' ? 'Оптимизация GC-содержания' : 'GC content optimization',
      time: '15 минут назад',
      status: 'running'
    },
    {
      id: 3,
      type: 'prediction',
      description: language === 'ru' ? 'Предсказание активности' : 'Activity prediction',
      time: '1 час назад',
      status: 'success'
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
              <BarChart3 className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Analytics Dashboard' : 'Analytics Dashboard'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'Аналитическая панель' : 'Analytics Dashboard'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Подробная аналитика использования платформы и результатов экспериментов' 
                : 'Detailed analytics of platform usage and experiment results'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                      </div>
                      <Badge variant={metric.trend === 'up' ? 'success' : 'warning'}>
                        {metric.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.title}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts and Activity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    {language === 'ru' ? 'Производительность' : 'Performance'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ru' ? 'Тренды точности и скорости анализа' : 'Analysis accuracy and speed trends'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        {language === 'ru' ? 'График производительности' : 'Performance Chart'}
                      </p>
                      <p className="text-sm text-gray-400">
                        {language === 'ru' ? 'Интеграция с Chart.js' : 'Chart.js integration'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    {language === 'ru' ? 'Недавняя активность' : 'Recent Activity'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ru' ? 'Последние операции на платформе' : 'Latest platform operations'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.status === 'success' ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          {activity.status === 'success' ? (
                            <Target className="w-4 h-4 text-green-600" />
                          ) : (
                            <Zap className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                        <Badge variant={activity.status === 'success' ? 'success' : 'info'}>
                          {activity.status === 'success' 
                            ? (language === 'ru' ? 'Завершено' : 'Completed')
                            : (language === 'ru' ? 'Выполняется' : 'Running')
                          }
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

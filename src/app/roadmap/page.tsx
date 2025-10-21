'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CheckCircle, 
  Clock, 
  Target, 
  ArrowLeft,
  Calendar,
  Users,
  Zap,
  Shield,
  Globe,
  Brain,
  Microscope,
  Database
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import OncoSwitchLogo from '@/components/OncoSwitchLogo'

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'MVP Launch',
      status: 'completed',
      date: 'Q4 2024',
      description: 'Основные функции платформы',
      features: [
        'Sequence Designer с drag-and-drop',
        'AI Chat Assistant',
        'Switch Library',
        'Basic Analytics',
        'User Authentication'
      ],
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-500'
    },
    {
      phase: 'Phase 2',
      title: 'Advanced Features',
      status: 'in_progress',
      date: 'Q1 2025',
      description: 'Расширенные возможности и интеграции',
      features: [
        'Experiment Tracker',
        'Advanced Analytics Dashboard',
        'API Integration',
        'Collaboration Tools',
        'Export/Import Functions'
      ],
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: 'Phase 3',
      title: 'AI Enhancement',
      status: 'planned',
      date: 'Q2 2025',
      description: 'ИИ-улучшения и автоматизация',
      features: [
        'Advanced AI Predictions',
        'Automated Optimization',
        'Smart Recommendations',
        'ML Model Training',
        'Predictive Analytics'
      ],
      icon: Brain,
      color: 'from-primary-500 to-accent-500'
    },
    {
      phase: 'Phase 4',
      title: 'Enterprise & Scale',
      status: 'planned',
      date: 'Q3 2025',
      description: 'Корпоративные функции и масштабирование',
      features: [
        'Enterprise Dashboard',
        'Multi-tenant Architecture',
        'Advanced Security',
        'Compliance Tools',
        'Custom Integrations'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      phase: 'Phase 5',
      title: 'Global Platform',
      status: 'planned',
      date: 'Q4 2025',
      description: 'Глобальная платформа и партнерства',
      features: [
        'Global Research Network',
        'Pharma Partnerships',
        'Clinical Trial Integration',
        'Regulatory Compliance',
        'Multi-language Support'
      ],
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const milestones = [
    {
      title: '10,000+ Sequences',
      description: 'Создано и валидировано',
      icon: Database,
      achieved: true
    },
    {
      title: '500+ Researchers',
      description: 'Активных пользователей',
      icon: Users,
      achieved: true
    },
    {
      title: '98.5% Success Rate',
      description: 'Точность предсказаний',
      icon: Target,
      achieved: true
    },
    {
      title: '50+ Publications',
      description: 'Научных публикаций',
      icon: Microscope,
      achieved: false
    },
    {
      title: '5 Pharma Partners',
      description: 'Фармацевтических партнеров',
      icon: Shield,
      achieved: false
    },
    {
      title: 'Global Deployment',
      description: 'Развертывание в 20+ странах',
      icon: Globe,
      achieved: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'planned':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle
      case 'in_progress':
        return Clock
      case 'planned':
        return Target
      default:
        return Target
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
              <Link href="/designer" className="text-gray-700 hover:text-purple-600 transition-colors">
                Designer
              </Link>
              <Link href="/chat" className="text-gray-700 hover:text-purple-600 transition-colors">
                AI Chat
              </Link>
              <Link href="/library" className="text-gray-700 hover:text-purple-600 transition-colors">
                Library
              </Link>
              <Link href="/experiments" className="text-gray-700 hover:text-purple-600 transition-colors">
                Experiments
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-purple-600 transition-colors">
                Analytics
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
              <Calendar className="w-4 h-4 mr-2" />
              Roadmap 2024-2025
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наш план развития платформы OncoSwitch для создания 
              нового поколения персонализированной генной терапии
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-cyan-200"></div>
            
            <div className="space-y-16">
              {roadmapItems.map((item, index) => {
                const StatusIcon = getStatusIcon(item.status)
                const ItemIcon = item.icon
                
                return (
                  <motion.div
                    key={item.phase}
                    className="relative flex items-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-white shadow-lg">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                        <ItemIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <Card variant="elevated" className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Badge variant="gradient" className="text-sm">
                                {item.phase}
                              </Badge>
                              <Badge 
                                variant="default" 
                                className={`text-sm border ${getStatusColor(item.status)}`}
                              >
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {item.status === 'completed' ? 'Завершено' : 
                                 item.status === 'in_progress' ? 'В процессе' : 'Запланировано'}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-500 font-medium">
                              {item.date}
                            </div>
                          </div>
                          
                          <CardTitle className="text-2xl mb-2">
                            {item.title}
                          </CardTitle>
                          
                          <CardDescription className="text-lg">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {item.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                className="flex items-center space-x-2 text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                                <span className="text-gray-700">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
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
              Ключевые достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши цели и достижения в развитии платформы OncoSwitch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  variant={milestone.achieved ? "elevated" : "default"}
                  className={`h-full text-center ${milestone.achieved ? 'border-emerald-200' : ''}`}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      milestone.achieved 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-500' 
                        : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {milestone.title}
                    </CardTitle>
                    <CardDescription>
                      {milestone.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {milestone.achieved ? (
                      <Badge variant="success" className="mx-auto">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Достигнуто
                      </Badge>
                    ) : (
                      <Badge variant="default" className="mx-auto">
                        <Target className="w-4 h-4 mr-1" />
                        В планах
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Присоединяйтесь к нашему путешествию
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Станьте частью революции в персонализированной генной терапии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassmorphism" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Начать сейчас
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                Следить за обновлениями
              </Button>
            </div>
          </motion.div>
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

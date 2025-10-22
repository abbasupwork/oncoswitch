'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Dna, 
  MessageSquare, 
  FlaskConical, 
  BarChart3,
  Users,
  Target,
  Zap,
  Sparkles,
  ArrowRight,
  Mail,
  TrendingUp,
  CheckCircle,
  Loader2,
  Activity,
  Shuffle,
  X,
  Play
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { OncoSwitchActivityPredictor } from '@/components/OncoSwitchActivityPredictor'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [demoStatus, setDemoStatus] = useState<'online' | 'analyzing' | 'offline'>('online')
  const [demoSequence, setDemoSequence] = useState('CACCCTGTCCATCCCCAATTCGGGCCGAATTGCGCCACACGATGTGGGATCGTTC\nGCCCTCATGGTCATGTAAACAAATGCTTGCCACGCTGGCTTGCACAGTCCCATGAAT\nGAGACGCCGAGTTTAATCGAAGTCCATTAACCGGGACGTCGTATATGGACGCTTACC\nTGCAGCGCTGGCCTCCAAATGCAAGGGCGATCG')
  const [selectedCellLine, setSelectedCellLine] = useState('HepG2 (Hepatocellular carcinoma)')
  const [operationMode, setOperationMode] = useState<'prediction' | 'generation'>('prediction')
  const [selectedModel, setSelectedModel] = useState('Oncoswitch_demo_X_v0.0')
  const [sequenceLength, setSequenceLength] = useState('50')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])


  const handleStartAnalysis = useCallback(() => {
    setDemoStatus('analyzing')
    // Симуляция анализа
    setTimeout(() => {
      setDemoStatus('online')
    }, 3000)
  }, [])

  const generateRandomSequence = useCallback(() => {
    const bases = ['A', 'T', 'G', 'C']
    const length = parseInt(sequenceLength)
    const sequence = Array.from({ length }, () => bases[Math.floor(Math.random() * bases.length)]).join('')
    setDemoSequence(sequence)
  }, [sequenceLength])

  const clearSequence = useCallback(() => {
    setDemoSequence('')
  }, [])

  // Validate DNA sequence input
  const validateDNASequence = useCallback((sequence: string) => {
    // Remove whitespace and convert to uppercase
    const cleanSequence = sequence.replace(/\s/g, '').toUpperCase()
    // Check if sequence contains only valid DNA bases
    const isValid = /^[ATCG]*$/.test(cleanSequence)
    return { isValid, cleanSequence }
  }, [])

  // Handle DNA sequence input with validation
  const handleSequenceChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    const { isValid, cleanSequence } = validateDNASequence(inputValue)
    
    if (isValid) {
      setDemoSequence(cleanSequence)
    }
    // If invalid, don't update the state (prevents invalid characters)
  }, [validateDNASequence])

  const features = useMemo(() => [
    {
      icon: Dna,
      title: language === 'ru' ? 'Конструктор последовательностей' : 'Sequence Designer',
      description: language === 'ru' ? 'Интуитивный drag-and-drop интерфейс для создания ДНК-переключателей с валидацией в реальном времени и AI-подсказками' : 'Intuitive drag-and-drop interface for creating DNA switches with real-time validation and AI-powered suggestions',
      href: '/designer',
      color: 'from-primary-500 to-accent-500',
      features: language === 'ru' ? ['Валидация в реальном времени', 'AI-оптимизация', 'Библиотека компонентов'] : ['Real-time validation', 'AI optimization', 'Component library']
    },
    {
      icon: MessageSquare,
      title: language === 'ru' ? 'AI Чат-ассистент' : 'AI Chat Assistant',
      description: language === 'ru' ? 'Умный помощник для контекстных разговоров о дизайне переключателей, анализа результатов и получения экспертных рекомендаций' : 'Smart assistant for context-aware conversations about switch design, result analysis and expert recommendations',
      href: '/chat',
      color: 'from-secondary-500 to-accent-500',
      features: language === 'ru' ? ['Контекстный анализ', 'Экспертные советы', 'Интеграция с платформой'] : ['Contextual analysis', 'Expert advice', 'Platform integration']
    },
    {
      icon: BarChart3,
      title: language === 'ru' ? 'Аналитика и эксперименты' : 'Analytics & Experiments',
      description: language === 'ru' ? 'Комплексная панель для отслеживания экспериментов, анализа результатов и визуализации данных с интерактивными графиками' : 'Comprehensive dashboard for experiment tracking, result analysis and data visualization with interactive charts',
      href: '/analytics',
      color: 'from-accent-500 to-primary-500',
      features: language === 'ru' ? ['Трекинг экспериментов', 'Интерактивные графики', 'Отчеты и метрики'] : ['Experiment tracking', 'Interactive charts', 'Reports & metrics']
    }
  ], [language])

  const stats = useMemo(() => [
    { label: language === 'ru' ? 'Последовательности' : 'Sequences', value: '10,000+', icon: Dna },
    { label: language === 'ru' ? 'Исследователи' : 'Researchers', value: '500+', icon: Users },
    { label: language === 'ru' ? 'Успешность' : 'Success Rate', value: '98.5%', icon: Target },
    { label: language === 'ru' ? 'Эксперименты' : 'Experiments', value: '2,500+', icon: FlaskConical }
  ], [language])

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-accent-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="gradient" className="mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                {language === 'ru' ? 'AI платформа для программируемых ДНК переключателей' : 'AI Platform for Programmable DNA Switches'}
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  OncoSwitch
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
                {language === 'ru' ? 'Новое поколение генной терапии. Решаем ключевые проблемы современной онкологии с помощью персонализированного подхода.' : 'Next generation gene therapy. Solving key challenges in modern oncology through personalized approaches.'}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button variant="gradient" size="lg" className="group">
                {language === 'ru' ? 'Создать ДНК-переключатель' : 'Create DNA Switch'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="#demo">
                <Button variant="outline" size="lg">
                  {language === 'ru' ? 'Попробовать демо' : 'Try Demo'}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
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
              {language === 'ru' ? 'Основные возможности' : 'Core Features'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' ? 'Мощные инструменты для дизайна и анализа ДНК-переключателей' : 'Powerful tools for DNA switch design and analysis'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={feature.href}>
                    <Card variant="elevated" className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                        
                        {/* Feature highlights */}
                        <div className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3"></div>
                              {item}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="gradient" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Живая демонстрация' : 'Live Demo'}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Попробуйте OncoSwitch прямо сейчас' : 'Try OncoSwitch Right Now'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' ? 'Интерактивная демонстрация AI-системы для предсказания активности ДНК-переключателей' : 'Interactive demonstration of AI system for DNA switch activity prediction'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="max-w-7xl mx-auto overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-500/15 via-accent-500/10 to-secondary-500/15 border-b border-gray-200 p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-gray-900 flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Dna className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                        {language === 'ru' ? 'OncoSwitch Activity Predictor' : 'OncoSwitch Activity Predictor'}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {language === 'ru' ? 'AI-система для предсказания активности ДНК-переключателей' : 'AI system for DNA switch activity prediction'}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-0 min-h-[600px]">
                  {/* Left Panel - Configuration (3/5 width) */}
                  <div className="xl:col-span-3 p-6 xl:p-8 border-r border-gray-100 overflow-hidden">
                    <div className="space-y-6 xl:space-y-8">
                      {/* Step 1: Operation Mode */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                          <label className="text-lg font-semibold text-gray-900">
                            {language === 'ru' ? 'Режим работы' : 'Operation Mode'}
                          </label>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            variant={operationMode === 'prediction' ? 'gradient' : 'outline'}
                            size="sm" 
                            onClick={() => setOperationMode('prediction')}
                            className={`flex-1 h-10 text-sm font-medium transition-all duration-300 ${
                              operationMode === 'prediction' 
                                ? 'shadow-md hover:shadow-lg bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600' 
                                : 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                          >
                            <Target className="w-4 h-4 mr-2" />
                            {language === 'ru' ? 'Предсказание активности' : 'Activity Prediction'}
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm" 
                            disabled
                            className={`flex-1 h-10 text-sm font-medium transition-all duration-300 border-2 border-gray-300 text-gray-400 bg-gray-50 opacity-60 cursor-not-allowed`}
                          >
                            <Zap className="w-4 h-4 mr-2" />
                            {language === 'ru' ? 'Генерация последовательности (заблокировано)' : 'Sequence Generation'}
                          </Button>
                        </div>
                      </motion.div>

                      {/* Step 2: Model Configuration */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                          <label className="text-lg font-semibold text-gray-900">
                            {language === 'ru' ? 'Конфигурация модели' : 'Model Configuration'}
                          </label>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 block">
                              {language === 'ru' ? 'AI Модель' : 'AI Model'}
                            </label>
                            <div className="relative">
                              <select
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                                className="w-full bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 text-primary-800 font-mono text-sm rounded-xl h-10 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-200 appearance-none cursor-pointer"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                  backgroundPosition: 'right 0.5rem center',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: '1.5em 1.5em'
                                }}
                              >
                                <option value="Oncoswitch_demo_X_v0.0">Oncoswitch_demo_X_v0.0</option>
                                <option value="Oncoswitch_demo_X_v1.0.0" disabled>Oncoswitch_demo_X_v1.0.0</option>
                                <option value="Oncoswitch_demo_X_ v1.0.1" disabled>Oncoswitch_demo_X_ v1.0.1</option>
                              </select>
                              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <Badge variant="success" className="text-xs">Latest</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 block">
                              {language === 'ru' ? 'Контекст анализа' : 'Analysis Context'}
                            </label>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button 
                                variant="primary" 
                                size="sm" 
                                className="flex-1 h-10 font-medium shadow-md hover:shadow-lg transition-all duration-300 bg-primary-600 hover:bg-primary-700"
                              >
                                <Users className="w-4 h-4 mr-2" />
                                {language === 'ru' ? 'Клеточная линия' : 'Cell Line'}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                disabled
                                className="flex-1 h-10 font-medium border-2 border-gray-300 text-gray-400 bg-gray-50 opacity-60 cursor-not-allowed transition-all duration-300"
                              >
                                <Activity className="w-4 h-4 mr-2" />
                                {language === 'ru' ? 'Ткань (заблокировано)' : 'Tissue'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Step 3: Sequence Input */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                          <label className="text-lg font-semibold text-gray-900">
                            {language === 'ru' ? 'Ввод последовательности' : 'Sequence Input'}
                          </label>
                        </div>
                        
                        {/* Sequence Info */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 block">
                              {language === 'ru' ? 'Длина последовательности' : 'Sequence Length'}
                            </label>
                            <div className="flex items-center gap-2">
                              <select
                                value={sequenceLength}
                                onChange={(e) => setSequenceLength(e.target.value)}
                                className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 text-primary-800 font-mono text-sm rounded-xl h-10 px-3 pr-10 flex-1 focus:outline-none focus:ring-2 focus:ring-primary-200 appearance-none cursor-pointer"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                  backgroundPosition: 'right 0.5rem center',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: '1.5em 1.5em'
                                }}
                              >
                                <option value="50">50 bp</option>
                                <option value="100" disabled>100 bp</option>
                                <option value="200" disabled>200 bp</option>
                              </select>
                              <Badge variant="info" className="text-xs whitespace-nowrap">Optimal</Badge>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-medium text-gray-700 block">
                              {language === 'ru' ? 'Клеточная линия' : 'Cell Line'}
                            </label>
                            <select
                              value={selectedCellLine}
                              onChange={(e) => setSelectedCellLine(e.target.value)}
                              className="w-full bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 text-primary-800 font-mono text-sm rounded-xl h-10 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-200 appearance-none cursor-pointer"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.5em 1.5em'
                              }}
                            >
                              <option value="HepG2 (Hepatocellular carcinoma)">HepG2 (Hepatocellular carcinoma)</option>
                              <option value="WTC11 (Induced pluripotent stem cells)">WTC11 (Induced pluripotent stem cells)</option>
                              <option value="K562 (Erythroleukemia)">K562 (Erythroleukemia)</option>
                            </select>
                          </div>
                        </div>

                        {/* DNA Sequence Input */}
                        <div className="space-y-4">
                          <label className="text-sm font-medium text-gray-700 block">
                            {language === 'ru' ? 'Биологическая последовательность ДНК' : 'Biological DNA Sequence'}
                          </label>
                          <div className="relative">
                            <textarea
                              value={demoSequence}
                              onChange={handleSequenceChange}
                              rows={6}
                              className="w-full p-4 pr-16 border-2 border-gray-200 rounded-xl font-mono text-sm bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 resize-none"
                              placeholder={language === 'ru' ? 'Введите ДНК последовательность (A, T, G, C)...' : 'Enter DNA sequence (A, T, G, C)...'}
                            />
                            <div className="absolute top-3 right-3">
                              <Badge variant="success" className="text-xs">
                                {demoSequence.replace(/\n/g, '').length} bp
                              </Badge>
                            </div>
                          </div>
                          
                          {/* DNA Sequence Validation Info */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-blue-700 font-medium">
                                {language === 'ru' ? 'Длина' : 'Length'}: {demoSequence.replace(/\n/g, '').length} bp
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-green-700 font-medium">
                                {language === 'ru' ? 'Формат' : 'Format'}: {language === 'ru' ? 'Валидная ДНК' : 'Valid DNA'}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-purple-700 font-medium">
                                {language === 'ru' ? 'Базовые пары' : 'Base pairs'}: A, T, G, C
                              </span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              variant="secondary" 
                              size="sm" 
                              onClick={generateRandomSequence} 
                              className="flex-1 h-10 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 bg-secondary-100 hover:bg-secondary-200 text-secondary-800 hover:text-secondary-900"
                            >
                              <Shuffle className="w-4 h-4 mr-2" />
                              {language === 'ru' ? 'Сгенерировать случайную' : 'Generate Random'}
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={clearSequence} 
                              className="flex-1 h-10 text-sm font-medium border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                            >
                              <X className="w-4 h-4 mr-2" />
                              {language === 'ru' ? 'Очистить' : 'Clear'}
                            </Button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Step 4: Analysis Button */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="pt-2"
                      >
                        <Button
                          variant="gradient"
                          size="lg"
                          className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 hover:from-primary-600 hover:via-accent-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          onClick={handleStartAnalysis}
                          disabled={demoStatus === 'analyzing' || !demoSequence.trim()}
                          loading={demoStatus === 'analyzing'}
                        >
                          {demoStatus === 'analyzing' ? (
                            <>
                              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                              {operationMode === 'generation' 
                                ? (language === 'ru' ? 'Генерирую...' : 'Generating...')
                                : (language === 'ru' ? 'Анализирую...' : 'Analyzing...')
                              }
                            </>
                          ) : (
                            <>
                              <Play className="w-6 h-6 mr-3" />
                              {operationMode === 'generation' 
                                ? (language === 'ru' ? 'Генерировать последовательность' : 'Generate Sequence')
                                : (language === 'ru' ? 'Запустить анализ' : 'Start Analysis')
                              }
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Panel - Activity Predictor (2/5 width) */}
                  <div className="xl:col-span-2 p-6 xl:p-8 bg-gradient-to-br from-gray-50 to-white">
                    <OncoSwitchActivityPredictor
                      status={demoStatus}
                      sequence={demoSequence}
                      cellLine={selectedCellLine}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Demo Features */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {useMemo(() => [
              {
                icon: Target,
                title: language === 'ru' ? 'Точность 98.5%' : '98.5% Accuracy',
                description: language === 'ru' ? 'Высокая точность предсказаний активности' : 'High accuracy of activity predictions'
              },
              {
                icon: Zap,
                title: language === 'ru' ? 'Мгновенный анализ' : 'Instant Analysis',
                description: language === 'ru' ? 'Результаты за секунды, а не часы' : 'Results in seconds, not hours'
              },
              {
                icon: Users,
                title: language === 'ru' ? '500+ исследователей' : '500+ Researchers',
                description: language === 'ru' ? 'Доверяют OncoSwitch для своих исследований' : 'Trust OncoSwitch for their research'
              }
            ], [language]).map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'ru' ? 'Готовы начать дизайн ДНК-переключателей?' : 'Ready to start designing DNA switches?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'ru' ? 'Присоединяйтесь к 500+ исследователям, которые уже используют OncoSwitch' : 'Join 500+ researchers who already use OncoSwitch'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassmorphism" size="lg" className="group bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-xl font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                {language === 'ru' ? 'Начать бесплатно' : 'Start for Free'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-yellow-300 text-yellow-300 bg-yellow-300/20 backdrop-blur-md hover:bg-yellow-300 hover:text-gray-900 shadow-xl group font-bold">
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'ru' ? 'Связаться с нами' : 'Contact Us'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="gradient" className="mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Инвестиционные возможности' : 'Investment Opportunities'}
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              {language === 'ru' ? 'Присоединяйтесь к революции в персонализированной медицине' : 'Join the Revolution in Personalized Medicine'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ru' ? 'OncoSwitch представляет уникальную возможность инвестировать в будущее генной терапии' : 'OncoSwitch presents a unique opportunity to invest in the future of gene therapy'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: language === 'ru' ? 'Высокий потенциал роста' : 'High Growth Potential',
                description: language === 'ru' ? 'Рынок персонализированной медицины растет на 15% ежегодно' : 'Personalized medicine market growing 15% annually'
              },
              {
                icon: CheckCircle,
                title: language === 'ru' ? 'Проверенная технология' : 'Proven Technology',
                description: language === 'ru' ? '98.5% точность предсказаний, валидированная ведущими институтами' : '98.5% prediction accuracy, validated by leading institutions'
              },
              {
                icon: Users,
                title: language === 'ru' ? 'Сильная команда' : 'Strong Team',
                description: language === 'ru' ? 'Эксперты с опытом в биотехнологиях и AI' : 'Experts with experience in biotechnology and AI'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'ru' ? 'Заинтересованы в инвестировании?' : 'Interested in Investing?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === 'ru' ? 'Свяжитесь с нами для получения подробной информации о возможностях инвестирования' : 'Contact us for detailed information about investment opportunities'}
              </p>
              <Link href="/contact">
                <Button variant="gradient" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'ru' ? 'Обсудить инвестиции' : 'Discuss Investment'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="gradient" className="mb-6">
              <Users className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Команда' : 'Team'}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Эксперты в области AI и биотехнологий' : 'AI and Biotechnology Experts'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' ? 'Наша команда объединяет лучших специалистов в области искусственного интеллекта и молекулярной биологии' : 'Our team brings together the best specialists in artificial intelligence and molecular biology'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Malika Gallyamova',
                role: language === 'ru' ? 'Основатель и CEO' : 'Founder and CEO',
                education: 'MSc AI & Computer Science, University of Birmingham',
                experience: language === 'ru' ? 'Опыт в управлении командами и сложными процессами. Эксперт в области нетворкинга и коммуникаций.' : 'Experience in team management and complex processes. Expert in networking and communications.',
                image: '/team/malika.jpg'
              },
              {
                name: 'Vitaliy Volkov',
                role: language === 'ru' ? 'Со-основатель и CTO' : 'Co-founder and CTO',
                education: 'MSc AI & Computer Science, University of Birmingham',
                experience: language === 'ru' ? 'Старший биоинформатик в Genomed. Опыт работы над крупным проектом в области AI в биотехнологиях. Создал аналитическую систему поддержки принятия решений для радиоонкологов.' : 'Senior Bioinformatician at Genomed. Experience in large AI projects in biotechnologies. Created analytical decision support system for radio-oncologists.',
                image: '/team/vitaliy.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.education}</p>
                  <p className="text-gray-700 leading-relaxed">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

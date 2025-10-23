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
      {/* Live Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">      
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
        </div>
      </section>

    </div>
  )
}

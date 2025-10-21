'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Dna,
  Play,
  Save,
  Download,
  Shuffle,
  Target,
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Designer() {
  const [language, setLanguage] = useState<Language>('en')
  const [sequence, setSequence] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<{
    gcContent: number;
    meltingTemp: number;
    secondaryStructure: string;
    activity: number;
  } | null>(null)

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setResults({
        gcContent: 45.2,
        meltingTemp: 72.3,
        secondaryStructure: 'Stable',
        activity: 0.87
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const generateRandomSequence = () => {
    const bases = ['A', 'T', 'G', 'C']
    const randomSeq = Array.from({ length: 200 }, () => 
      bases[Math.floor(Math.random() * bases.length)]
    ).join('')
    setSequence(randomSeq)
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
              <Dna className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Sequence Designer' : 'Sequence Designer'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'Конструктор последовательностей' : 'Sequence Designer'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Интуитивный инструмент для создания и анализа ДНК-переключателей' 
                : 'Intuitive tool for creating and analyzing DNA switches'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Sequence Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="elevated" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Dna className="w-6 h-6 mr-3 text-primary-600" />
                    {language === 'ru' ? 'Ввод последовательности' : 'Sequence Input'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ru' 
                      ? 'Введите или сгенерируйте ДНК-последовательность для анализа' 
                      : 'Enter or generate DNA sequence for analysis'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ru' ? 'ДНК-последовательность' : 'DNA Sequence'}
                    </label>
                    <textarea
                      value={sequence}
                      onChange={(e) => setSequence(e.target.value)}
                      placeholder={language === 'ru' 
                        ? 'Введите последовательность (A, T, G, C)...' 
                        : 'Enter sequence (A, T, G, C)...'
                      }
                      className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        {sequence.length} {language === 'ru' ? 'нуклеотидов' : 'nucleotides'}
                      </span>
                      <Badge variant={sequence.length >= 50 ? 'success' : 'warning'}>
                        {sequence.length >= 50 
                          ? (language === 'ru' ? 'Готово' : 'Ready') 
                          : (language === 'ru' ? 'Минимум 50' : 'Min 50')
                        }
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={generateRandomSequence}
                      className="flex-1"
                    >
                      <Shuffle className="w-4 h-4 mr-2" />
                      {language === 'ru' ? 'Сгенерировать' : 'Generate'}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSequence('')}
                      className="flex-1"
                    >
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {language === 'ru' ? 'Очистить' : 'Clear'}
                    </Button>
                  </div>

                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={handleAnalyze}
                    disabled={sequence.length < 50 || isAnalyzing}
                    className="w-full"
                    loading={isAnalyzing}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {isAnalyzing 
                      ? (language === 'ru' ? 'Анализирую...' : 'Analyzing...')
                      : (language === 'ru' ? 'Анализировать' : 'Analyze')
                    }
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="elevated" className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Target className="w-6 h-6 mr-3 text-accent-600" />
                    {language === 'ru' ? 'Результаты анализа' : 'Analysis Results'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ru' 
                      ? 'Параметры и характеристики вашей последовательности' 
                      : 'Parameters and characteristics of your sequence'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {results ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-sm text-blue-600 font-medium">
                            {language === 'ru' ? 'GC-содержание' : 'GC Content'}
                          </div>
                          <div className="text-2xl font-bold text-blue-800">
                            {results.gcContent}%
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-sm text-green-600 font-medium">
                            {language === 'ru' ? 'Температура плавления' : 'Melting Temperature'}
                          </div>
                          <div className="text-2xl font-bold text-green-800">
                            {results.meltingTemp}°C
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-purple-600 font-medium mb-2">
                          {language === 'ru' ? 'Вторичная структура' : 'Secondary Structure'}
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-lg font-semibold text-purple-800">
                            {results.secondaryStructure}
                          </span>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="text-sm text-orange-600 font-medium mb-2">
                          {language === 'ru' ? 'Предсказанная активность' : 'Predicted Activity'}
                        </div>
                        <div className="flex items-center">
                          <Zap className="w-5 h-5 text-orange-500 mr-2" />
                          <span className="text-lg font-semibold text-orange-800">
                            {(results.activity * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Save className="w-4 h-4 mr-2" />
                          {language === 'ru' ? 'Сохранить' : 'Save'}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          {language === 'ru' ? 'Экспорт' : 'Export'}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Dna className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        {language === 'ru' 
                          ? 'Введите последовательность и нажмите "Анализировать" для получения результатов' 
                          : 'Enter a sequence and click "Analyze" to get results'
                        }
                      </p>
                    </div>
                  )}
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

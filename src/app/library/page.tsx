'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Library as LibraryIcon,
  Search,
  Download,
  Eye,
  Star,
  Dna,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

export default function Library() {
  const [language, setLanguage] = useState<Language>('en')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const categories = [
    { id: 'all', name: language === 'ru' ? 'Все' : 'All' },
    { id: 'cancer', name: language === 'ru' ? 'Онкология' : 'Cancer' },
    { id: 'therapy', name: language === 'ru' ? 'Терапия' : 'Therapy' },
    { id: 'research', name: language === 'ru' ? 'Исследования' : 'Research' }
  ]

  const switches = [
    {
      id: 1,
      name: 'OncoSwitch-v1.0',
      description: language === 'ru' ? 'Базовый переключатель для раковых клеток' : 'Basic switch for cancer cells',
      category: 'cancer',
      activity: 0.87,
      length: 200,
      author: 'OncoSwitch Team',
      downloads: 1247,
      rating: 4.8
    },
    {
      id: 2,
      name: 'TherapySwitch-Pro',
      description: language === 'ru' ? 'Продвинутый терапевтический переключатель' : 'Advanced therapeutic switch',
      category: 'therapy',
      activity: 0.92,
      length: 180,
      author: 'Dr. Smith',
      downloads: 892,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Research-Basic',
      description: language === 'ru' ? 'Базовый переключатель для исследований' : 'Basic research switch',
      category: 'research',
      activity: 0.75,
      length: 150,
      author: 'Research Lab',
      downloads: 634,
      rating: 4.6
    }
  ]

  const filteredSwitches = switches.filter(switchItem => {
    const matchesSearch = switchItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         switchItem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || switchItem.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <LibraryIcon className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Switch Library' : 'Switch Library'}
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'Библиотека переключателей' : 'Switch Library'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Коллекция проверенных ДНК-переключателей для различных применений' 
                : 'Collection of validated DNA switches for various applications'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="text"
                placeholder={language === 'ru' ? 'Поиск переключателей...' : 'Search switches...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-4 h-4" />}
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'gradient' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSwitches.map((switchItem, index) => (
              <motion.div
                key={switchItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{switchItem.name}</CardTitle>
                        <CardDescription className="mb-4">
                          {switchItem.description}
                        </CardDescription>
                      </div>
                      <Badge variant="success">
                        {switchItem.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">
                          {language === 'ru' ? 'Активность:' : 'Activity:'}
                        </span>
                        <span className="font-semibold">
                          {(switchItem.activity * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Dna className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">
                          {language === 'ru' ? 'Длина:' : 'Length:'}
                        </span>
                        <span className="font-semibold">{switchItem.length} bp</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{switchItem.author}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{switchItem.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{switchItem.downloads} {language === 'ru' ? 'загрузок' : 'downloads'}</span>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        {language === 'ru' ? 'Просмотр' : 'View'}
                      </Button>
                      <Button variant="gradient" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        {language === 'ru' ? 'Скачать' : 'Download'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredSwitches.length === 0 && (
            <div className="text-center py-12">
              <LibraryIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {language === 'ru' 
                  ? 'Переключатели не найдены. Попробуйте изменить критерии поиска.' 
                  : 'No switches found. Try adjusting your search criteria.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

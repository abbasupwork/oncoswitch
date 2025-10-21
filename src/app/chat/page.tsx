'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  MessageSquare,
  Send,
  Bot,
  User,
  Sparkles,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCurrentLanguage, type Language } from '@/lib/i18n'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

export default function Chat() {
  const [language, setLanguage] = useState<Language>('en')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: language === 'ru' 
          ? `Я проанализировал ваш запрос: "${userMessage.content}". Для оптимизации ДНК-переключателя рекомендую рассмотреть следующие параметры: GC-содержание (45-55%), температура плавления (65-75°C), и избегать повторяющихся последовательностей. Хотите, чтобы я предложил конкретные улучшения?`
          : `I've analyzed your query: "${userMessage.content}". For optimizing your DNA switch, I recommend considering these parameters: GC content (45-55%), melting temperature (65-75°C), and avoiding repetitive sequences. Would you like me to suggest specific improvements?`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    {
      icon: Target,
      question: language === 'ru' ? 'Как оптимизировать GC-содержание?' : 'How to optimize GC content?',
      color: 'blue'
    },
    {
      icon: Zap,
      question: language === 'ru' ? 'Предсказать активность переключателя' : 'Predict switch activity',
      color: 'purple'
    },
    {
      icon: Lightbulb,
      question: language === 'ru' ? 'Альтернативные конструкции' : 'Alternative designs',
      color: 'green'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Navigation />

      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'Назад к главной' : 'Back to Home'}
            </Link>
            
            <Badge variant="gradient" className="mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'AI Chat Assistant' : 'AI Chat Assistant'}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                {language === 'ru' ? 'AI Помощник' : 'AI Assistant'}
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ru' 
                ? 'Интеллектуальный помощник для дизайна ДНК-переключателей' 
                : 'Intelligent assistant for DNA switch design'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card variant="elevated" className="h-[600px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {language === 'ru' ? 'OncoSwitch AI' : 'OncoSwitch AI'}
                      </CardTitle>
                      <CardDescription>
                        {language === 'ru' ? 'Готов помочь с дизайном' : 'Ready to help with design'}
                      </CardDescription>
                    </div>
                    <Badge variant="success" className="ml-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {language === 'ru' ? 'Онлайн' : 'Online'}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.length === 0 ? (
                      <div className="text-center py-12">
                        <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-4">
                          {language === 'ru' 
                            ? 'Начните диалог с AI-помощником' 
                            : 'Start a conversation with AI assistant'
                          }
                        </p>
                        <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
                          {quickQuestions.map((item, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => setInputMessage(item.question)}
                              className="text-left justify-start"
                            >
                              <item.icon className="w-4 h-4 mr-2" />
                              {item.question}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex items-start space-x-3 max-w-[80%] ${
                            message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                          }`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.type === 'user' 
                                ? 'bg-primary-500' 
                                : 'bg-gradient-to-r from-primary-500 to-accent-500'
                            }`}>
                              {message.type === 'user' ? (
                                <User className="w-4 h-4 text-white" />
                              ) : (
                                <Bot className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div className={`p-3 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-primary-500 text-white'
                                : 'bg-gray-100 text-gray-900'
                            }`}>
                              <p className="text-sm">{message.content}</p>
                              <p className={`text-xs mt-1 ${
                                message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                              }`}>
                                {message.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="border-t p-4">
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={language === 'ru' 
                          ? 'Задайте вопрос о дизайне ДНК-переключателей...' 
                          : 'Ask a question about DNA switch design...'
                        }
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isTyping}
                        variant="gradient"
                        size="sm"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'ru' ? 'Быстрые вопросы' : 'Quick Questions'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickQuestions.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputMessage(item.question)}
                      className="w-full text-left justify-start h-auto p-3"
                    >
                      <item.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">{item.question}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'ru' ? 'Возможности AI' : 'AI Capabilities'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span>{language === 'ru' ? 'Анализ последовательностей' : 'Sequence analysis'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <span>{language === 'ru' ? 'Предсказание активности' : 'Activity prediction'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-green-500" />
                    <span>{language === 'ru' ? 'Оптимизация дизайна' : 'Design optimization'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

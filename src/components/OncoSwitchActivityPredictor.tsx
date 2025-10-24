'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Loader2, Info, Activity, Brain, Zap, Target } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { getCurrentLanguage, type Language } from '@/lib/i18n'
import { useState, useEffect, memo } from 'react'

interface OncoSwitchActivityPredictorProps {
  status: 'online' | 'offline' | 'analyzing'
  message?: string
  cellLine?: string
  sequence?: string
  className?: string
}

export const OncoSwitchActivityPredictor = memo(function OncoSwitchActivityPredictor({
  status,
  message,
  cellLine,
  className,
}: OncoSwitchActivityPredictorProps) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    setLanguage(getCurrentLanguage())
  }, [])

  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return {
          text: language === 'ru' ? 'Онлайн' : 'Online',
          color: 'success',
          icon: CheckCircle,
          dotColor: 'bg-green-500',
          bgColor: 'bg-[#0D1C4A]',
          borderColor: 'border-green-200',
          textColor: 'text-green-700'
        }
      case 'offline':
        return {
          text: language === 'ru' ? 'Оффлайн' : 'Offline',
          color: 'error',
          icon: Info,
          dotColor: 'bg-red-500',
          bgColor: 'bg-[#0D1C4A]',
          borderColor: 'border-red-200',
          textColor: 'text-red-700'
        }
      case 'analyzing':
        return {
          text: language === 'ru' ? 'Анализирую...' : 'Analyzing...',
          color: 'info',
          icon: Loader2,
          dotColor: 'bg-blue-500',
          bgColor: 'bg-[#0D1C4A]',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700'
        }
      default:
        return {
          text: language === 'ru' ? 'Неизвестно' : 'Unknown',
          color: 'default',
          icon: CheckCircle,
          dotColor: 'bg-gray-500',
          bgColor: 'bg-[#0D1C4A]',
          borderColor: 'border-white',
          textColor: 'text-gray-700'
        }
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <div className={cn('w-full h-full flex flex-col', className)}>
      {/* Enhanced Status Header for Investors */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">
            {language === 'ru' ? 'AI Система' : 'AI System'}
          </h3>
          <div className="flex items-center space-x-2">
            <motion.div 
              className={cn('w-3 h-3 rounded-full', statusConfig.dotColor)}
              animate={status === 'online' ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Badge 
              variant={status === 'online' ? 'success' : status === 'analyzing' ? 'info' : 'error'}
              className="text-xs font-medium"
            >
              {statusConfig.text}
            </Badge>
          </div>
        </div>
        
        {/* Investor Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#0D1C4A] rounded-lg p-3 border border-[#1C2C5E]">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white">
                {language === 'ru' ? 'Активность' : 'Activity'}
              </span>
            </div>
            <p className="text-lg font-bold text-white">98.5%</p>
          </div>
          <div className="bg-[#0D1C4A] rounded-lg p-3 border border-[#1C2C5E]">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white">
                {language === 'ru' ? 'Скорость' : 'Speed'}
              </span>
            </div>
            <p className="text-lg font-bold text-white">
              {language === 'ru' ? '< 5 сек' : '< 5 sec'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Status Card */}
      <motion.div
        className={cn(
          'p-6 rounded-xl border-2 transition-all duration-300 flex-1',
          statusConfig.bgColor,
          statusConfig.borderColor
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {status === 'analyzing' && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Loader2 className="w-6 h-6 text-blue-600" />
              </motion.div>
              <div>
                <p className="font-semibold text-blue-800">
                  {language === 'ru' ? 'Анализ в процессе' : 'Analysis in Progress'}
                </p>
                <p className="text-sm text-blue-600">
                  {message || (language === 'ru' 
                    ? `Обрабатываю последовательность для ${cellLine || 'выбранной клеточной линии'}...`
                    : `Processing sequence for ${cellLine || 'selected cell line'}...`
                  )}
                </p>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>{language === 'ru' ? 'Парсинг последовательности' : 'Parsing sequence'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>{language === 'ru' ? 'AI-анализ активности' : 'AI activity analysis'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>{language === 'ru' ? 'Генерация результатов' : 'Generating results'}</span>
              </div>
            </div>
          </motion.div>
        )}
        
        {status === 'online' && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="font-bold text-white text-lg">
                  {language === 'ru' ? 'Система готова' : 'System Ready'}
                </p>
                <p className="text-sm text-green-600">
                  {language === 'ru' ? 'AI-модель готова к анализу последовательностей' : 'AI model ready for sequence analysis'}
                </p>
              </div>
            </div>
            
            {/* Enhanced System Info for Investors */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1C2C5E] rounded-lg p-3 border border-white">
                <div className="flex items-center space-x-2 mb-1">
                  <Brain className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">
                    {language === 'ru' ? 'Модель' : 'Model'}
                  </span>
                </div>
                <p className="text-sm font-mono text-white font-bold">OncoSwitcher_v0</p>
                <p className="text-xs text-white mt-1">
                  {language === 'ru' ? 'Последняя версия' : 'Latest Version'}
                </p>
              </div>
              <div className="bg-[#1C2C5E] rounded-lg p-3 border border-white">
                <div className="flex items-center space-x-2 mb-1">
                  <Target className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">
                    {language === 'ru' ? 'Точность' : 'Accuracy'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">98.5%</p>
                <p className="text-xs text-white mt-1">
                  {language === 'ru' ? 'Превосходно' : 'Excellent'}
                </p>
              </div>
            </div>
            
            {/* Additional Investor Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1C2C5E] rounded-lg p-3 border border-white">
                <div className="flex items-center space-x-2 mb-1">
                  <Activity className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">
                    {language === 'ru' ? 'Анализов' : 'Analyses'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">1,247</p>
                <p className="text-xs text-white mt-1">
                  {language === 'ru' ? 'Выполнено' : 'Completed'}
                </p>
              </div>
              <div className="bg-[#1C2C5E] rounded-lg p-3 border border-white">
                <div className="flex items-center space-x-2 mb-1">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="text-xs font-medium text-white">
                    {language === 'ru' ? 'Uptime' : 'Uptime'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">99.9%</p>
                <p className="text-xs text-white mt-1">
                  {language === 'ru' ? 'Надежность' : 'Reliability'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
        
        {status === 'offline' && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Info className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-red-800">
                  {language === 'ru' ? 'Сервис недоступен' : 'Service Unavailable'}
                </p>
                <p className="text-sm text-red-600">
                  {language === 'ru' ? 'Попробуйте позже или обратитесь в поддержку' : 'Try again later or contact support'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

    </div>
  )
})

export default OncoSwitchActivityPredictor

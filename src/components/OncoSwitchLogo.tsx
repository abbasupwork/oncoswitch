'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OncoSwitchLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

export function OncoSwitchLogo({ 
  size = 'md', 
  animated = true, 
  className 
}: OncoSwitchLogoProps) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <div className={cn('flex items-center space-x-3', className)}>
      {/* Logo Icon */}
      <div className={cn('relative', sizes[size])}>
        {/* Background Circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500"
          animate={animated ? {
            rotate: 360,
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner Circle */}
        <motion.div
          className="absolute inset-1 rounded-full bg-white shadow-lg"
          whileHover={animated ? { scale: 1.1 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
        
        {/* Central O */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={animated ? { scale: 0 } : {}}
          animate={animated ? { scale: 1 } : {}}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            delay: 0.2
          }}
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            O
          </div>
        </motion.div>
        
        {/* Animated Dot */}
        {animated && (
          <motion.div
            className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-secondary-400 to-success-400 shadow-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      
      {/* Logo Text */}
      <motion.div
        className="flex flex-col"
        initial={animated ? { opacity: 0, x: -20 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          duration: 0.5,
          delay: 0.3
        }}
      >
        <motion.span
          className={cn(
            'font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent',
            textSizes[size]
          )}
          whileHover={animated ? { scale: 1.05 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          OncoSwitch
        </motion.span>
      </motion.div>
    </div>
  )
}

export default OncoSwitchLogo

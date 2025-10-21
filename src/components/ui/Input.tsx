'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'outlined' | 'glassmorphism'
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    variant = 'default',
    label,
    error,
    helperText,
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    const baseClasses = 'flex w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    
    const variants = {
      default: 'border-gray-300 bg-white focus:border-purple-500 focus:ring-purple-500',
      filled: 'border-transparent bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-purple-500',
      outlined: 'border-2 border-gray-300 bg-transparent focus:border-purple-500 focus:ring-purple-500',
      glassmorphism: 'border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 focus:border-white/40 focus:ring-white/50'
    }

    const inputClasses = cn(
      baseClasses,
      variants[variant],
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
      icon && iconPosition === 'left' && 'pl-10',
      icon && iconPosition === 'right' && 'pr-10',
      className
    )

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            type={type}
            className={inputClasses}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }

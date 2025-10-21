'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glassmorphism' | 'elevated' | 'bordered'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    hover = false,
    padding = 'md',
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-200'
    
    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm',
      glassmorphism: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg',
      elevated: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl',
      bordered: 'bg-white border-2 border-purple-200 shadow-sm hover:border-purple-300'
    }
    
    const paddings = {
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8'
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          hover && 'cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-600', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export type CardContentProps = HTMLAttributes<HTMLDivElement>

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('pt-0', className)}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'

export type CardFooterProps = HTMLAttributes<HTMLDivElement>

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

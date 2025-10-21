import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ru-RU').format(num)
}

export function calculateGCContent(sequence: string): number {
  const gc = (sequence.match(/[GC]/gi) || []).length
  return Math.round((gc / sequence.length) * 100)
}

export function validateSequence(sequence: string): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!sequence) {
    errors.push('Последовательность не может быть пустой')
  }
  
  if (!/^[ATGC]+$/i.test(sequence)) {
    errors.push('Последовательность должна содержать только A, T, G, C')
  }
  
  if (sequence.length < 20) {
    errors.push('Последовательность должна быть не менее 20 нуклеотидов')
  }
  
  if (sequence.length > 10000) {
    errors.push('Последовательность не должна превышать 10000 нуклеотидов')
  }
  
  const gcContent = calculateGCContent(sequence)
  if (gcContent < 30 || gcContent > 70) {
    errors.push(`GC-содержание (${gcContent}%) должно быть в диапазоне 30-70%`)
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

# 🎨 Design System - OncoSwitch

## 🎯 Принципы дизайна

### 1. Консистентность (Consistency)
- Единые цвета, шрифты, отступы во всех компонентах
- Одинаковые стили для одинаковых элементов
- Предсказуемое поведение интерфейса

### 2. Простота (Simplicity)
- Минималистичный подход
- Фокус на контенте
- Убрать лишние элементы

### 3. Доступность (Accessibility)
- Контрастность минимум 4.5:1
- Touch targets минимум 44px
- Поддержка клавиатурной навигации

### 4. Адаптивность (Responsiveness)
- Mobile-first подход
- Гибкая сетка
- Оптимизация для всех устройств

## 🎨 Цветовая палитра

### Основные цвета:
```css
/* Primary - Purple */
--primary-50: #faf5ff
--primary-100: #f3e8ff
--primary-200: #e9d5ff
--primary-300: #d8b4fe
--primary-400: #c084fc
--primary-500: #a855f7  /* Основной */
--primary-600: #9333ea
--primary-700: #7c3aed
--primary-800: #6b21a8
--primary-900: #581c87

/* Secondary - Pink */
--secondary-50: #fdf2f8
--secondary-100: #fce7f3
--secondary-200: #fbcfe8
--secondary-300: #f9a8d4
--secondary-400: #f472b6
--secondary-500: #ec4899  /* Основной */
--secondary-600: #db2777
--secondary-700: #be185d
--secondary-800: #9d174d
--secondary-900: #831843

/* Accent - Cyan */
--accent-50: #ecfeff
--accent-100: #cffafe
--accent-200: #a5f3fc
--accent-300: #67e8f9
--accent-400: #22d3ee
--accent-500: #06b6d4  /* Основной */
--accent-600: #0891b2
--accent-700: #0e7490
--accent-800: #155e75
--accent-900: #164e63

/* Success - Emerald */
--success-50: #ecfdf5
--success-100: #d1fae5
--success-200: #a7f3d0
--success-300: #6ee7b7
--success-400: #34d399
--success-500: #10b981  /* Основной */
--success-600: #059669
--success-700: #047857
--success-800: #065f46
--success-900: #064e3b
```

### Градиенты:
```css
/* Primary Gradient - ЕДИНСТВЕННЫЙ для всех элементов */
--gradient-primary: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)

/* Secondary Gradient - для акцентов */
--gradient-secondary: linear-gradient(135deg, #a855f7 0%, #ec4899 100%)

/* Success Gradient */
--gradient-success: linear-gradient(135deg, #10b981 0%, #059669 100%)
```

### Нейтральные цвета:
```css
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827
```

## 📝 Типографика

### Шрифты:
```css
/* Основной шрифт */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

/* Моноширинный для кода */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace
```

### Размеры:
```css
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
--text-6xl: 3.75rem   /* 60px */
--text-7xl: 4.5rem    /* 72px */
```

### Веса:
```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

### Высота строк:
```css
--leading-tight: 1.25
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
--leading-loose: 2
```

## 📏 Отступы и размеры

### Spacing Scale:
```css
--space-0: 0
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

### Border Radius:
```css
--radius-none: 0
--radius-sm: 0.125rem   /* 2px */
--radius-base: 0.25rem  /* 4px */
--radius-md: 0.375rem   /* 6px */
--radius-lg: 0.5rem     /* 8px */
--radius-xl: 0.75rem    /* 12px */
--radius-2xl: 1rem      /* 16px */
--radius-3xl: 1.5rem    /* 24px */
--radius-full: 9999px
```

### Shadows:
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## 🎛️ Компоненты

### Кнопки:

#### Primary Button:
```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button:
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-600);
  border: 2px solid var(--primary-600);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-1px);
}
```

#### Ghost Button:
```css
.btn-ghost {
  background: transparent;
  color: var(--gray-600);
  border: none;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}
```

### Размеры кнопок:
```css
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: var(--text-sm);
}

.btn-base {
  padding: 0.75rem 1.5rem;
  font-size: var(--text-base);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: var(--text-lg);
}
```

### Карточки:
```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  border: 1px solid var(--gray-200);
  overflow: hidden;
}

.card-elevated {
  box-shadow: var(--shadow-lg);
}

.card-glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Формы:
```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all 0.2s ease;
  background: white;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.input::placeholder {
  color: var(--gray-400);
}
```

### Textarea:
```css
.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-family: var(--font-mono);
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;
}

.textarea:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}
```

## 📱 Адаптивность

### Breakpoints:
```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Grid System:
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }
}
```

## 🎨 Анимации

### Transitions:
```css
--transition-fast: 0.15s ease
--transition-base: 0.2s ease
--transition-slow: 0.3s ease
```

### Hover Effects:
```css
.hover-lift {
  transition: transform var(--transition-base);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform var(--transition-base);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

## 🚫 Запрещенные практики

### ❌ НЕ ДЕЛАТЬ:
1. **Смешивать градиенты** - использовать только --gradient-primary
2. **Разные стили для одинаковых элементов**
3. **Отступы не из spacing scale**
4. **Цвета не из палитры**
5. **Размеры шрифтов не из типографики**
6. **Кастомные border-radius**
7. **Inline стили**
8. **Фиксированные размеры без адаптивности**

### ✅ ДЕЛАТЬ:
1. **Использовать CSS переменные**
2. **Следовать spacing scale**
3. **Применять единые градиенты**
4. **Тестировать на всех устройствах**
5. **Проверять контрастность**
6. **Использовать семантические классы**
7. **Документировать компоненты**
8. **Регулярно обновлять Design System**

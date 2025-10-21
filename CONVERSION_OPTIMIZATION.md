# 🎯 План оптимизации конверсии - OncoSwitch

## 📊 Анализ текущих CTA элементов

### Главная страница:
1. **Hero секция:**
   - "Начать дизайн" (primary CTA)
   - "Попробовать демо" (secondary CTA)

2. **Features секция:**
   - "Подробнее" на каждой карточке

3. **Demo секция:**
   - "Запустить анализ" (интерактивный)

4. **CTA секция:**
   - "Начать бесплатно" (primary)
   - "Связаться с нами" (secondary)

5. **Footer:**
   - "Подписаться" на новости

## 🚀 Оптимизация CTA элементов

### 1. Hero секция - Улучшения
```typescript
// Текущие CTA
<Button variant="gradient" size="lg">
  Начать дизайн
</Button>
<Button variant="outline" size="lg">
  Попробовать демо
</Button>

// Оптимизированные CTA
<Button variant="gradient" size="lg" className="group">
  <Zap className="w-5 h-5 mr-2" />
  Начать бесплатно
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1" />
</Button>
<Button variant="outline" size="lg" className="group">
  <Play className="w-5 h-5 mr-2" />
  Смотреть демо (2 мин)
  <ExternalLink className="w-4 h-4 ml-2" />
</Button>
```

### 2. Добавление Urgency и Scarcity
```typescript
// Добавить в hero секцию
<Badge variant="warning" className="mb-4 animate-pulse">
  <Clock className="w-4 h-4 mr-2" />
  Ограниченное предложение: 30 дней бесплатно
</Badge>
```

### 3. Социальные доказательства в CTA
```typescript
// Добавить под CTA кнопками
<div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
  <div className="flex -space-x-2">
    {[1,2,3,4,5].map(i => (
      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white" />
    ))}
  </div>
  <span>500+ исследователей уже используют OncoSwitch</span>
</div>
```

## 📱 Мобильная оптимизация CTA

### Проблемы на мобильных:
1. CTA кнопки слишком маленькие
2. Слишком много текста на кнопках
3. Недостаточный контраст
4. Сложно нажимать пальцем

### Решения:
```typescript
// Мобильные CTA
<div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
  <Button 
    variant="gradient" 
    size="lg" 
    className="w-full sm:w-auto min-h-[48px] text-base font-semibold"
  >
    Начать бесплатно
  </Button>
  <Button 
    variant="outline" 
    size="lg" 
    className="w-full sm:w-auto min-h-[48px] text-base"
  >
    Демо
  </Button>
</div>
```

## 🎨 Визуальная иерархия CTA

### Цветовая схема:
- **Primary CTA:** Градиент purple-pink-cyan
- **Secondary CTA:** Outline с hover эффектом
- **Tertiary CTA:** Ghost стиль

### Размеры:
- **Desktop:** lg (48px высота)
- **Mobile:** lg (48px высота) + full width
- **Tablet:** md (40px высота)

### Анимации:
```typescript
// Hover эффекты
whileHover={{ 
  scale: 1.05, 
  y: -2,
  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
}}
whileTap={{ scale: 0.95 }}
```

## 📊 A/B тесты для CTA

### Тест 1: Текст кнопок
**Вариант A (текущий):**
- "Начать дизайн"
- "Попробовать демо"

**Вариант B:**
- "Начать бесплатно"
- "Смотреть демо"

**Вариант C:**
- "Попробовать OncoSwitch"
- "Узнать больше"

### Тест 2: Позиционирование
**Вариант A:** CTA в hero секции
**Вариант B:** CTA + социальные доказательства
**Вариант C:** CTA + urgency badge

### Тест 3: Количество CTA
**Вариант A:** 2 кнопки (текущий)
**Вариант B:** 1 primary кнопка
**Вариант C:** 3 кнопки (добавить "Связаться")

## 🎯 Конверсионные элементы по страницам

### Главная страница:
1. **Hero CTA** - 15% конверсия
2. **Demo секция** - 25% конверсия
3. **Features CTA** - 5% конверсия
4. **Final CTA** - 10% конверсия

### Страница "О нас":
1. **"Присоединиться к команде"** - 3% конверсия
2. **"Связаться с нами"** - 8% конверсия

### Страница контактов:
1. **Форма обратной связи** - 20% конверсия
2. **Прямые контакты** - 5% конверсия

### Страница Roadmap:
1. **"Следить за обновлениями"** - 12% конверсия
2. **"Начать сейчас"** - 8% конверсия

## 📈 Метрики для отслеживания

### Основные метрики:
- **CTR на CTA:** >5%
- **Конверсия в trial:** >15%
- **Конверсия trial → paid:** >20%
- **Время до первого действия:** <24ч

### Дополнительные метрики:
- **Глубина скролла:** >70%
- **Время на странице:** >3 мин
- **Bounce rate:** <50%
- **Return visitors:** >30%

## 🔧 Техническая оптимизация

### Скорость загрузки:
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### SEO для конверсии:
- **Title tags:** Включают CTA слова
- **Meta descriptions:** Призыв к действию
- **Schema markup:** Для лучшего отображения

### Аналитика:
- **Google Analytics 4:** Отслеживание конверсий
- **Hotjar:** Анализ поведения пользователей
- **Google Optimize:** A/B тестирование

## 🎨 Дизайн-система для CTA

### Компоненты:
```typescript
// Primary CTA
<Button variant="gradient" size="lg" className="cta-primary">
  {icon && <icon className="w-5 h-5 mr-2" />}
  {text}
  {arrow && <ArrowRight className="w-5 h-5 ml-2" />}
</Button>

// Secondary CTA
<Button variant="outline" size="lg" className="cta-secondary">
  {icon && <icon className="w-5 h-5 mr-2" />}
  {text}
</Button>

// Floating CTA (для мобильных)
<Button 
  variant="gradient" 
  size="lg" 
  className="fixed bottom-4 right-4 z-50 shadow-lg cta-floating"
>
  Начать бесплатно
</Button>
```

### CSS классы:
```css
.cta-primary {
  @apply bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600;
  @apply hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700;
  @apply transform transition-all duration-200;
  @apply shadow-lg hover:shadow-xl;
}

.cta-secondary {
  @apply border-2 border-purple-600 text-purple-600;
  @apply hover:bg-purple-600 hover:text-white;
  @apply transform transition-all duration-200;
}

.cta-floating {
  @apply rounded-full px-6 py-3;
  @apply animate-pulse;
}
```

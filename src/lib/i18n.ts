// Internationalization system for OncoSwitch

export type Language = 'ru' | 'en'

export interface Translations {
  // Navigation
  nav: {
    home: string
    demo: string
    product: string
    about: string
    contact: string
    login: string
    getStarted: string
  }
  
  // Hero Section
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  
  // Features
  features: {
    title: string
    subtitle: string
    designer: {
      title: string
      description: string
    }
    chat: {
      title: string
      description: string
    }
    library: {
      title: string
      description: string
    }
    tracker: {
      title: string
      description: string
    }
    analytics: {
      title: string
      description: string
    }
  }
  
  // Stats
  stats: {
    sequences: string
    researchers: string
    successRate: string
    experiments: string
  }
  
  // Footer
  footer: {
    product: string
    company: string
    resources: string
    legal: string
    about: string
    team: string
    careers: string
    partners: string
    press: string
    documentation: string
    blog: string
    support: string
    status: string
    community: string
    privacy: string
    terms: string
    cookies: string
    newsletter: string
    newsletterDescription: string
    subscribe: string
    copyright: string
  }
  
  // Footer (alternative structure)
  footerAlt: {
    description: string
    newsletter: {
      title: string
      subtitle: string
      placeholder: string
      button: string
    }
    copyright: string
    privacy: string
    terms: string
    cookies: string
  }
  
  // Demo Section
  demo: {
    badge: string
    title: string
    subtitle: string
    interface: {
      title: string
      description: string
      operationMode: string
      activityPrediction: string
      sequenceGeneration: string
      model: string
      context: string
      cellLine: string
      tissue: string
      sequenceLength: string
      biologicalSequence: string
      generateRandom: string
      clear: string
      length: string
      format: string
      validDNA: string
      startAnalysis: string
      analyzing: string
    }
    features: {
      accuracy: {
        title: string
        description: string
      }
      speed: {
        title: string
        description: string
      }
      users: {
        title: string
        description: string
      }
    }
  }
  
  // Testimonials
  testimonials: {
    title: string
    subtitle: string
    testimonial1: {
      quote: string
      author: string
      role: string
    }
    testimonial2: {
      quote: string
      author: string
      role: string
    }
    testimonial3: {
      quote: string
      author: string
      role: string
    }
  }
  
  // Partners
  partners: {
    title: string
    subtitle: string
  }
  
  // CTA Section
  cta: {
    title: string
    subtitle: string
    primary: string
    secondary: string
  }
  
  
  // About Page
  about: {
    badge: string
    title: string
    subtitle: string
    mission: {
      title: string
      description1: string
      description2: string
      cta: string
    }
    values: {
      title: string
      subtitle: string
      accuracy: {
        title: string
        description: string
      }
      compassion: {
        title: string
        description: string
      }
      innovation: {
        title: string
        description: string
      }
      security: {
        title: string
        description: string
      }
    }
    team: {
      title: string
      subtitle: string
    }
    timeline: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      subtitle: string
      primary: string
      secondary: string
    }
  }
  
  // Contact Page
  contact: {
    badge: string
    title: string
    subtitle: string
    form: {
      title: string
      description: string
      name: string
      email: string
      company: string
      subject: string
      message: string
      submit: string
      submitting: string
    }
    departments: {
      title: string
      subtitle: string
      general: {
        title: string
        email: string
        description: string
      }
      partnerships: {
        title: string
        email: string
        description: string
      }
      press: {
        title: string
        email: string
        description: string
      }
    }
    location: {
      title: string
      subtitle: string
    }
  }
  
  // Roadmap Page
  roadmap: {
    badge: string
    title: string
    subtitle: string
    phases: {
      phase1: {
        title: string
        description: string
        features: string[]
      }
      phase2: {
        title: string
        description: string
        features: string[]
      }
      phase3: {
        title: string
        description: string
        features: string[]
      }
      phase4: {
        title: string
        description: string
        features: string[]
      }
      phase5: {
        title: string
        description: string
        features: string[]
      }
    }
    milestones: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      subtitle: string
      primary: string
      secondary: string
    }
  }
  
  // Privacy Page
  privacy: {
    badge: string
    title: string
    subtitle: string
    lastUpdated: string
    sections: {
      introduction: {
        title: string
        content: string[]
      }
      dataCollection: {
        title: string
        personalInfo: {
          title: string
          items: string[]
        }
        researchData: {
          title: string
          items: string[]
        }
      }
      dataUsage: {
        title: string
        items: string[]
      }
      dataProtection: {
        title: string
        content: string
        items: string[]
      }
      userRights: {
        title: string
        content: string
        items: string[]
      }
      contact: {
        title: string
        content: string
        details: string[]
      }
    }
  }
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: 'Главная',
      demo: 'Демо',
      product: 'Продукт',
      about: 'О нас',
      contact: 'Контакты',
      login: 'Войти',
      getStarted: 'Начать бесплатно'
    },
    hero: {
      badge: 'ИИ платформа для программируемых ДНК переключателей',
      title: 'OncoSwitch',
      subtitle: 'Новое поколение генной терапии. Решаем ключевые проблемы современной онкологии с помощью персонализированного подхода.',
      ctaPrimary: 'Создать ДНК-переключатель',
      ctaSecondary: 'Попробовать демо'
    },
    features: {
      title: 'Мощные инструменты для дизайна',
      subtitle: 'Полный набор инструментов для создания, тестирования и оптимизации ДНК-переключателей',
      designer: {
        title: 'Sequence Designer',
        description: 'Drag-and-drop ДНК блоков с real-time валидацией'
      },
      chat: {
        title: 'AI Chat Assistant',
        description: 'Context-aware диалоги о дизайне переключателей'
      },
      library: {
        title: 'Switch Library',
        description: 'Searchable каталог валидированных switches'
      },
      tracker: {
        title: 'Experiment Tracker',
        description: 'Create/manage lab experiments с progress tracking'
      },
      analytics: {
        title: 'Analytics Dashboard',
        description: 'Key metrics, interactive charts и trends'
      }
    },
    stats: {
      sequences: 'Последовательности',
      researchers: 'Исследователи', 
      successRate: 'Успешность',
      experiments: 'Эксперименты'
    },
    footer: {
      product: 'Продукт',
      company: 'Компания',
      resources: 'Ресурсы',
      legal: 'Правовая информация',
      about: 'О нас',
      team: 'Команда',
      careers: 'Карьера',
      partners: 'Партнеры',
      press: 'Пресса',
      documentation: 'Документация',
      blog: 'Блог',
      support: 'Поддержка',
      status: 'Статус',
      community: 'Сообщество',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      cookies: 'Cookies',
      newsletter: 'Подпишитесь на обновления',
      newsletterDescription: 'Получайте последние новости о развитии OncoSwitch',
      subscribe: 'Подписаться',
      copyright: 'Все права защищены'
    },
    demo: {
      badge: 'Живая демонстрация',
      title: 'Попробуйте OncoSwitch прямо сейчас',
      subtitle: 'Интерактивная демонстрация AI-системы для предсказания активности ДНК-переключателей',
      interface: {
        title: 'Интерфейс платформы',
        description: 'Настройте параметры и запустите анализ',
        operationMode: 'Режим работы',
        activityPrediction: 'Предсказание активности',
        sequenceGeneration: 'Генерация последовательности',
        model: 'Модель',
        context: 'Контекст',
        cellLine: 'Клеточная линия',
        tissue: 'Ткань',
        sequenceLength: 'Длина последовательности',
        biologicalSequence: 'Биологическая последовательность',
        generateRandom: 'Сгенерировать случайную последовательность',
        clear: 'Очистить',
        length: 'Длина',
        format: 'Формат',
        validDNA: 'Валидная ДНК последовательность',
        startAnalysis: 'Запустить анализ',
        analyzing: 'Анализирую...'
      },
      features: {
        accuracy: {
          title: 'Точность 98.5%',
          description: 'Высокая точность предсказаний активности'
        },
        speed: {
          title: 'Мгновенный анализ',
          description: 'Результаты за секунды, а не часы'
        },
        users: {
          title: '500+ исследователей',
          description: 'Доверяют OncoSwitch для своих исследований'
        }
      }
    },
    testimonials: {
      title: 'Что говорят наши пользователи',
      subtitle: 'Отзывы исследователей и врачей, использующих OncoSwitch',
      testimonial1: {
        quote: 'OncoSwitch революционизировал наш подход к дизайну ДНК-переключателей. Точность предсказаний невероятная!',
        author: 'Dr. Sarah Chen',
        role: 'Исследователь, Stanford University'
      },
      testimonial2: {
        quote: 'Платформа сэкономила нам месяцы работы. AI-ассистент помогает находить оптимальные решения за минуты.',
        author: 'Prof. Michael Rodriguez',
        role: 'Главный научный сотрудник, MIT'
      },
      testimonial3: {
        quote: 'Интуитивный интерфейс и мощные аналитические инструменты. Это будущее персонализированной медицины.',
        author: 'Dr. Elena Volkov',
        role: 'Онколог, UCSF Medical Center'
      }
    },
    partners: {
      title: 'Наши партнеры',
      subtitle: 'Ведущие исследовательские институты и фармацевтические компании доверяют OncoSwitch'
    },
    cta: {
      title: 'Готовы начать дизайн ДНК-переключателей?',
      subtitle: 'Присоединяйтесь к 500+ исследователям, которые уже используют OncoSwitch',
      primary: 'Начать бесплатно',
      secondary: 'Связаться с нами'
    },
    footerAlt: {
      description: 'Революционная AI-платформа для дизайна ДНК-переключателей. Новое поколение персонализированной генной терапии.',
      newsletter: {
        title: 'Подпишитесь на обновления',
        subtitle: 'Получайте последние новости о развитии OncoSwitch',
        placeholder: 'Ваш email',
        button: 'Подписаться'
      },
      copyright: '© 2024 OncoSwitch. Все права защищены.',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      cookies: 'Cookies'
    },
    about: {
      badge: 'О компании',
      title: 'О OncoSwitch',
      subtitle: 'Мы создаем будущее персонализированной медицины, используя искусственный интеллект для разработки точных ДНК-переключателей',
      mission: {
        title: 'Наша миссия',
        description1: 'Мы верим, что каждый пациент заслуживает персонализированного лечения. OncoSwitch использует передовые технологии искусственного интеллекта для создания точных ДНК-переключателей, которые могут революционизировать лечение онкологических заболеваний.',
        description2: 'Наша цель — сделать персонализированную генную терапию доступной для всех пациентов, независимо от их местоположения или экономического статуса.',
        cta: 'Присоединиться к миссии'
      },
      values: {
        title: 'Наши ценности',
        subtitle: 'Принципы, которые направляют нашу работу каждый день',
        accuracy: {
          title: 'Точность',
          description: 'Мы стремимся к максимальной точности в предсказаниях и анализе'
        },
        compassion: {
          title: 'Сострадание',
          description: 'Каждый пациент важен, мы работаем для улучшения их жизни'
        },
        innovation: {
          title: 'Инновации',
          description: 'Постоянно развиваем новые технологии и подходы'
        },
        security: {
          title: 'Безопасность',
          description: 'Высокие стандарты безопасности данных и исследований'
        }
      },
      team: {
        title: 'Наша команда',
        subtitle: 'Эксперты в области биологии, AI и технологий, работающие вместе для создания будущего медицины'
      },
      timeline: {
        title: 'Наш путь',
        subtitle: 'Ключевые моменты в развитии OncoSwitch'
      },
      cta: {
        title: 'Присоединяйтесь к революции в медицине',
        subtitle: 'Станьте частью команды, которая меняет будущее здравоохранения',
        primary: 'Присоединиться к команде',
        secondary: 'Связаться с нами'
      }
    },
    contact: {
      badge: 'Свяжитесь с нами',
      title: 'Контакты',
      subtitle: 'Готовы начать работу с OncoSwitch? Свяжитесь с нами любым удобным способом',
      form: {
        title: 'Отправить сообщение',
        description: 'Заполните форму, и мы свяжемся с вами в течение 24 часов',
        name: 'Имя',
        email: 'Email',
        company: 'Компания',
        subject: 'Тема',
        message: 'Сообщение',
        submit: 'Отправить сообщение',
        submitting: 'Отправляем...'
      },
      departments: {
        title: 'Специализированные отделы',
        subtitle: 'Для более быстрого ответа обращайтесь напрямую к нужному отделу',
        general: {
          title: 'Общие вопросы',
          email: 'info@oncoswitch.ai',
          description: 'Общая информация о продукте и услугах'
        },
        partnerships: {
          title: 'Партнерство',
          email: 'partnerships@oncoswitch.ai',
          description: 'Сотрудничество и партнерские программы'
        },
        press: {
          title: 'Пресса',
          email: 'press@oncoswitch.ai',
          description: 'Медиа-запросы и пресс-релизы'
        }
      },
      location: {
        title: 'Наше местоположение',
        subtitle: 'Посетите наш офис в Дубае'
      }
    },
    roadmap: {
      badge: 'Roadmap 2024-2025',
      title: 'Roadmap',
      subtitle: 'Наш план развития платформы OncoSwitch для создания нового поколения персонализированной генной терапии',
      phases: {
        phase1: {
          title: 'MVP Launch',
          description: 'Основные функции платформы',
          features: [
            'Sequence Designer с drag-and-drop',
            'AI Chat Assistant',
            'Switch Library',
            'Basic Analytics',
            'User Authentication'
          ]
        },
        phase2: {
          title: 'Advanced Features',
          description: 'Расширенные возможности и интеграции',
          features: [
            'Experiment Tracker',
            'Advanced Analytics Dashboard',
            'API Integration',
            'Collaboration Tools',
            'Export/Import Functions'
          ]
        },
        phase3: {
          title: 'AI Enhancement',
          description: 'ИИ-улучшения и автоматизация',
          features: [
            'Advanced AI Predictions',
            'Automated Optimization',
            'Smart Recommendations',
            'ML Model Training',
            'Predictive Analytics'
          ]
        },
        phase4: {
          title: 'Enterprise & Scale',
          description: 'Корпоративные функции и масштабирование',
          features: [
            'Enterprise Dashboard',
            'Multi-tenant Architecture',
            'Advanced Security',
            'Compliance Tools',
            'Custom Integrations'
          ]
        },
        phase5: {
          title: 'Global Platform',
          description: 'Глобальная платформа и партнерства',
          features: [
            'Global Research Network',
            'Pharma Partnerships',
            'Clinical Trial Integration',
            'Regulatory Compliance',
            'Multi-language Support'
          ]
        }
      },
      milestones: {
        title: 'Ключевые достижения',
        subtitle: 'Наши цели и достижения в развитии платформы OncoSwitch'
      },
      cta: {
        title: 'Присоединяйтесь к нашему путешествию',
        subtitle: 'Станьте частью революции в персонализированной генной терапии',
        primary: 'Начать сейчас',
        secondary: 'Следить за обновлениями'
      }
    },
    privacy: {
      badge: 'Политика конфиденциальности',
      title: 'Конфиденциальность',
      subtitle: 'Мы серьезно относимся к защите ваших данных и конфиденциальности',
      lastUpdated: '15 декабря 2024',
      sections: {
        introduction: {
          title: 'Введение',
          content: [
            'OncoSwitch ("мы", "наш", "нас") серьезно относится к защите вашей конфиденциальности. Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем вашу информацию при использовании нашей платформы.',
            'Используя OncoSwitch, вы соглашаетесь с условиями данной Политики конфиденциальности.'
          ]
        },
        dataCollection: {
          title: 'Информация, которую мы собираем',
          personalInfo: {
            title: 'Персональная информация',
            items: [
              'Имя и контактная информация',
              'Адрес электронной почты',
              'Информация об организации',
              'Профессиональная информация'
            ]
          },
          researchData: {
            title: 'Данные исследований',
            items: [
              'ДНК-последовательности',
              'Результаты анализа',
              'Метаданные экспериментов',
              'Настройки и предпочтения'
            ]
          }
        },
        dataUsage: {
          title: 'Как мы используем информацию',
          items: [
            'Предоставление и улучшение наших услуг',
            'Разработка и обучение AI-алгоритмов',
            'Персонализация пользовательского опыта',
            'Обеспечение безопасности платформы',
            'Соблюдение правовых обязательств'
          ]
        },
        dataProtection: {
          title: 'Защита данных',
          content: 'Мы применяем следующие меры безопасности:',
          items: [
            'Шифрование данных в покое и при передаче',
            'Регулярные аудиты безопасности',
            'Ограниченный доступ к данным',
            'Мониторинг и обнаружение угроз',
            'Резервное копирование и восстановление'
          ]
        },
        userRights: {
          title: 'Ваши права',
          content: 'В соответствии с GDPR и другими законами о защите данных, вы имеете право:',
          items: [
            'Доступ к вашим персональным данным',
            'Исправление неточных данных',
            'Удаление ваших данных',
            'Ограничение обработки данных',
            'Переносимость данных',
            'Возражение против обработки'
          ]
        },
        contact: {
          title: 'Контактная информация',
          content: 'Если у вас есть вопросы о данной Политике конфиденциальности или хотите воспользоваться своими правами, свяжитесь с нами:',
          details: [
            'Email: privacy@oncoswitch.ai',
            'Телефон: +971 4 123 4567',
            'Адрес: Dubai International Financial Centre, Dubai, UAE'
          ]
        }
      }
    }
  },
  
  en: {
    nav: {
      home: 'Home',
      demo: 'Demo',
      product: 'Product',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'AI Platform for Programmable DNA Switches',
      title: 'OncoSwitch',
      subtitle: 'Next generation gene therapy. Solving key challenges in modern oncology through personalized approaches.',
      ctaPrimary: 'Create DNA Switch',
      ctaSecondary: 'Try Demo'
    },
    features: {
      title: 'Powerful Design Tools',
      subtitle: 'Complete toolkit for creating, testing and optimizing DNA switches',
      designer: {
        title: 'Sequence Designer',
        description: 'Drag-and-drop DNA blocks with real-time validation'
      },
      chat: {
        title: 'AI Chat Assistant',
        description: 'Context-aware conversations about switch design'
      },
      library: {
        title: 'Switch Library',
        description: 'Searchable catalog of validated switches'
      },
      tracker: {
        title: 'Experiment Tracker',
        description: 'Create/manage lab experiments with progress tracking'
      },
      analytics: {
        title: 'Analytics Dashboard',
        description: 'Key metrics, interactive charts and trends'
      }
    },
    stats: {
      sequences: 'Sequences',
      researchers: 'Researchers', 
      successRate: 'Success Rate',
      experiments: 'Experiments'
    },
    footer: {
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      about: 'About',
      team: 'Team',
      careers: 'Careers',
      partners: 'Partners',
      press: 'Press',
      documentation: 'Documentation',
      blog: 'Blog',
      support: 'Support',
      status: 'Status',
      community: 'Community',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookies',
      newsletter: 'Subscribe to Updates',
      newsletterDescription: 'Get the latest news about OncoSwitch development',
      subscribe: 'Subscribe',
      copyright: 'All rights reserved'
    },
    demo: {
      badge: 'Live Demo',
      title: 'Try OncoSwitch Right Now',
      subtitle: 'Interactive demonstration of AI system for DNA switch activity prediction',
      interface: {
        title: 'Platform Interface',
        description: 'Configure parameters and run analysis',
        operationMode: 'Operation Mode',
        activityPrediction: 'Activity Prediction',
        sequenceGeneration: 'Sequence Generation',
        model: 'Model',
        context: 'Context',
        cellLine: 'Cell Line',
        tissue: 'Tissue',
        sequenceLength: 'Sequence Length',
        biologicalSequence: 'Biological Sequence',
        generateRandom: 'Generate Random Sequence',
        clear: 'Clear',
        length: 'Length',
        format: 'Format',
        validDNA: 'Valid DNA Sequence',
        startAnalysis: 'Start Analysis',
        analyzing: 'Analyzing...'
      },
      features: {
        accuracy: {
          title: '98.5% Accuracy',
          description: 'High accuracy of activity predictions'
        },
        speed: {
          title: 'Instant Analysis',
          description: 'Results in seconds, not hours'
        },
        users: {
          title: '500+ Researchers',
          description: 'Trust OncoSwitch for their research'
        }
      }
    },
    testimonials: {
      title: 'What Our Users Say',
      subtitle: 'Feedback from researchers and doctors using OncoSwitch',
      testimonial1: {
        quote: 'OncoSwitch revolutionized our approach to DNA switch design. The prediction accuracy is incredible!',
        author: 'Dr. Sarah Chen',
        role: 'Researcher, Stanford University'
      },
      testimonial2: {
        quote: 'The platform saved us months of work. The AI assistant helps find optimal solutions in minutes.',
        author: 'Prof. Michael Rodriguez',
        role: 'Principal Scientist, MIT'
      },
      testimonial3: {
        quote: 'Intuitive interface and powerful analytics tools. This is the future of personalized medicine.',
        author: 'Dr. Elena Volkov',
        role: 'Oncologist, UCSF Medical Center'
      }
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'Leading research institutions and pharmaceutical companies trust OncoSwitch'
    },
    cta: {
      title: 'Ready to Start Designing DNA Switches?',
      subtitle: 'Join 500+ researchers already using OncoSwitch',
      primary: 'Start Free',
      secondary: 'Contact Us'
    },
    footerAlt: {
      description: 'Revolutionary AI platform for DNA switch design. Next generation personalized gene therapy.',
      newsletter: {
        title: 'Subscribe to Updates',
        subtitle: 'Get the latest news about OncoSwitch development',
        placeholder: 'Your email',
        button: 'Subscribe'
      },
      copyright: '© 2024 OncoSwitch. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies'
    },
    about: {
      badge: 'About Company',
      title: 'About OncoSwitch',
      subtitle: 'We are creating the future of personalized medicine using artificial intelligence to develop precise DNA switches',
      mission: {
        title: 'Our Mission',
        description1: 'We believe that every patient deserves personalized treatment. OncoSwitch uses cutting-edge artificial intelligence technologies to create precise DNA switches that can revolutionize cancer treatment.',
        description2: 'Our goal is to make personalized gene therapy accessible to all patients, regardless of their location or economic status.',
        cta: 'Join the Mission'
      },
      values: {
        title: 'Our Values',
        subtitle: 'Principles that guide our work every day',
        accuracy: {
          title: 'Accuracy',
          description: 'We strive for maximum accuracy in predictions and analysis'
        },
        compassion: {
          title: 'Compassion',
          description: 'Every patient matters, we work to improve their lives'
        },
        innovation: {
          title: 'Innovation',
          description: 'Continuously developing new technologies and approaches'
        },
        security: {
          title: 'Security',
          description: 'High standards of data and research security'
        }
      },
      team: {
        title: 'Our Team',
        subtitle: 'Experts in biology, AI and technology working together to create the future of medicine'
      },
      timeline: {
        title: 'Our Journey',
        subtitle: 'Key milestones in OncoSwitch development'
      },
      cta: {
        title: 'Join the Medical Revolution',
        subtitle: 'Become part of the team changing the future of healthcare',
        primary: 'Join the Team',
        secondary: 'Contact Us'
      }
    },
    contact: {
      badge: 'Contact Us',
      title: 'Contact',
      subtitle: 'Ready to start working with OncoSwitch? Contact us in any convenient way',
      form: {
        title: 'Send Message',
        description: 'Fill out the form and we will contact you within 24 hours',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        submitting: 'Sending...'
      },
      departments: {
        title: 'Specialized Departments',
        subtitle: 'For faster response, contact the appropriate department directly',
        general: {
          title: 'General Questions',
          email: 'info@oncoswitch.ai',
          description: 'General information about product and services'
        },
        partnerships: {
          title: 'Partnerships',
          email: 'partnerships@oncoswitch.ai',
          description: 'Cooperation and partnership programs'
        },
        press: {
          title: 'Press',
          email: 'press@oncoswitch.ai',
          description: 'Media inquiries and press releases'
        }
      },
      location: {
        title: 'Our Location',
        subtitle: 'Visit our office in Dubai'
      }
    },
    roadmap: {
      badge: 'Roadmap 2024-2025',
      title: 'Roadmap',
      subtitle: 'Our development plan for OncoSwitch platform to create next generation personalized gene therapy',
      phases: {
        phase1: {
          title: 'MVP Launch',
          description: 'Core platform features',
          features: [
            'Sequence Designer with drag-and-drop',
            'AI Chat Assistant',
            'Switch Library',
            'Basic Analytics',
            'User Authentication'
          ]
        },
        phase2: {
          title: 'Advanced Features',
          description: 'Extended capabilities and integrations',
          features: [
            'Experiment Tracker',
            'Advanced Analytics Dashboard',
            'API Integration',
            'Collaboration Tools',
            'Export/Import Functions'
          ]
        },
        phase3: {
          title: 'AI Enhancement',
          description: 'AI improvements and automation',
          features: [
            'Advanced AI Predictions',
            'Automated Optimization',
            'Smart Recommendations',
            'ML Model Training',
            'Predictive Analytics'
          ]
        },
        phase4: {
          title: 'Enterprise & Scale',
          description: 'Enterprise features and scaling',
          features: [
            'Enterprise Dashboard',
            'Multi-tenant Architecture',
            'Advanced Security',
            'Compliance Tools',
            'Custom Integrations'
          ]
        },
        phase5: {
          title: 'Global Platform',
          description: 'Global platform and partnerships',
          features: [
            'Global Research Network',
            'Pharma Partnerships',
            'Clinical Trial Integration',
            'Regulatory Compliance',
            'Multi-language Support'
          ]
        }
      },
      milestones: {
        title: 'Key Achievements',
        subtitle: 'Our goals and achievements in OncoSwitch platform development'
      },
      cta: {
        title: 'Join Our Journey',
        subtitle: 'Become part of the personalized gene therapy revolution',
        primary: 'Start Now',
        secondary: 'Follow Updates'
      }
    },
    privacy: {
      badge: 'Privacy Policy',
      title: 'Privacy',
      subtitle: 'We take your data protection and privacy seriously',
      lastUpdated: 'December 15, 2024',
      sections: {
        introduction: {
          title: 'Introduction',
          content: [
            'OncoSwitch ("we", "our", "us") takes your privacy seriously. This Privacy Policy explains how we collect, use, disclose and protect your information when using our platform.',
            'By using OncoSwitch, you agree to the terms of this Privacy Policy.'
          ]
        },
        dataCollection: {
          title: 'Information We Collect',
          personalInfo: {
            title: 'Personal Information',
            items: [
              'Name and contact information',
              'Email address',
              'Organization information',
              'Professional information'
            ]
          },
          researchData: {
            title: 'Research Data',
            items: [
              'DNA sequences',
              'Analysis results',
              'Experiment metadata',
              'Settings and preferences'
            ]
          }
        },
        dataUsage: {
          title: 'How We Use Information',
          items: [
            'Providing and improving our services',
            'Developing and training AI algorithms',
            'Personalizing user experience',
            'Ensuring platform security',
            'Complying with legal obligations'
          ]
        },
        dataProtection: {
          title: 'Data Protection',
          content: 'We apply the following security measures:',
          items: [
            'Data encryption at rest and in transit',
            'Regular security audits',
            'Limited data access',
            'Threat monitoring and detection',
            'Backup and recovery'
          ]
        },
        userRights: {
          title: 'Your Rights',
          content: 'In accordance with GDPR and other data protection laws, you have the right to:',
          items: [
            'Access your personal data',
            'Correct inaccurate data',
            'Delete your data',
            'Restrict data processing',
            'Data portability',
            'Object to processing'
          ]
        },
        contact: {
          title: 'Contact Information',
          content: 'If you have questions about this Privacy Policy or want to exercise your rights, contact us:',
          details: [
            'Email: privacy@oncoswitch.ai',
            'Phone: +971 4 123 4567',
            'Address: Dubai International Financial Centre, Dubai, UAE'
          ]
        }
      }
    }
  }
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}

export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  
  const saved = localStorage.getItem('oncoswitch-language') as Language
  if (saved && (saved === 'ru' || saved === 'en')) {
    return saved
  }
  
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'ru' ? 'ru' : 'en'
}

export function setLanguage(language: Language): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('oncoswitch-language', language)
  window.location.reload()
}

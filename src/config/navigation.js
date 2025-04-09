/**
 * Navigation Configuration
 * 
 * Конфигурация навигации по сайту
 * Централизованное хранение пунктов меню и ссылок
 */

const navigation = {
  // Основное меню в шапке сайта
  mainMenu: [
    {
      id: 'features',
      label: 'Возможности',
      url: '#features'
    },
    {
      id: 'use-cases',
      label: 'Применение',
      url: '#use-cases'
    },
    {
      id: 'demo',
      label: 'Демо',
      url: '#demo'
    },
    {
      id: 'testimonials',
      label: 'Отзывы',
      url: '#testimonials'
    },
    {
      id: 'contact',
      label: 'Контакты',
      url: '#contact'
    }
  ],
  
  // Ссылки для футера
  footerLinks: [
    {
      id: 'features',
      label: 'Возможности',
      url: '#features'
    },
    {
      id: 'use-cases',
      label: 'Примеры задач',
      url: '#use-cases'
    },
    {
      id: 'demo',
      label: 'Демо',
      url: '#demo'
    },
    {
      id: 'testimonials',
      label: 'Отзывы',
      url: '#testimonials'
    },
    {
      id: 'contact',
      label: 'Контакты',
      url: '#contact'
    }
  ],
  
  // Социальные сети
  socialLinks: [
    {
      id: 'telegram',
      label: 'Telegram',
      url: 'https://t.me/openinference',
      icon: 'telegram'
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/77001234567',
      icon: 'whatsapp'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/openinference',
      icon: 'instagram'
    }
  ],
  
  // Контактная информация
  contacts: [
    {
      id: 'phone',
      label: '+7 (700) 123-45-67',
      url: 'tel:+77001234567',
      icon: 'phone'
    },
    {
      id: 'email',
      label: 'info@openinference.kz',
      url: 'mailto:info@openinference.kz',
      icon: 'envelope'
    },
    {
      id: 'telegram',
      label: '@openinference',
      url: 'https://t.me/openinference',
      icon: 'telegram',
      description: 'Telegram-канал с новостями и обновлениями'
    }
  ]
};

export default navigation;

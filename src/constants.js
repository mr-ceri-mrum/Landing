/**
 * Project Constants
 * 
 * Файл содержит константы, используемые в разных частях приложения.
 * Централизация констант улучшает поддерживаемость и повторное использование кода.
 */

/**
 * Общие константы проекта
 */
export const APP_NAME = 'AI-чат-бот Open Inference';
export const APP_DESCRIPTION = 'AI-чат-бот под задачи вашего бизнеса — за 5 дней';

/**
 * Настройки анимаций
 */
export const ANIMATION = {
  DURATION: {
    DEFAULT: 0.6,
    FAST: 0.3,
    SLOW: 0.9
  },
  DELAY: {
    DEFAULT: 0.2,
    STAGGER: 0.1
  }
};

/**
 * Ограничения ввода для полей форм
 */
export const FORM_LIMITS = {
  NAME: {
    MIN: 2,
    MAX: 50
  },
  EMAIL: {
    MAX: 100
  },
  PHONE: {
    MIN: 10,
    MAX: 15
  },
  MESSAGE: {
    MAX: 1000
  }
};

/**
 * Тексты ошибок валидации форм
 */
export const VALIDATION_ERRORS = {
  REQUIRED: 'Поле обязательно для заполнения',
  EMAIL: 'Введите корректный email',
  PHONE: 'Введите корректный номер телефона',
  MIN_LENGTH: (min) => `Минимальная длина: ${min} символов`,
  MAX_LENGTH: (max) => `Максимальная длина: ${max} символов`
};

/**
 * ID секций для навигации
 */
export const SECTION_IDS = {
  FEATURES: 'features',
  TARGET_AUDIENCE: 'target-audience',
  USE_CASES: 'use-cases',
  DEMO: 'demo',
  TESTIMONIALS: 'testimonials',
  CONTACT: 'contact'
};

/**
 * Константы для демо-бота
 */
export const DEMO_BOT = {
  NAME: 'AI-чат-бот Open Inference',
  GREETING: 'Здравствуйте! Я AI-чат-бот Open Inference. Чем могу помочь?',
  DELAY: {
    FIRST_MESSAGE: 500,
    USER_REPLY: 1200,
    BOT_REPLY: 2000
  }
};

/**
 * URL'ы для соцсетей и контактов
 */
export const URLS = {
  TELEGRAM: 'https://t.me/openinference',
  WHATSAPP: 'https://wa.me/77001234567',
  INSTAGRAM: 'https://instagram.com/openinference',
  PHONE: 'tel:+77001234567',
  EMAIL: 'mailto:info@openinference.kz'
};

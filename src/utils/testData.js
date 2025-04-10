/**
 * Test Data Utilities
 * 
 * Вспомогательные функции для инициализации тестовых данных
 * Используются только для разработки и отладки
 */

// Константы для ключей localStorage
export const SESSION_STORAGE_KEY = 'ai_chatbot_demo_session';
export const USER_ID_KEY = 'ai_chatbot_user_id';

/**
 * Пример диалога для тестирования
 */
const sampleChatHistory = [
  {
    sender: 'bot',
    text: 'Здравствуйте! Я AI-чат-бот Open Inference. Чем могу помочь?',
    timestamp: '2025-04-10T08:00:00.000Z'
  },
  {
    sender: 'user',
    text: 'Здравствуйте! Расскажите, что такое AI-чат-бот?',
    timestamp: '2025-04-10T08:01:00.000Z'
  },
  {
    sender: 'bot',
    text: 'AI-чат-бот - это программа, использующая искусственный интеллект для ведения диалога с людьми. Она может отвечать на вопросы, предоставлять информацию, помогать с задачами и даже поддерживать неформальную беседу. Наши боты используют современные технологии машинного обучения для понимания естественного языка и генерации релевантных ответов. Чем еще могу помочь?',
    timestamp: '2025-04-10T08:01:30.000Z'
  },
  {
    sender: 'user',
    text: 'Какие задачи может выполнять ваш бот?',
    timestamp: '2025-04-10T08:02:15.000Z'
  },
  {
    sender: 'bot',
    text: 'Наш AI-чат-бот может выполнять множество задач для бизнеса:\n\n1. Отвечать на частые вопросы клиентов 24/7\n2. Принимать заказы и бронирования\n3. Консультировать по товарам и услугам\n4. Собирать данные о клиентах\n5. Интегрироваться с CRM-системами\n6. Отправлять уведомления и напоминания\n7. Обрабатывать первичные обращения\n\nБот помогает автоматизировать рутинные задачи, освобождая время ваших сотрудников для более важной работы.',
    timestamp: '2025-04-10T08:03:00.000Z'
  }
];

/**
 * Функция для инициализации тестовых данных в localStorage
 * Использовать только для разработки и тестирования
 */
export const initializeTestData = () => {
  // Проверяем, есть ли уже данные
  const existingSession = localStorage.getItem(SESSION_STORAGE_KEY);
  const existingUserId = localStorage.getItem(USER_ID_KEY);
  
  // Если данных нет, добавляем тестовый набор
  if (!existingSession) {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sampleChatHistory));
    console.log('🔧 Test chat session initialized in localStorage');
  }
  
  if (!existingUserId) {
    const testUserId = 'user_test123';
    localStorage.setItem(USER_ID_KEY, testUserId);
    console.log('🔧 Test user ID initialized in localStorage:', testUserId);
  }
};

/**
 * Функция для удаления тестовых данных из localStorage
 */
export const clearTestData = () => {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem(USER_ID_KEY);
  console.log('🧹 Test data cleared from localStorage');
};

/**
 * Проверка наличия тестовых данных
 */
export const hasTestData = () => {
  return !!localStorage.getItem(SESSION_STORAGE_KEY);
};

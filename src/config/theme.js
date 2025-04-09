/**
 * Theme Configuration
 * 
 * Централизованное хранение настроек темы приложения
 * Упрощает изменение цветовой схемы, шрифтов и других визуальных параметров
 */

const theme = {
  // Основные цвета
  colors: {
    primary: '#4361ee',
    secondary: '#3a0ca3',
    accent: '#4cc9f0',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    light: '#f8f9fa',
    dark: '#212529',
  },
  
  // Шрифты
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    monospace: "'Source Code Pro', monospace",
  },
  
  // Тени
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  
  // Закругление
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  
  // Анимации
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  
  // Размеры контейнеров
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Отступы
  spacing: {
    section: {
      y: '4rem', // Вертикальные отступы для секций
      x: '1rem', // Горизонтальные отступы для секций на мобильных
    },
    container: {
      x: '1rem', // Горизонтальные отступы для контейнеров
    },
  },
};

export default theme;

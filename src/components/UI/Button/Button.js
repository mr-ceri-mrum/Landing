/**
 * Button Component
 * 
 * Переиспользуемый компонент кнопки с различными вариантами стилей
 * 
 * @param {string} variant - Вариант кнопки (primary, secondary, outline)
 * @param {string} className - Дополнительные классы стилей
 * @param {string} type - Тип кнопки (button, submit, reset)
 * @param {boolean} disabled - Флаг отключения кнопки
 * @param {function} onClick - Обработчик клика
 * @param {ReactNode} children - Содержимое кнопки
 */
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  variant = 'primary', 
  className = '', 
  type = 'button', 
  disabled = false, 
  onClick, 
  children 
}) => {
  // Базовые стили для всех вариантов кнопки
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg focus:outline-none transition-all';
  
  // Варианты стилей в зависимости от типа кнопки
  const variantClasses = {
    primary: 'bg-primary text-white shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75',
    secondary: 'bg-secondary text-white shadow-md hover:bg-purple-800 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
  };
  
  // Стили для отключенной кнопки
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default Button;

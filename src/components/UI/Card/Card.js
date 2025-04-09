/**
 * Card Component
 * 
 * Переиспользуемый компонент карточки для отображения контента в секциях
 * 
 * @param {ReactNode} children - Содержимое карточки
 * @param {string} className - Дополнительные классы стилей
 * @param {string} variant - Вариант карточки (default, outline, hover)
 * @param {function} onClick - Обработчик клика по карточке
 */
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default', 
  onClick = null 
}) => {
  // Варианты стилей карточек
  const variantClasses = {
    default: 'bg-white shadow-sm',
    outline: 'bg-white border border-gray-200',
    hover: 'bg-white shadow-sm hover:shadow-md transition-shadow',
  };
  
  // Базовые классы для всех карточек
  const baseClasses = 'rounded-lg p-6';
  
  // Если есть обработчик клика, добавляем стили интерактивного элемента
  const interactiveClasses = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;

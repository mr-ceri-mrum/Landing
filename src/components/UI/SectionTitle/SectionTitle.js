/**
 * SectionTitle Component
 * 
 * Компонент для создания заголовков секций с подзаголовками
 * Обеспечивает консистентный стиль заголовков по всему сайту
 * 
 * @param {string} title - Основной заголовок секции
 * @param {string} subtitle - Подзаголовок секции
 * @param {string} align - Выравнивание текста (center, left, right)
 * @param {string} className - Дополнительные классы стилей
 */
import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className = '' 
}) => {
  // Варианты выравнивания
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignClasses[align]} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

/**
 * Container Component
 * 
 * Переиспользуемый компонент контейнера для секций сайта
 * Обеспечивает консистентные отступы и максимальную ширину контента
 * 
 * @param {string} className - Дополнительные классы стилей
 * @param {ReactNode} children - Содержимое контейнера
 */
import React from 'react';

const Container = ({ className = '', children }) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;

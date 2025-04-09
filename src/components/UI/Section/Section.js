/**
 * Section Component
 * 
 * Переиспользуемый компонент для создания секций на странице
 * Обеспечивает консистентные отступы и возможность задать фон
 * 
 * @param {string} id - Идентификатор секции для навигации
 * @param {string} className - Дополнительные классы стилей
 * @param {string} background - Фон секции (white, light, gradient, dark)
 * @param {ReactNode} children - Содержимое секции
 */
import React from 'react';
import Container from '../Container';

const Section = ({ 
  id, 
  className = '', 
  background = 'white', 
  children 
}) => {
  // Варианты фона для секций
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-primary/10 to-secondary/10',
    dark: 'bg-gray-900 text-white',
  };
  
  // Базовые отступы для секций
  const baseClasses = 'py-16 md:py-24';

  return (
    <section 
      id={id} 
      className={`${baseClasses} ${backgroundClasses[background]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;

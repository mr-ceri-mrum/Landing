/**
 * Header Component
 * 
 * Главный компонент шапки сайта, включает в себя:
 * - Навигационное меню
 * - Hero-секцию с основным сообщением
 */
import React, { useState } from 'react';
import Logo from '../Logo';
import Navigation from './Navigation';
import Hero from './Hero';

const Header = () => {
  // Состояние для мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция переключения состояния мобильного меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-gradient-to-r from-primary to-secondary text-white">
      {/* Навигационная панель */}
      <nav className="container mx-auto py-4 flex justify-between items-center px-4">
        {/* Логотип */}
        <Logo className="text-white" />
        
        {/* Навигация */}
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
        />
      </nav>

      {/* Hero секция */}
      <Hero />
    </header>
  );
};

export default Header;

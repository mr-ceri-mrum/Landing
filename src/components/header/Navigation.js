/**
 * Navigation Component
 * 
 * Компонент для отображения навигационного меню в шапке сайта
 * Поддерживает мобильное и десктопное меню
 * 
 * @param {boolean} isMenuOpen - Флаг открытия/закрытия мобильного меню
 * @param {function} toggleMenu - Функция переключения состояния мобильного меню
 */
import React from 'react';
import { navigation } from '../../config';

const Navigation = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Кнопка мобильного меню */}
      <button 
        className="lg:hidden focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Десктоп-меню */}
      <div className="hidden lg:flex space-x-8">
        {navigation.mainMenu.map((item) => (
          <a 
            key={item.id}
            href={item.url} 
            className="text-white hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-primary z-50 shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4 px-4">
            {navigation.mainMenu.map((item) => (
              <a 
                key={item.id}
                href={item.url} 
                className="text-white hover:text-accent transition-colors" 
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

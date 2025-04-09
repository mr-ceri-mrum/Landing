import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-gradient-to-r from-primary to-secondary text-white">
      {/* Navigation */}
      <nav className="container-custom py-4 flex justify-between items-center">
        <Logo className="text-white" />
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
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

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          <a href="#features" className="hover:text-accent transition">Возможности</a>
          <a href="#use-cases" className="hover:text-accent transition">Применение</a>
          <a href="#demo" className="hover:text-accent transition">Демо</a>
          <a href="#testimonials" className="hover:text-accent transition">Отзывы</a>
          <a href="#contact" className="hover:text-accent transition">Контакты</a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-primary z-50 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#features" className="hover:text-accent transition" onClick={toggleMenu}>Возможности</a>
            <a href="#use-cases" className="hover:text-accent transition" onClick={toggleMenu}>Применение</a>
            <a href="#demo" className="hover:text-accent transition" onClick={toggleMenu}>Демо</a>
            <a href="#testimonials" className="hover:text-accent transition" onClick={toggleMenu}>Отзывы</a>
            <a href="#contact" className="hover:text-accent transition" onClick={toggleMenu}>Контакты</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container-custom section-padding pb-36 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <motion.h1 
            className="heading-xl mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI-чат-бот под задачи вашего бизнеса — за 5 дней
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Он сам отвечает клиентам, собирает заказы, консультирует, сокращает нагрузку на команду и не просит зарплату.
          </motion.p>
          <motion.button 
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Хочу такого бота
          </motion.button>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full h-80 lg:h-96 bg-white rounded-lg shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-600 font-medium">AI-чат-бот Open Inference</div>
              </div>
              <div className="p-4 pt-16">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                      <p className="text-gray-800">Здравствуйте! Чем я могу вам помочь?</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="bg-primary text-white rounded-lg p-3 max-w-xs">
                      <p>Расскажите про ваши услуги</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                      <p className="text-gray-800">Мы создаем AI-чат-ботов для бизнеса, которые автоматизируют:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Ответы на частые вопросы</li>
                        <li>Прием заказов</li>
                        <li>Консультации клиентов</li>
                        <li>Интеграцию с CRM-системами</li>
                      </ul>
                      <p className="mt-2 text-gray-800">Хотите узнать подробнее о какой-то из услуг?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full z-0 blur-xl"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/20 rounded-full z-0 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Logo from './Logo';
import { FaTelegram, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo className="text-white mb-6" />
            <p className="text-gray-400 mb-6">
              Мы создаем AI-чат-ботов, которые помогают бизнесу автоматизировать рутинные задачи, улучшать клиентский сервис и увеличивать продажи.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/openinference" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a 
                href="https://wa.me/77001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="https://instagram.com/openinference" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Примеры задач</a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white transition-colors">Демо</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <a href="tel:+77001234567" className="text-gray-400 hover:text-white transition-colors">+7 (700) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <a href="mailto:info@openinference.kz" className="text-gray-400 hover:text-white transition-colors">info@openinference.kz</a>
              </li>
              <li className="flex items-start">
                <FaTelegram className="text-primary mr-3 mt-1" />
                <div>
                  <a href="https://t.me/openinference" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">@openinference</a>
                  <p className="text-gray-500 text-sm mt-1">Telegram-канал с новостями и обновлениями</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Open Inference. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * Hero Component
 * 
 * Компонент для отображения главного экрана (Hero-секции) в шапке сайта
 * Содержит заголовок, подзаголовок, кнопку действия и иллюстрацию
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animation';
import { APP_DESCRIPTION } from '../../constants';

const Hero = () => {
  return (
    <div className="container mx-auto section-padding pb-36 flex flex-col lg:flex-row items-center px-4">
      {/* Левая колонка с текстом */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          AI-чат-бот под задачи вашего бизнеса — за 5 дней
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Он сам отвечает клиентам, собирает заказы, консультирует, сокращает нагрузку на команду и не просит зарплату.
        </motion.p>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Button>Хочу такого бота</Button>
        </motion.div>
      </div>
      
      {/* Правая колонка с иллюстрацией */}
      <motion.div 
        className="w-full lg:w-1/2"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          <div className="w-full h-80 lg:h-96 bg-white rounded-lg shadow-xl relative overflow-hidden">
            {/* Шапка чата */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4 border-b">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-gray-600 font-medium">AI-чат-бот Open Inference</div>
            </div>
            
            {/* Содержимое чата */}
            <div className="p-4 pt-16">
              <div className="flex flex-col space-y-4">
                {/* Сообщение бота */}
                <div className="flex items-start">
                  <div className="bg-gray-200 rounded-lg p-3 max-w-xs">
                    <p className="text-gray-800">Здравствуйте! Чем я могу вам помочь?</p>
                  </div>
                </div>
                
                {/* Сообщение пользователя */}
                <div className="flex items-start justify-end">
                  <div className="bg-primary text-white rounded-lg p-3 max-w-xs">
                    <p>Расскажите про ваши услуги</p>
                  </div>
                </div>
                
                {/* Сообщение бота */}
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
          
          {/* Декоративные элементы */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full z-0 blur-xl"></div>
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/20 rounded-full z-0 blur-xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

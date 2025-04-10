/**
 * Demo Component
 * 
 * Интерактивный компонент для демонстрации работы AI-чат-бота.
 * Позволяет пользователю взаимодействовать с ботом через API.
 * Сохраняет историю сообщений в localStorage.
 */
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle, Button } from '../UI';
import { fadeIn } from '../../utils/animation';
import { DEMO_BOT } from '../../constants';
import { SESSION_STORAGE_KEY, USER_ID_KEY, initializeTestData } from '../../utils/testData';

const Demo = () => {
  // Состояние для хранения сообщений
  const [messages, setMessages] = useState([]);
  // Состояние для текста пользовательского ввода
  const [userInput, setUserInput] = useState('');
  // Состояние загрузки (ожидание ответа от API)
  const [isLoading, setIsLoading] = useState(false);
  // Состояние демо (запущено или нет)
  const [demoStarted, setDemoStarted] = useState(false);
  // Идентификатор пользователя для API
  const [userId, setUserId] = useState('');
  
  // Ref для автоматической прокрутки к последнему сообщению
  const messagesEndRef = useRef(null);

  // Инициализация компонента
  useEffect(() => {
    // В режиме разработки можно инициализировать тестовые данные
    // В продакшн это следует убрать или обернуть в process.env.NODE_ENV === 'development'
    if (process.env.NODE_ENV === 'development') {
      initializeTestData();
    }
    
    // Проверяем наличие сохраненных сообщений в localStorage
    const savedMessages = localStorage.getItem(SESSION_STORAGE_KEY);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
      setDemoStarted(true);
    }
    
    // Получаем или генерируем идентификатор пользователя
    let user_id = localStorage.getItem(USER_ID_KEY);
    if (!user_id) {
      user_id = 'user_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem(USER_ID_KEY, user_id);
    }
    setUserId(user_id);
  }, []);

  // Сохраняем сообщения в localStorage при изменении
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Прокрутка к последнему сообщению при добавлении новых
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Функция для прокрутки чата вниз
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Асинхронная функция для отправки сообщения к API
   * @param {string} userMessage - Сообщение пользователя
   * @returns {Promise<string>} - Ответ от AI
   */
  const sendMessageToAI = async (userMessage) => {
    try {
      setIsLoading(true);
      
      const response = await fetch("https://n8n.bogdanna.com/webhook/79b905f5-ce6d-4cab-bcef-8d7b2f643f1d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage,
          userId: userId,
        })
      });
      
      if (!response.ok) {
        throw new Error(`API ответил с кодом: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("AI response:", data);
      
      return data.response || "Извините, я не смог обработать ваш запрос.";
    } catch (err) {
      console.error("Error sending message:", err);
      return "Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.";
    } finally {
      setIsLoading(false);
    }
  };

  // Запуск демо
  const startDemo = () => {
    setDemoStarted(true);
    
    // Если нет сообщений, добавляем приветствие от бота
    if (messages.length === 0) {
      const initialMessage = {
        sender: 'bot',
        text: DEMO_BOT.GREETING,
        timestamp: new Date().toISOString()
      };
      
      setMessages([initialMessage]);
    }
  };

  // Сброс демо (очистка истории)
  const resetDemo = () => {
    setMessages([]);
    localStorage.removeItem(SESSION_STORAGE_KEY);
    
    // Добавляем снова приветственное сообщение
    startDemo();
  };

  // Обработка изменения поля ввода
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Обработка отправки сообщения пользователем
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '' || isLoading) return;
    
    // Добавляем сообщение пользователя
    const userMessage = {
      sender: 'user',
      text: userInput.trim(),
      timestamp: new Date().toISOString()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setUserInput('');
    
    // Получаем ответ от API
    const aiResponse = await sendMessageToAI(userMessage.text);
    
    // Добавляем сообщение от бота
    const botMessage = {
      sender: 'bot',
      text: aiResponse,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  return (
    <Section id="demo" background="white">
      <SectionTitle 
        title="Посмотрите бота в действии" 
        subtitle="Попробуйте демо-версию AI-чат-бота прямо сейчас"
      />
      
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Шапка чата */}
          <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">AI</span>
              </div>
              <h3 className="font-bold">{DEMO_BOT.NAME}</h3>
            </div>
            <div>
              {!demoStarted ? (
                <Button 
                  onClick={startDemo}
                  variant="secondary"
                >
                  Запустить демо
                </Button>
              ) : (
                <Button 
                  onClick={resetDemo}
                  variant="secondary"
                >
                  ↻ Новый диалог
                </Button>
              )}
            </div>
          </div>
          
          {/* Область сообщений */}
          <div className="h-96 p-6 overflow-y-auto bg-gray-50">
            {!demoStarted && (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mb-4 text-gray-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                  />
                </svg>
                <p className="text-lg font-medium">Нажмите «Запустить демо», чтобы увидеть бота в действии</p>
                <p className="mt-2">Начните диалог с AI-чат-ботом</p>
              </div>
            )}
            
            {/* Сообщения */}
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div 
                  className={`max-w-xs lg:max-w-md rounded-lg px-4 py-3 ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Индикатор загрузки, когда бот печатает */}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="max-w-xs lg:max-w-md rounded-lg px-4 py-3 bg-white text-gray-800 border border-gray-200 rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Ссылка для прокрутки */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Форма отправки сообщения */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex items-center">
            <input
              type="text"
              placeholder="Напишите сообщение..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={userInput}
              onChange={handleInputChange}
              disabled={!demoStarted || isLoading}
            />
            <button
              type="submit"
              className={`bg-primary text-white px-4 py-2 rounded-r-lg ${
                (!demoStarted || isLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              disabled={!demoStarted || isLoading}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </form>
        </motion.div>
        
        <motion.div
          className="text-center mt-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            Хотите узнать больше о возможностях бота для вашего бизнеса?
          </p>
          <Button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Получить консультацию
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default Demo;

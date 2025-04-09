import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const demoMessages = [
  {
    sender: 'bot',
    text: 'Здравствуйте! Я AI-чат-бот Open Inference. Чем могу помочь?',
    delay: 500
  },
  {
    sender: 'user',
    text: 'Привет! Расскажи, как вы создаете чат-ботов?',
    delay: 1200
  },
  {
    sender: 'bot',
    text: 'Мы создаем AI-чат-ботов с использованием современных технологий искусственного интеллекта. Процесс включает несколько этапов:',
    delay: 2000
  },
  {
    sender: 'bot',
    text: '1. Анализ ваших бизнес-процессов и задач\n2. Настройка и обучение модели AI под ваши потребности\n3. Интеграция с вашими системами (CRM, мессенджеры)\n4. Тестирование и запуск за 5 дней',
    delay: 3500
  },
  {
    sender: 'user',
    text: 'А сколько это стоит?',
    delay: 6000
  },
  {
    sender: 'bot',
    text: 'Стоимость зависит от сложности и функционала бота. Базовое решение начинается от 50 000 ₸ и включает все необходимые функции для старта. Для получения точной стоимости, подходящей вашему бизнесу, оставьте заявку, и наш специалист подготовит индивидуальное предложение.',
    delay: 7000
  },
  {
    sender: 'user',
    text: 'А можно посмотреть примеры работы бота?',
    delay: 10000
  },
  {
    sender: 'bot',
    text: 'Конечно! Вы можете посмотреть примеры использования AI-ботов в разделе "Примеры задач" на этой странице. Также я могу соединить вас с менеджером, который покажет демо-версию бота в действии. Оставить заявку на демонстрацию?',
    delay: 11000
  }
];

const Demo = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showReplayButton, setShowReplayButton] = useState(false);
  const messagesEndRef = useRef(null);
  const [demoStarted, setDemoStarted] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startDemo = () => {
    setDemoStarted(true);
    setMessages([]);
    setShowReplayButton(false);
    
    demoMessages.forEach((message, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, message]);
        
        if (index === demoMessages.length - 1) {
          setTimeout(() => {
            setShowReplayButton(true);
          }, 1000);
        }
      }, message.delay);
    });
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;
    
    // Add user message
    const newMessage = {
      sender: 'user',
      text: userInput,
      delay: 0
    };
    
    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        {
          sender: 'bot',
          text: 'Спасибо за ваше сообщение! В демо-версии я могу только проигрывать заранее записанный сценарий. Для общения с полноценным ботом, оставьте заявку или обратитесь к нашим специалистам.',
          delay: 0
        }
      ]);
    }, 1000);
  };

  return (
    <section id="demo" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Посмотрите бота в действии</h2>
          <p className="subtitle mx-auto">
            Попробуйте демо-версию AI-чат-бота прямо сейчас
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Chat header */}
            <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">AI</span>
                </div>
                <h3 className="font-bold">AI-чат-бот Open Inference</h3>
              </div>
              {!demoStarted && (
                <button 
                  onClick={startDemo}
                  className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                >
                  Запустить демо
                </button>
              )}
              {showReplayButton && (
                <button 
                  onClick={startDemo}
                  className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                >
                  ↻ Повторить
                </button>
              )}
            </div>
            
            {/* Chat messages */}
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
                  <p className="mt-2">Мы покажем пример диалога с клиентом</p>
                </div>
              )}
              
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
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex items-center">
              <input
                type="text"
                placeholder="Напишите сообщение..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={userInput}
                onChange={handleInputChange}
                disabled={!demoStarted || showReplayButton}
              />
              <button
                type="submit"
                className={`bg-primary text-white px-4 py-2 rounded-r-lg ${
                  (!demoStarted || showReplayButton) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
                disabled={!demoStarted || showReplayButton}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-4">
              Хотите узнать больше о возможностях бота для вашего бизнеса?
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-block"
            >
              Получить консультацию
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;

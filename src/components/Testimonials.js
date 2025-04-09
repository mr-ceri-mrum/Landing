import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Айгерим',
    position: 'Владелица студии красоты',
    location: 'Алматы',
    content: 'Бот стал настоящим спасением — клиенты теперь сами записываются, получают ответы на вопросы и даже выбирают мастера. Раньше сидели в Instagram по вечерам, теперь всё идёт само. Освободили минимум 4 часа в день!',
    image: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    id: 2,
    name: 'Азамат',
    position: 'Директор интернет-магазина электроники',
    location: 'Астана',
    content: 'У нас было много обращений в WhatsApp — терялись заявки, забывали отвечать. После запуска бота стало всё чётко: он сам принимает заказ, уточняет детали и передает в CRM. Уровень сервиса вырос, ошибок стало меньше.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Екатерина',
    position: 'Операционный директор в школе английского',
    location: 'Караганда',
    content: 'AI-бот отвечает родителям, записывает учеников на пробные уроки и даже напоминает об оплате. Мы думали, это будет "как игрушка", а получили настоящего помощника. За первый месяц бот обработал больше 600 диалогов без единой ошибки. Плюс бот помог нам сократить затраты на зарплаты, теперь справляется 1 менеджер, а раньше было 3.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Отзывы клиентов</h2>
          <p className="subtitle mx-auto">
            Что говорят клиенты о работе с AI-чат-ботами
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 md:p-10 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaQuoteLeft className="text-5xl text-primary/20 absolute top-8 left-8" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-lg md:text-xl mb-6 text-gray-700 relative z-10">
                  {testimonials[activeTestimonial].content}
                </p>
                
                <div>
                  <h4 className="text-xl font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[activeTestimonial].position}</p>
                  <p className="text-primary font-medium">{testimonials[activeTestimonial].location}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-3">
              <button 
                onClick={prevTestimonial} 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
              
              <button 
                onClick={nextTestimonial} 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeTestimonial ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

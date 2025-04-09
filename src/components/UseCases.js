import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaComments, FaCalendarCheck } from 'react-icons/fa';

const useCases = [
  {
    id: 1,
    icon: <FaInstagram className="text-4xl text-purple-600 mb-4" />,
    title: 'Обработка входящих заявок в Instagram / WhatsApp',
    before: [
      'Менеджеры не успевали отвечать вовремя',
      'Потеря до 30% заявок из-за долгих пауз или ночных обращений',
      'Повышенная нагрузка и выгорание команды'
    ],
    after: [
      'AI-бот отвечает мгновенно: уточняет запрос, предлагает товар/услугу, оставляет заявку',
      'Работает 24/7, без выходных и ошибок',
      'Количество обработанных лидов выросло на +40%, нагрузка на менеджеров — снизилась'
    ]
  },
  {
    id: 2,
    icon: <FaComments className="text-4xl text-blue-600 mb-4" />,
    title: 'Частые однотипные вопросы от клиентов',
    before: [
      '"Сколько доставка?", "Где мой заказ?", "Как записаться?" — в день по 100+ однотипных вопросов',
      'Менеджеры отвлекались, теряли фокус, раздражались',
      'Клиенты ждали по 10–30 минут'
    ],
    after: [
      'AI-бот сам отвечает на до 90% повторяющихся запросов',
      'Работает мгновенно и вежливо, не устает',
      'Уровень удовлетворенности клиентов вырос, а сотрудники освободили время на реальные задачи'
    ]
  },
  {
    id: 3,
    icon: <FaCalendarCheck className="text-4xl text-green-600 mb-4" />,
    title: 'Запись на услуги и приём',
    before: [
      'Заявки приходили в директ, потом вручную переносились в таблицу или CRM',
      'Часто путаница, двойные брони, забытые записи',
      'Потеря клиентов и неразбериха в расписании'
    ],
    after: [
      'AI-бот сам принимает заявки, уточняет время, записывает в CRM или Google-таблицу',
      'Рассылает напоминания клиентам',
      'Уровень автоматизации вырос, время на обработку снизилось в 5 раз'
    ]
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Примеры задач (до/после)</h2>
          <p className="subtitle mx-auto">
            Как AI-чат-бот решает реальные проблемы бизнеса
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
                {useCase.icon}
                <h3 className="heading-md">{useCase.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="p-6 border-r border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-red-500">До:</h4>
                  <ul className="space-y-3">
                    {useCase.before.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* After */}
                <div className="p-6 bg-gray-50">
                  <h4 className="text-xl font-bold mb-4 text-green-500">После:</h4>
                  <ul className="space-y-3">
                    {useCase.after.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

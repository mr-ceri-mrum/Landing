/**
 * Данные о возможностях AI-чат-бота
 * 
 * Вынесено в отдельный файл для легкого редактирования и повторного использования.
 * Содержит массив объектов, каждый из которых описывает отдельную функцию бота.
 */
import { 
  FaComments, 
  FaShoppingBag, 
  FaChartBar, 
  FaUserTie, 
  FaSync, 
  FaClock 
} from 'react-icons/fa';
import React from 'react';

const featuresData = [
  {
    id: 1,
    icon: <FaComments />,
    title: 'Отвечает на частые вопросы',
    description: 'Бот мгновенно отвечает на типовые вопросы клиентов, сокращая нагрузку на команду.'
  },
  {
    id: 2,
    icon: <FaShoppingBag />,
    title: 'Принимает заказы и брони',
    description: 'Автоматизирует процесс приема заказов, бронирования и записи на услуги.'
  },
  {
    id: 3,
    icon: <FaChartBar />,
    title: 'Готовит отчёты и собирает данные',
    description: 'Анализирует взаимодействие с клиентами и формирует полезные отчеты.'
  },
  {
    id: 4,
    icon: <FaUserTie />,
    title: 'Консультирует по услугам / товарам',
    description: 'Предоставляет подробную информацию о ваших продуктах и услугах.'
  },
  {
    id: 5,
    icon: <FaSync />,
    title: 'Интегрируется с CRM и мессенджерами',
    description: 'Легко подключается к Telegram, WhatsApp, Instagram и вашей CRM-системе.'
  },
  {
    id: 6,
    icon: <FaClock />,
    title: 'Работает 24/7 без выходных',
    description: 'Не требует отдыха или сна — всегда готов общаться с клиентами.'
  }
];

export default featuresData;

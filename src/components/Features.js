import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaComments, 
  FaShoppingBag, 
  FaChartBar, 
  FaUserTie, 
  FaSync, 
  FaClock 
} from 'react-icons/fa';

const features = [
  {
    icon: <FaComments className="text-4xl text-primary mb-4" />,
    title: 'Отвечает на частые вопросы',
    description: 'Бот мгновенно отвечает на типовые вопросы клиентов, сокращая нагрузку на команду.'
  },
  {
    icon: <FaShoppingBag className="text-4xl text-primary mb-4" />,
    title: 'Принимает заказы и брони',
    description: 'Автоматизирует процесс приема заказов, бронирования и записи на услуги.'
  },
  {
    icon: <FaChartBar className="text-4xl text-primary mb-4" />,
    title: 'Готовит отчёты и собирает данные',
    description: 'Анализирует взаимодействие с клиентами и формирует полезные отчеты.'
  },
  {
    icon: <FaUserTie className="text-4xl text-primary mb-4" />,
    title: 'Консультирует по услугам / товарам',
    description: 'Предоставляет подробную информацию о ваших продуктах и услугах.'
  },
  {
    icon: <FaSync className="text-4xl text-primary mb-4" />,
    title: 'Интегрируется с CRM и мессенджерами',
    description: 'Легко подключается к Telegram, WhatsApp, Instagram и вашей CRM-системе.'
  },
  {
    icon: <FaClock className="text-4xl text-primary mb-4" />,
    title: 'Работает 24/7 без выходных',
    description: 'Не требует отдыха или сна — всегда готов общаться с клиентами.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Что умеет AI-чат-бот</h2>
          <p className="subtitle mx-auto">
            Современные технологии искусственного интеллекта на службе вашего бизнеса
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

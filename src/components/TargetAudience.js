import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHospital, FaTools, FaBuilding, FaHeadset, FaUsers } from 'react-icons/fa';

const audienceCategories = [
  {
    icon: <FaShoppingCart className="text-4xl text-primary mb-4" />,
    title: 'Интернет-магазины',
    description: 'Автоматизация консультаций и обработки заказов'
  },
  {
    icon: <FaHospital className="text-4xl text-primary mb-4" />,
    title: 'Медицинские центры',
    description: 'Запись на прием и ответы на типовые вопросы'
  },
  {
    icon: <FaTools className="text-4xl text-primary mb-4" />,
    title: 'Услуги и сервисы',
    description: 'Онлайн-консультации и бронирование'
  },
  {
    icon: <FaBuilding className="text-4xl text-primary mb-4" />,
    title: 'B2B-компании',
    description: 'Квалификация лидов и первичные консультации'
  },
  {
    icon: <FaHeadset className="text-4xl text-primary mb-4" />,
    title: 'Поддержка клиентов',
    description: 'Автоматические ответы на типовые вопросы 24/7'
  },
  {
    icon: <FaUsers className="text-4xl text-primary mb-4" />,
    title: 'Отделы продаж',
    description: 'Автоматизация рутинных задач и сбор данных'
  }
];

const TargetAudience = () => {
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
    <section id="target-audience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Для кого этот бот</h2>
          <p className="subtitle mx-auto">
            Бот подстраивается под ваш бизнес-процесс — и работает как менеджер, только быстрее.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {audienceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              {category.icon}
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;

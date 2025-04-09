/**
 * FeatureCard Component
 * 
 * Компонент для отображения карточки отдельной функции/возможности
 * Применяется в секции Features
 * 
 * @param {ReactElement} icon - Иконка функции
 * @param {string} title - Заголовок функции
 * @param {string} description - Описание функции
 */
import React from 'react';
import { Card } from '../UI';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card variant="hover" className="flex flex-col items-center text-center h-full">
      <div className="text-4xl text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default FeatureCard;

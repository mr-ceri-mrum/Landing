/**
 * Features Component
 * 
 * Компонент секции "Что умеет AI-чат-бот"
 * Отображает карточки с функциями и возможностями бота
 */
import React from 'react';
import { Section, SectionTitle } from '../UI';
import FeatureCard from './FeatureCard';
import featuresData from './featuresData';

const Features = () => {
  return (
    <Section id="features">
      <SectionTitle 
        title="Что умеет AI-чат-бот" 
        subtitle="Современные технологии искусственного интеллекта на службе вашего бизнеса"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;

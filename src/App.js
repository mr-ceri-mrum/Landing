/**
 * App Component
 * 
 * Главный компонент приложения, который собирает все секции лендинга
 * и управляет общей структурой страницы.
 */
import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import UseCases from './components/UseCases';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Section with Navigation and Hero */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Target Audience Section */}
        <TargetAudience />
        
        {/* Features Section */}
        <Features />
        
        {/* Use Cases Section */}
        <UseCases />
        
        {/* Demo Section */}
        <Demo />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

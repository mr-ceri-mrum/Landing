import React from 'react';
import Header from './components/Header';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TargetAudience />
        <Features />
        <UseCases />
        <Demo />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

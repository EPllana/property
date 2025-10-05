
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesBanner from './components/FeaturesBanner';
import MaximizePotential from './components/MaximizePotential';
import AboutUs from './components/AboutUs';
import PropertyListings from './components/PropertyListings';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <FeaturesBanner />
        <MaximizePotential />
        <AboutUs />
        <PropertyListings />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

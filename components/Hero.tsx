
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white pt-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left max-w-4xl">
        <p className="text-lg font-semibold text-brand-cyan mb-2">VALUE-ADD PROPERTY MANAGEMENT</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-shadow-lg">
          Maximizing Multifamily Potential Across the Sunbelt.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          We unlock hidden value in Class B & C properties through strategic management, operational excellence, and targeted improvements.
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-cyan hover:bg-brand-blue text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Book a Consultation
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

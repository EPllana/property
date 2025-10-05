
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    propertySize: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    // Here you would typically send the data to a server
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700">Your request has been sent. We'll be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            Let's Talk About Your Property
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Managing 100+ unit communities? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue transition duration-150" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue transition duration-150" />
              </div>
            </div>
            <div>
              <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700 mb-1">Property Size* (Number of units)</label>
              <input type="text" name="propertySize" id="propertySize" required value={formData.propertySize} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue transition duration-150" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue transition duration-150"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-block w-full sm:w-auto px-10 py-4 bg-brand-cyan hover:bg-brand-blue text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                Request a Callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="relative bg-white pt-24 pb-20 overflow-hidden">
      <div className="absolute -top-1/2 left-0 w-full h-full transform -skew-y-6 bg-gray-50 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-brand-cyan rounded-full opacity-20 transform -translate-x-8 -translate-y-8"></div>
            <div className="relative p-4 bg-white rounded-full shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                alt="Company Founder" 
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-brand-cyan text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                Value
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-semibold text-brand-blue mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
              Managing Communities, Maximizing Value
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 1998 in Nashville, TN, ValueAdd Management brings decades of experience to multifamily property management. With a legacy of serving over 15,000 residents nationwide, we've built a powerhouse team of property managers, asset strategists, renovation experts, and support staff focused on Class B & C communities.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our approach goes beyond traditional management — we partner with owners to create smart, results-driven solutions that improve NOI, tenant satisfaction, and long-term asset value.
            </p>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue hover:bg-brand-dark text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

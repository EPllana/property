
import React from 'react';

const CheckIcon: React.FC = () => (
  <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
  </svg>
);

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center space-x-3">
    <div className="bg-white/10 rounded-full p-1">
      <CheckIcon />
    </div>
    <span className="text-lg md:text-xl font-semibold">{children}</span>
  </div>
);

const FeaturesBanner: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-8">
          <FeatureItem>Class B & C properties</FeatureItem>
          <FeatureItem>Focused on Value-Add Multifamily</FeatureItem>
          <FeatureItem>100+ units across the Sunbelt states</FeatureItem>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;

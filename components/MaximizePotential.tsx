
import React from 'react';

const ChartIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const HomeIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const BuildIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const TeamIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

interface FeatureCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-cyan/10 text-brand-cyan">
        {icon}
      </div>
      <span className="text-6xl font-extrabold text-gray-200">{number}</span>
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MaximizePotential: React.FC = () => {
  const features = [
    { number: '01', icon: <ChartIcon />, title: 'Proven track record of increasing NOI', description: 'Our strategies consistently enhance Net Operating Income, delivering superior returns for our partners.' },
    { number: '02', icon: <HomeIcon />, title: 'Expertise in workforce housing dynamics', description: 'We understand the nuances of managing workforce housing to create stable, thriving communities.' },
    { number: '03', icon: <BuildIcon />, title: 'Systems built for scale and transparency', description: 'Leveraging cutting-edge technology for efficient operations and clear, real-time reporting.' },
    { number: '04', icon: <TeamIcon />, title: 'Local teams with market insight', description: 'Our on-the-ground experts provide invaluable local knowledge for smarter decision-making.' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            More Than Management
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-brand-cyan mb-4">— We Maximize Potential</p>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our comprehensive approach goes beyond day-to-day operations. We focus on four key pillars to ensure every property reaches its full financial and community potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaximizePotential;


import React from 'react';

interface PropertyCardProps {
  imageUrl: string;
  name: string;
  location: string;
  description: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ imageUrl, name, location, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative h-56">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-brand-cyan font-semibold">{location}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600">{description}</p>
      <a href="#" className="inline-block mt-4 text-brand-blue font-semibold hover:underline">
        View Details &rarr;
      </a>
    </div>
  </div>
);

const PropertyListings: React.FC = () => {
  const properties = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop',
      name: 'The Sunstone',
      location: 'Austin, TX',
      description: 'A 120-unit complex transformed with modern amenities and improved operational efficiency, resulting in a 25% NOI increase.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop',
      name: 'Creekview Commons',
      location: 'Raleigh, NC',
      description: 'Strategic capital improvements and community engagement led to a 98% occupancy rate and significant asset value appreciation.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop',
      name: 'Palm Grove',
      location: 'Tampa, FL',
      description: 'A successful repositioning of a C-class property to a desirable B-class asset through targeted renovations and branding.',
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            Our Premier Properties
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Explore a selection of properties where our value-add strategies have delivered exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;

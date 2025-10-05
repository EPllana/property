
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, imageUrl }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
    <div className="flex-grow">
        <svg className="w-10 h-10 text-brand-cyan/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.33 2C4.18 2 0 6.18 0 11.33c0 4.14 2.67 7.67 6.33 9.33l1.34-2.33c-2.14-.8-3.67-2.8-3.67-5.33 0-3.14 2.53-5.67 5.67-5.67h2.66V2H9.33zm18.67 0c-5.15 0-9.33 4.18-9.33 9.33 0 4.14 2.67 7.67 6.33 9.33l1.34-2.33c-2.14-.8-3.67-2.8-3.67-5.33 0-3.14 2.53-5.67 5.67-5.67h2.66V2h-3.34z"></path>
        </svg>
        <p className="text-gray-700 italic">"{quote}"</p>
    </div>
    <div className="mt-6 flex items-center">
      <img src={imageUrl} alt={author} className="w-14 h-14 rounded-full object-cover mr-4"/>
      <div>
        <p className="font-bold text-brand-dark">{author}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "ValueAdd Management completely transformed our portfolio. Their market insight and operational excellence are second to none. Our NOI has increased by over 30% since we partnered with them.",
            author: "Sarah Johnson",
            title: "Partner, Oakwood Capital",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
        },
        {
            quote: "The transparency and communication are what set them apart. Their reporting is best-in-class, and I always feel like I have a true partner watching over my assets.",
            author: "Michael Chen",
            title: "Principal, Redwood Investments",
            imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
        },
        {
            quote: "From acquisition to stabilization, their team handled every detail flawlessly. They identified a property with huge potential and executed the value-add strategy to perfection.",
            author: "Emily Rodriguez",
            title: "Founder, Sunbelt Holdings",
            imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
        }
    ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark">
            What Our Partners Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We build lasting relationships based on trust, transparency, and tangible results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

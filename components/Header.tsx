
import React, { useState } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg className="w-10 h-10 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
    </svg>
    <span className="text-2xl font-bold text-white">ValueAdd</span>
  </div>
);

const SocialIcons: React.FC = () => (
  <div className="flex space-x-4">
    <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128V11.17h3.128V8.63c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.54h-3.12V24h5.698c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg></a>
    <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.033 7.297c.012.186.012.372.012.558 0 5.68-4.323 12.23-12.23 12.23-2.43 0-4.69-.71-6.6-2.02a8.532 8.532 0 006.18-1.79 4.28 4.28 0 01-4-2.97 4.543 4.543 0 001.9-.07 4.28 4.28 0 01-3.43-4.2 4.194 4.194 0 001.9.53 4.28 4.28 0 01-1.3-5.71 12.15 12.15 0 008.8 4.47 4.28 4.28 0 017.3-3.9c.79-.15 1.54-.44 2.22-.85a4.3 4.3 0 01-1.54 1.93c.7-.08 1.37-.27 2-.54a4.62 4.62 0 01-1.73 1.77z"/></svg></a>
    <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></a>
    <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
  </div>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About Us', 'Services', 'Properties', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm shadow-md">
      <div className="bg-black bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="text-gray-300">100+ units across the Sunbelt states</div>
            <div className="flex items-center space-x-6">
              <a href="tel:3214567890" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <svg className="w-4 h-4 text-brand-cyan" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                <span>(321)-456-7890</span>
              </a>
              <div className="hidden sm:flex"><SocialIcons /></div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                {link}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="block py-2 px-4 text-sm text-gray-300 hover:bg-brand-dark rounded">
                {link}
              </a>
            ))}
             <div className="sm:hidden flex justify-center pt-4"><SocialIcons /></div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Facebook', url: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29h-3.128V11.17h3.128V8.63c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.54h-3.12V24h5.698c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg> },
        { name: 'Twitter', url: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.033 7.297c.012.186.012.372.012.558 0 5.68-4.323 12.23-12.23 12.23-2.43 0-4.69-.71-6.6-2.02a8.532 8.532 0 006.18-1.79 4.28 4.28 0 01-4-2.97 4.543 4.543 0 001.9-.07 4.28 4.28 0 01-3.43-4.2 4.194 4.194 0 001.9.53 4.28 4.28 0 01-1.3-5.71 12.15 12.15 0 008.8 4.47 4.28 4.28 0 017.3-3.9c.79-.15 1.54-.44 2.22-.85a4.3 4.3 0 01-1.54 1.93c.7-.08 1.37-.27 2-.54a4.62 4.62 0 01-1.73 1.77z"/></svg> },
        { name: 'LinkedIn', url: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> }
    ];

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                 <svg className="w-10 h-10 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
                </svg>
                <span className="text-2xl font-bold">ValueAdd</span>
            </div>
            <p className="text-gray-400">Specializing in maximizing the value of Class B and C multifamily properties throughout the Sunbelt region.</p>
            <div className="flex space-x-4 pt-2">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} className="text-gray-400 hover:text-brand-cyan transition-colors duration-300">
                        {link.icon}
                    </a>
                ))}
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about-us" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Property Management</li>
              <li className="text-gray-400">Asset Management</li>
              <li className="text-gray-400">Financial Reporting</li>
              <li className="text-gray-400">Capital Improvements</li>
            </ul>
          </div>
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start"><span className="mr-2 mt-1">&#9906;</span>123 Property Lane, Nashville, TN 37203</li>
              <li className="flex items-center"><span className="mr-2">&#9742;</span><a href="tel:3214567890" className="hover:text-white">(321)-456-7890</a></li>
              <li className="flex items-center"><span className="mr-2">&#9993;</span><a href="mailto:info@valueadd.com" className="hover:text-white">info@valueadd.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ValueAdd Property Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-6 mt-10 text-sm text-slate-500 border-t border-slate-100">

    
      <div className="text-center md:text-left">
        © 2026, made with <span className="text-pink-500">❤️</span> by{' '}
        <span className="font-bold text-slate-800">MyPiHUB</span>{' '}
        for a better web.
      </div>

      <div className="flex gap-8">
        <a href="#" className="hover:text-purple-500 transition-colors">
          MyPatientHUB
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          About Us
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Blog
        </a>
      </div>

    </footer>
  );
};

export default Footer;
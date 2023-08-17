import React, { useState } from 'react';

import { navbar } from '../assets';

import { BsSunFill, BsSun } from 'react-icons/bs';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 py-8 z-50 bg-gradient-to-b from-primary/30">
      <div className="flex justify-between section-container">
        <a href="#home" className="text-3xl font-extrabold select-none">
          ddharianto
        </a>
        <div className="hidden md:flex justify-between items-end gap-6">
          {navbar.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item?.target !== undefined ? item.target : '_self'}
              className={`text-2xl font-bold ${
                item.title === 'resume.' && 'underline decoration-flame'
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-9 right-3">
        {!mobileMenuOpen && (
          <BsSunFill
            className="w-10 h-10 text-white rounded-full p-1"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-full backdrop-blur z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className="mt-[60px] flex flex-col items-start select-none gap-8">
          <BsSun
            className="absolute top-9 right-3 w-10 h-10 text-white rounded-full p-1"
            onClick={() => setMobileMenuOpen(false)}
          />
          {navbar.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item?.target !== undefined ? item.target : '_self'}
              className={`text-4xl font-bold ${
                item.title === 'resume.' && 'underline decoration-flame'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

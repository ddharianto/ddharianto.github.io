import React from 'react';

import { navbar } from '../assets';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 py-8 z-50 bg-gradient-to-b from-primary/20 to-transparent to-90%">
      <div className="flex justify-between section-container">
        <a href="#home" className="text-3xl font-extrabold select-none">
          ddharianto
        </a>
        <div className="flex justify-between gap-6">
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
    </div>
  );
};

export default Navbar;

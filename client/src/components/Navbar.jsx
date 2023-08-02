import React from 'react';

import { react, navbar } from '../assets';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 py-8 z-50 bg-gradient-to-b from-primary/20 to-transparent to-90%">
      <div className="flex justify-between section-container">
        <a href="#home" className="text-3xl font-extrabold select-none">
          ddharianto
        </a>
        <div className="flex justify-between gap-6">
          {navbar.map((item) => (
            <a key={item} href="#" className="text-2xl font-bold">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

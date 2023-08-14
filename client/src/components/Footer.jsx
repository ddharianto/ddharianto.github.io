import React from 'react';

const Footer = () => {
  return (
    <div className="font-bold text-lg leading-normal">
      Designed and developed with{' '}
      <span className="hover:animate-ping_once">⭐</span> by{' '}
      <a href="#home" className=" py-1 underline decoration-flame">
        ddharianto.
      </a>{' '}
      |
      <span className="font-thin text-[15px]">
        {' '}
        Every vector used in this portfolio is created by{' '}
        <a
          href="https://www.freepik.com/"
          title="Freepik"
          className="underline decoration-flame"
        >
          Freepik
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { sun } from '../assets/';

const Loader = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: ['loading the universe..^500'],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      cursorChar: '.',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center flex-col">
      <img
        src={sun}
        alt="loader"
        className="w-[200px] z-10 mt-5 object-contain animate-spinslow"
      />
      <p className="z-10 text-2xl font-mono font-semibold tracking-wider">
        <span ref={spanRef} />
      </p>
      <div className="absolute z-0 m-auto top-0 bottom-0 left-0 right-0 w-[400px] h-[400px] bg-flame/5 rounded-full animate-ping" />
      <div className="absolute z-0 m-auto top-0 bottom-0 left-0 right-0 w-[300px] h-[300px] bg-flame/25 rounded-full animate-ping" />
      <div className="absolute z-0 m-auto top-0 bottom-0 left-0 right-0 w-[250px] h-[250px] bg-flame/40 rounded-full animate-ping" />
    </div>
  );
};

export default Loader;

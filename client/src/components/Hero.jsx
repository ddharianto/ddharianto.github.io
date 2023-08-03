import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: [
        'I am a front-end developer^1000',
        'I am a back-end developer^1000',
        'I am a full stack developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative w-full flex md:items-center min-h-screen mb-8 bg-hero bg-cover bg-no-repeat bg-left"
      id="home"
    >
      <div className="flex flex-col justify-center items-center gap-2 section-container">
        <span className="text-5xl font-bold">Dede Harianto</span>
        <p className="text-3xl font-semibold">
          <span ref={spanRef} />
        </p>
      </div>
      {/* transition */}
      <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-primary"></div>
      </div>
    </div>
  );
};

export default Hero;

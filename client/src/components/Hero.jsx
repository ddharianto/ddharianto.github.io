import React from 'react';

import { hero_bg } from '../assets';

const Hero = () => {
  return (
    <div className="relative w-full flex md:items-center min-h-screen bg-hero bg-cover bg-no-repeat bg-left">
      <div className="flex flex-col justify-center items-center gap-2 section-container">
        <span className="text-5xl font-bold">Dede Harianto</span>
        <span className="text-2xl font-semibold">Full Stack Web Developer</span>
      </div>
      <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-primary"></div>
        {/* <div className="w-screen h-32 -bottom-[64px] py-8 bg-gradient-to-b from-primary from-25% to-transparent "></div> */}
      </div>
    </div>
  );
};

export default Hero;

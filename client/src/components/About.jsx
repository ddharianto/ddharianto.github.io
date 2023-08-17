import React from 'react';

const About = () => {
  const javascript = (
    <span className="text-raisin bg-yellow-300 px-1 select-none ">
      JavaScript
    </span>
  );
  const everything = (
    <span className="font-extrabold underline decoration-flame text-transparent bg-clip-text bg-gradient-to-br from-[#FF288C] from-20% via-[#3526fd] to-[#06ff9f]">
      everything
    </span>
  );
  const flexible = (
    <div className="inline font-extrabold tracking-widest my-2 cursor-default selection:text-4xl">
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        F
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        l
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        e
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        x
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        i
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        b
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        l
      </span>
      <span className="hover:animate-ping_once hover:text-[35px] hover:leading-9">
        e
      </span>
    </div>
  );

  return (
    <div
      className="relative min-w-[550px] w-full flex flex-col min-h-screen bg-raisin"
      id="about"
    >
      <div className="w-full min-h-screen flex flex-col justify-center items-start gap-8 section-container animate-slideup">
        <h1 className="font-medium text-3xl sm:text-4xl leading-normal text-center md:text-left select-none">
          {javascript} is me. {javascript} can do {everything}.
        </h1>
        <h1 className="font-medium text-2xl py-2 leading-10 text-center md:text-left select-none">
          I mainly work with Javascript. I like Javascript because it suits my
          personality. {flexible}. I am a fast learner and not afraid to learn
          new things.
        </h1>
      </div>

      {/* transition */}
      <div className="absolute top-0 z-10">
        <div className="min-w-[550px] w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-b from-primary"></div>
      </div>
      {/* <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-flame via-flame/30"></div>
      </div> */}
    </div>
  );
};

export default About;

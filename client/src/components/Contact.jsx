import React from 'react';

const Contact = () => {
  return (
    <div
      className="relative w-full flex flex-col min-h-screen bg-raisin"
      id="contact"
    >
      <div className="relative w-full min-h-screen flex flex-col justify-center animate-slideup section-container">
        <div className="absolute inset-x-0 bottom-0 w-full h-[80%] flex flex-col bg-sun bg-cover bg-no-repeat"></div>
      </div>

      {/* transition */}
      <div className="absolute top-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-b from-flame via-flame/30"></div>
      </div>
      {/* <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-flame via-flame/30"></div>
      </div> */}
    </div>
  );
};

export default Contact;

import React from 'react';

import Footer from './Footer';
import { contact } from '../assets/';

const Contact = () => {
  return (
    <div
      className="relative min-w-[550px] w-full flex flex-col min-h-screen bg-raisin"
      id="contact"
    >
      <div className="relative w-full min-h-screen flex flex-col justify-center animate-slideup section-container">
        <div className="absolute inset-x-0 bottom-0 w-full max-h-[600px] h-full flex flex-col bg-sun bg-cover bg-center md:bg-top bg-no-repeat">
          <div className="absolute inset-x-0 bottom-0 flex flex-col justify-center items-center mb-10 section-container gap-10">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold font-serif text-3xl sm:text-4xl leading-normal">
                <span className="bg-white text-raisin py-2">
                  Let's{' '}
                  <span className="underline decoration-flame">
                    colaborate.
                  </span>
                </span>
              </h1>
              <h1 className="font-bold font-serif text-3xl sm:text-4xl leading-normal">
                <span className="bg-white text-raisin py-2 ">
                  You can find me on social media.
                </span>
              </h1>
            </div>
            <div className="flex flex-row gap-10">
              {contact.map((item) => (
                <a
                  key={item.src}
                  href={item.src}
                  className="backdrop-blur rounded-full"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-row gap-4">
              <a
                href="/resume_ddharianto.pdf"
                className="text-2xl font-extrabold leading-none select-none border-4 border-raisin rounded-lg p-2 underline decoration-flame bg-raisin"
              >
                resume.
              </a>
              <a
                href="mailto:ddharianto11@gmail.com"
                className="text-2xl font-extrabold leading-none text-raisin select-none border-4 border-white rounded-lg p-2 underline decoration-flame bg-white"
              >
                mail me.
              </a>
            </div>
            <div className="flex my-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* transition */}
      <div className="absolute top-0 z-10">
        <div className="min-w-[550px] w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-b from-flame via-flame/30"></div>
      </div>
      {/* <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-flame via-flame/30"></div>
      </div> */}
    </div>
  );
};

export default Contact;

import React from 'react';

import { skills, asteroid, asteroid_purple } from '../assets';

const Skills = () => {
  return (
    <div
      className="relative w-full flex flex-col min-h-screen bg-raisin"
      id="skills"
    >
      <div className="w-full min-h-screen flex flex-col justify-start animate-slideup ">
        <div className="relative w-[150px] h-[150px] flex justify-center section-container mt-5 mb-[60px]">
          <img
            src={asteroid_purple}
            alt="skills"
            className={`absolute w-[150px] h-[150px] group-hover/planet:invisible`}
          />
          <h1 className="absolute m-auto bottom-[55px] font-bold tracking-widest bg-black/50 p-2 rounded-full">
            My Skills
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center section-container gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col justify-center items-center gap-4"
            >
              <h1 className="font-medium text-2xl py-2 leading-10">
                {skill.name}
              </h1>
              <div className="flex flex-wrap justify-center gap-5">
                {skill.stack.map((tech, i) => (
                  <div
                    key={i}
                    className="relative w-[80px] h-[80px] flex justify-center odd:animate-bounceslow even:animate-bounceslowdelay"
                  >
                    <img
                      src={
                        skill.id !== 'ot'
                          ? skill.id === 'fe'
                            ? asteroid
                            : asteroid_purple
                          : asteroid
                      }
                      alt="skills"
                      className={`absolute w-[80px] h-[80px]`}
                    />
                    <div className="absolute bottom-[15px]">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* transition */}
      {/* <div className="absolute top-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-b from-flame via-flame/30"></div>
      </div>
      <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-flame via-flame/30"></div>
      </div> */}
    </div>
  );
};

export default Skills;

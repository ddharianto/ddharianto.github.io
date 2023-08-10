import React, { Fragment } from 'react';

import { projects, asteroid } from '../assets';

const Projects = () => {
  return (
    <div className="relative w-full flex min-h-screen bg-raisin" id="projects">
      <div className="w-full min-h-screen flex flex-col justify-center animate-slideup ">
        <div className="relative w-[150px] h-[150px] flex justify-center section-container">
          <img
            src={asteroid}
            alt="my project"
            className={`absolute w-[150px] h-[150px] group-hover/planet:invisible`}
          />
          <h1 className="absolute m-auto bottom-[55px] font-bold bg-black/50 p-2 rounded-full">
            My Projects
          </h1>
        </div>
        <div className="h-fit flex flex-wrap justify-center items-center my-[50px] gap-8 select-none">
          {projects.map((el) => (
            <div
              key={el.name}
              className="h-[500px] flex felx-col rounded-full my-20 mx-6 odd:animate-bounceslow even:animate-bounceslowdelay group/planet"
            >
              <div className="relative w-[500px] h-[500px] flex justify-center rounded-full ">
                <img
                  src={el?.bg}
                  alt=""
                  className={`absolute z-50 w-full h-full rounded-full ${el.bg_deg} group-hover/planet:invisible`}
                />
                <div className="z-10 flex flex-col mt-10 max-w-[450px] items-center text-center font-mono p-4">
                  <h1 className="max-w-[300px] text-2xl font-bold tracking-widest mb-4">
                    {el.name}
                  </h1>
                  <h1 className="text-lg leading-tight line-clamp-5">
                    {el.desc}
                  </h1>
                </div>
                <a
                  href={el?.demo !== undefined ? el.demo : el.github}
                  target="_blank"
                  className="absolute z-10 bottom-1 flex justify-center opacity-50 hover:opacity-100 peer/img"
                >
                  <img
                    src={el.image}
                    alt={el.name}
                    className="w-[98%] h-auto rounded-b-full rounded-t-[200px]"
                  />
                </a>
                <div className="absolute z-10 m-auto bottom-[50px] max-w-[200px] flex flex-wrap justify-center items-center gap-4 peer-hover/img:invisible">
                  {el.stack.map((tech, i) => (
                    <div key={i} className="p-2 bg-orange-500 rounded-full">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* background */}
                <div className="absolute invisible z-0 group-hover/planet:visible m-auto top-0 bottom-0 left-0 right-0 w-[500px] h-[500px] bg-orange-700 rounded-full" />
                <div className="absolute invisible z-0 group-hover/planet:visible m-auto top-0 bottom-0 left-0 right-0 w-[300px] h-[300px] bg-orange-500 rounded-full" />
                <div className="absolute invisible z-0 group-hover/planet:visible m-auto top-0 bottom-0 left-0 right-0 w-[150px] h-[150px] bg-yellow-500 rounded-full" />
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

export default Projects;

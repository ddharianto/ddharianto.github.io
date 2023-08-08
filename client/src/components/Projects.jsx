import React, { Fragment } from 'react';

import { projects } from '../assets';

const Projects = () => {
  return (
    <div className="relative w-full flex min-h-screen bg-white" id="project">
      <div className="w-full min-h-screen flex justify-center items-center animate-slideup">
        <div className="h-fit flex flex-wrap justify-center items-center my-[150px] gap-8">
          {projects.map((el) => (
            <div
              key={el.name}
              className="h-[400px] flex felx-col rounded-full my-20 mx-6 odd:animate-bounceslow even:animate-bounceslowdelay group"
            >
              <div className="relative w-[500px] h-[500px] flex justify-center rounded-full">
                <img
                  src={el?.bg}
                  alt=""
                  className={`absolute z-50 w-full h-full rounded-full ${el.bg_deg} group-hover:invisible`}
                />
                <div className="z-10 flex flex-col mt-10 max-w-[450px] text-center p-4">
                  <h1 className="text-3xl ">{el.name}</h1>
                  <h1 className="text-lg ">{el.desc}</h1>
                </div>
                <img
                  src={el.image}
                  alt={el.name}
                  className="absolute z-10 bottom-1 w-[98%] h-auto rounded-b-full rounded-t-[200px] opacity-70 hover:opacity-100"
                />
                <div className="absolute z-10 m-auto bottom-[100px] max-w-[200px] flex flex-wrap justify-center gap-6">
                  {el.stack.map((tech, i) => (
                    <div key={i} className="">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* background */}
                <div className="absolute invisible z-0 group-hover:visible m-auto top-0 bottom-0 left-0 right-0 w-[500px] h-[500px] bg-orange-700 rounded-full" />
                <div className="absolute invisible z-0 group-hover:visible m-auto top-0 bottom-0 left-0 right-0 w-[300px] h-[300px] bg-orange-500 rounded-full" />
                <div className="absolute invisible z-0 group-hover:visible m-auto top-0 bottom-0 left-0 right-0 w-[150px] h-[150px] bg-yellow-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* transition */}
      <div className="absolute top-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-b from-flame via-flame/30"></div>
      </div>
      <div className="absolute bottom-0 z-10">
        <div className="w-screen h-64 -bottom-[64px] py-8 bg-gradient-to-t from-flame via-flame/30"></div>
      </div>
    </div>
  );
};

export default Projects;

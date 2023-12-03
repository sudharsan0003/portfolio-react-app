import React from 'react';
import { reactData } from '../data/reactData';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { jsData } from '../data/jsData';
import Slider from 'react-slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work = () => {
  // projects file
  const project = reactData;
  const projects = jsData;
  //setProject(data);

  return (
    <div name='work' className='w-full h-screen  text-gray-300 bg-[#0a192f]'>
      <div className='text-center bg-[#0a192f] pt-32 '>
        <p className='text-4xl font-bold inline border-b-4 border-orange-300   '>
          Works
        </p>
        <p className='py-6'>// Check out some of my recent work</p>
      </div>
      <div className='max-w-[650px] mx-auto my-5 flex flex-col justify-center w-full h-full'>
        {project.map((item) => (
          <div
            className='shadow-md h-2/4 shadow-orange-300 group container rounded-md
              flex  justify-center text-center items-center my-3 mx-auto w-[90%]'
          >
            <div className='w-[80%] '>
              <div className=' rounded-md flex justify-center text-center items-center mx-auto w-full  '>
                <img
                  src={item.image}
                  alt='project-image'
                  className='h-[200px] w-full py-3 mx-auto bg-cover bg-no-repeat bg-center'
                />
              </div>
            </div>
            <div className='flex flex-col gap-24 justify-around px-1 ml-4'>
              <a href={item.live} target='_blank'>
                <button
                  className='text-center rounded-lg px-2 py-2 
                  bg-white text-gray-700  '
                >
                  <FaExternalLinkAlt />
                </button>
              </a>
              <a href={item.github} target='_blank'>
                <button
                  className='text-center rounded-lg px-2 py-2 
                  bg-white text-gray-700'
                >
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

// {
//   project.map((item) => (
//     <div
//       style={{
//         backgroundImage: `url(${item.image})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}
//       className='shadow-md  shadow-orange-300 group container rounded-md
//               flex justify-center text-center items-center mx-auto mt-3  '
//     >
//       <div className=' '>
//         <span className='text-2xl font bold text-white tracking-wider '>
//           {item.name}
//         </span>
// <div className='pt-8 text-center '>
//   <a href={item.live} target='_blank'>
//     <button
//       className='text-center rounded-lg px-4 py-3 m-2
//                bg-white text-gray-700 font-bold text-lg'
//     >
//       Live
//     </button>
//   </a>
//   <a href={item.github} target='_blank'>
//     <button
//       className='text-center rounded-lg px-4 py-3 m-2
//                bg-white text-gray-700 font-bold text-lg'
//     >
//       Code
//     </button>
//   </a>
// </div>
//       </div>
//     </div>
//   ));
// }

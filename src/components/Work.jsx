import React from 'react';
import { reactData } from '../data/reactData';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { jsData } from '../data/jsData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Work = () => {
  const project = reactData;
  const projects = jsData;

  const options = {
    loop: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    slideSpeed: 200,
    pullDrag: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div name='work' className='w-full h-max  text-gray-300 bg-[#0a192f]'>
      <div className='text-center bg-[#0a192f] pt-32 '>
        <p className='text-4xl font-bold inline border-b-4 border-orange-300   '>
          Works
        </p>
        <p className='py-6'>// Check out some of my recent work</p>
      </div>
      <div className='max-w-[650px] mx-auto my-5 flex flex-col justify-center w-full h-full bg-[#0a192f]'>
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
                  bg-white text-gray-700 duration-200 hover:scale-150 p-3 hover:bg-transparent '
                >
                  <FaExternalLinkAlt />
                </button>
              </a>
              <a href={item.github} target='_blank'>
                <button
                  className='text-center rounded-lg px-2 py-2 
                  bg-white text-gray-700 duration-200 hover:scale-150 p-3 hover:bg-transparent'
                >
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='w-3/4 mx-auto my-16  '>
        <OwlCarousel
          className='owl-theme w-full
          '
          {...options}
        >
          {projects.map(({ id, name, image, github, live }) => (
            <div className='w-full border  shadow-orange-300 shadow-md rounded-md'>
              <img
                src={image}
                alt='project'
                className='rounded-md w-3/4 duration-200 hover:scale-105 p-3'
              />
              <div className='flex items-center justify-between p-3 bg-[#0a192f]'>
                <a href={live} target='_blank'>
                  <button
                    className='text-center rounded-lg px-2 py-2 
                  bg-white text-gray-700 duration-200 hover:scale-150 p-3 hover:bg-transparent'
                  >
                    <FaExternalLinkAlt size={10} />
                  </button>
                </a>
                <a href={github} target='_blank'>
                  <button
                    className='text-center rounded-lg px-2 py-2 
                  bg-white text-gray-700 duration-200 hover:scale-150 p-3 hover:bg-transparent'
                  >
                    <FaGithub size={10} />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Work;

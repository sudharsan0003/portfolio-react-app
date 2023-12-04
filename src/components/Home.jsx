import React from 'react';
import User from '../assets/user.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center '
    >
      <div className=' flex flex-col  lg:flex-row w-[90%] h-screen bg-[#0a192f]   '>
        <div className='w-[70%] mt-20  mx-auto px-8 flex flex-col justify-center h-full  '>
          <h2 className='text-2xl sm:text-5xl font-semibold text-gray-300'>
            Hello, I'm <span className='text-6xl text-orange-300'>S</span>
            udharsan
          </h2>
          <h1 className='mt-1 text-sm  sm:text-2xl font-bold text-gray-200 '>
            <TypeAnimation
              sequence={[
                ' Frontend Devoloper...',
                1000,
                'FullStack Developer...',
                1000,
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div className='flex gap-10'>
            <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
              <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
                <span className='animate-none lg:animate-pulse '>My Work</span>
              </button>
            </Link>
            <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
              <span className='animate-none lg:animate-pulse '>Resume</span>
            </button>
          </div>
        </div>
        <div className='w:full mt-5 mb-10  lg:w-[30%] lg:mt-24  flex justify-center items-center'>
          <img
            src={User}
            alt='user-img'
            className='h-[150px] w-[150px] rounded-full  hover:-translate-y-6 transition duration-500 ease-in-out lg:w-[250px] lg:h-[250px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

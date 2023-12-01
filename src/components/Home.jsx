import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import User from '../assets/user.jpg';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] '>
      <div
        name='home'
        className=' flex mx-auto md:flex fixed flex-col  border border-2-solid'
      >
        <div className='max-w-[1000px] mx-auto mt-20 px-8 flex flex-col justify-center h-full border border-2-solid'>
          <h2 className='text-2xl sm:text-7xl font-semibold text-gray-300'>
            Hello, I'm <span>Sudharsan</span>
          </h2>
          <h1 className='text-3xl sm:text-7xl font-bold text-gray-200'>
            Full Stack Developer.
          </h1>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </div>
        </div>
        <div className='w-1/3 mx-auto h-3/4 mt-20 p-10 border border-2-solid'>
          <img
            src={User}
            alt='user-img'
            className='rounded-full h-[250px] w-[250px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

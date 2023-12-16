import React from 'react';
import User from '../assets/user.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center bg-[#0a192f]'
    >
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h2 className='text-2xl sm:text-4xl font-semibold text-gray-300'>
          Hello, I'm <span className='text-5xl text-orange-300'>S</span>
          udharsan
        </h2>
        <h1 className='mt-1 text-sm  sm:text-xl font-bold text-gray-200 '>
          <TypeAnimation
            sequence={[
              ' Frontend Devoloper...',
              1000,
              'FullStack Developer...',
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in the creation of immersive
          digital experiences. My passion for both development. Currently
          immersed in the world of responsive full-stack web applications.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <Link
                to='work'
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
                  <span className='animate-none lg:animate-pulse '>
                    My Work
                  </span>
                </button>
              </Link>
              <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
                <span className='animate-none lg:animate-pulse '>
                  <a href='https://drive.google.com/file/d/1O9JsSCt29I0-vsdNYem-boG_kEcH0mOF/view'>
                    Resume
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={User}
        alt='user-img'
        className='h-[150px] w-[150px] rounded-full  hover:-translate-y-6 transition duration-500 ease-in-out lg:w-[250px] lg:h-[250px]'
      />
    </div>
  );
};

export default Home;

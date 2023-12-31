import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Js from '../assets/js.png';
import LogoReact from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Git from '../assets/git.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full py-24 bg-[#0a192f] text-gray-300 '>
      {/* Container */}
      <div className='text-center pt-5 bg-[#0a192f]   '>
        <p className='text-4xl my-1 font-bold inline border-b-4 border-orange-400   '>
          Skills
        </p>
      </div>
      <div className='max-w-[1000px] mx-auto py-8 flex flex-col justify-center w-3/4  '>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mx-auto  h-2/4  '>
          <div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            u
          >
            <img className='w-20 mx-auto' src={Html} alt='icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt='icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Js} alt='icon' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={LogoReact} alt='icon' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='icon' />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt='icon' />
            <p className='my-4'>Bootstrap</p>
          </div>
          <div className='hidden md:inline shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='icon' />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Firebase} alt='icon' />
            <p className='my-4'>Firebase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='icon' />
            <p className='my-4'>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

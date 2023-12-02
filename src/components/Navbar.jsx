import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';
import { GoProjectRoadmap } from 'react-icons/go';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => setShow(!show);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a182e] text-gray-300 '>
      <div className='text-2xl'>
        <span className=''>Sudhar</span>
        <span className='text-orange-300'>san</span>
      </div>

      {/* menu */}
      <ul className='hidden text-xl font-semibold md:flex '>
        <li>
          <Link to='/About' spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* ham */}
      <div className='md:hidden z-10 ' onClick={clickHandler}>
        {!show ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !show
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Project</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* lhs icon */}
      <div className='hidden sm:flex fixed flex-col top-[40%] left-0'>
        <ul>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Home
              <FaHome size={20} />
            </a>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#333333] '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              About
              <FcAbout size={20} />
            </a>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Project
              <GoProjectRoadmap size={20} />
            </a>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#F6A48F]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='/'
            >
              Contact
              <IoMdContact size={20} />
            </a>
          </li>
        </ul>
      </div>

      {/* rhs icon */}
      <div className='hidden sm:flex fixed flex-col top-[40%] right-0'>
        <ul>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full  text-gray-300'
              href='/'
            >
              <FaLinkedin size={20} /> L-in
            </a>
          </li>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <FaGithub size={20} /> Github
            </a>
          </li>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <HiOutlineMail size={20} /> Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

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
          <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
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
        <li className='py-6 text-4xl'>
          <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandler} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandler} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={clickHandler} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link
            onClick={clickHandler}
            to='contact'
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* lhs icon */}
      <div className='hidden sm:flex fixed flex-col top-[40%] left-0'>
        <ul>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <Link
              to='home'
              smooth={true}
              offset={50}
              duration={500}
              className='flex justify-between items-center w-full text-gray-300'
            >
              Home
              <FaHome size={20} />
            </Link>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#333333] '>
            <Link
              to='about'
              smooth={true}
              offset={50}
              duration={500}
              className='flex justify-between items-center w-full text-gray-300'
            >
              About
              <FcAbout size={20} />
            </Link>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
            <Link
              to='work'
              smooth={true}
              offset={50}
              duration={500}
              className='flex justify-between items-center w-full text-gray-300'
            >
              Project
              <GoProjectRoadmap size={20} />
            </Link>
          </li>
          <li className='w-[110px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] duration-300 bg-[#F6A48F]'>
            <Link
              to='contact'
              smooth={true}
              offset={50}
              duration={500}
              className='flex justify-between items-center w-full text-gray-300'
            >
              Contact
              <IoMdContact size={20} />
            </Link>
          </li>
        </ul>
      </div>

      {/* rhs icon */}
      <div className='hidden sm:flex fixed flex-col top-[40%] right-0'>
        <ul>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full  text-gray-300'
              href='https://www.linkedin.com/in/sudharsan-fd/'
            >
              <FaLinkedin size={20} /> L-in
            </a>
          </li>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/sudharsan0003'
            >
              <FaGithub size={20} /> Github
            </a>
          </li>
          <li className='w-[120px] h-[40px] flex justify-between items-center mr-[-70px] hover:ml-[-70px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F1%2F&ifkv=ASKXGp0u0Bnhei8VSWmWzGXOTdSTl5zUpC6fTdq8csefE0hZCgl_X0uxcAGl-t8I2HDPJmw95zDluQ&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S956958008%3A1701617301401707&theme=glif#sent'
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

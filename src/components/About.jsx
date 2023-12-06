import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full py-24 bg-[#0a192f] text-gray-300  '>
      <div className='text-center  '>
        <p className='text-4xl  font-bold inline border-b-4 border-orange-400'>
          About
        </p>
      </div>
      <div className='flex flex-col justify-center items-center w-3/4 mx-auto h-max  mt-10 '>
        <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-auto pt-10 mt-10  '>
          <div className='mt-1  sm:text-right text-3xl font-semiBold sm:mt-16 '>
            <p>
              <h5 className='ml-5'>
                Hi. I'm <span className='text-orange-300'>Sudharsan</span>,
              </h5>
              <p className='sm:text-right text-xl font-light ml-5'>
                I'm a passionate web developer with create interactive and
                responsive websites. Currently specializing in front-end
                technologies.
              </p>
            </p>
          </div>
          <div className=''>
            <ul className='flex flex-col gap-2 mb-5 sm:mb-0 '>
              <li>
                I have completed my bachelor's degree in Sri Ramakrishna College
                oF arts and science.
              </li>
              <li>
                {' '}
                Following my undergraduate studies, I pursued a Full Stack
                Developer course in Skill Safari Academy, where I specialized in
                Frontend Developer . My thesis focused on developing a
                interactive websites.
              </li>
              <li>
                Explore my portfolio to see some of my latest projects. The
                skills and knowledge I gained during my academic journey, I'm
                enthusiastic about the opportunity to bring my academic
                background and practical experience to contribute to the
                innovative projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

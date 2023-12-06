import React from 'react';

const test = () => {
  return (
    <div
      id='About'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'
    >
      <img
        data-aos='fade-down'
        src='https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D'
        width={290}
        height={290}
        alt=''
        className='rounded-sm border-2 p-1 border-fuchsia-500 img_glow'
      />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1
          data-aos='fade-right'
          className='text-[52px] font-semibold mb-8 text-fuchsia-500 leading-normal uppercase'
        >
          About Me
        </h1>
        <p data-aos='fade-left'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          libero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore vitae nemo temporibus perferendis repellat eos! Architecto quae
          quia quasi pariatur suscipit. Obcaecati consectetur officia
          exercitationem maxime perspiciatis quasi sint alias? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Hic eos mollitia, amet
          reprehenderit obcaecati suscipit excepturi dolorem. Veniam, aliquam
          enim.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>
                {' '}
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
          
    </div>
  );
};

export default test;

// <div
//   name='home'
//   className='w-full h-screen  bg-[#0a192f] flex justify-center items-center '
// >
//   <div className=' flex flex-col  lg:flex-row w-[90%] h-screen bg-[#0a192f]   '>
//     <div className='w-[70%] mt-20  mx-auto px-8 flex flex-col justify-center h-full  '>
//       <h2 className='text-2xl sm:text-5xl font-semibold text-gray-300'>
//         Hello, I'm <span className='text-6xl text-orange-300'>S</span>
//         udharsan
//       </h2>
//       <h1 className='mt-1 text-sm  sm:text-2xl font-bold text-gray-200 '>
//         <TypeAnimation
//           sequence={[
//             ' Frontend Devoloper...',
//             1000,
//             'FullStack Developer...',
//             1000,
//           ]}
//           wrapper='span'
//           speed={50}
//           style={{ fontSize: '1.5em', display: 'inline-block' }}
//           repeat={Infinity}
//         />
//       </h1>
//       <p className='text-[#8892b0] py-4 max-w-[700px]'>
//         I’m a full-stack developer specializing in building (and
//         occasionally designing) exceptional digital experiences. Currently,
//         I’m focused on building responsive full-stack web applications.
//       </p>
//       <div className='flex gap-10'>
//         <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
//           <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
//             <span className='animate-none lg:animate-pulse '>My Work</span>
//           </button>
//         </Link>
//         <button className='text-white border-2 px-8 py-2 my-2 flex items-center hover:bg-orange-600 hover:orange-pink-600'>
//           <span className='animate-none lg:animate-pulse '>Resume</span>
//         </button>
//       </div>
//     </div>
//     <div className='w:full mt-5 mb-10  lg:w-[30%] lg:mt-24  flex justify-center items-center'>
//       <img
//         src={User}
//         alt='user-img'
//         className='h-[150px] w-[150px] rounded-full  hover:-translate-y-6 transition duration-500 ease-in-out lg:w-[250px] lg:h-[250px]'
//       />
//     </div>
//   </div>
// </div>

import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-max pt-[22rem] bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/ba48e9af-ae24-4ca6-9e23-fb2d84c9fb48'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8 text-center '>
          <p className='text-4xl font-bold inline border-b-4 border-orange-300 text-gray-300'>
            Contact
          </p>
        </div>
        <input
          className='bg-[#c36d43] text-black p-2 mb-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='bg-[#cd6e3f] text-black p-2 mb-2'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#cd6e3f] text-black p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-orange-500 hover:border-orange-500 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

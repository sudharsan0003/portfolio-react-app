import React from 'react';
import { reactData } from '../data/reactData';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { jsData } from '../data/jsData';
import Slider from 'react-slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

const JsWork = () => {
  const projects = jsData;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#fff]'>
      <Slider {...settings}>
        {projects.map(({ id, name, image, github, live }) => (
          <div className='slide'>
            <div className='each'>
              <div>
                <h2 className='project-title text-red-500'>{name}hi</h2>
                <img className='slide-image' src={image} alt='' />
              </div>
              <div className='btn-container'>
                <a href={live}>
                  <button className='live-link'>
                    <HiOutlineExternalLink />
                  </button>
                </a>
                <a href={github}>
                  <button className='live-link'>
                    <AiFillGithub />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JsWork;

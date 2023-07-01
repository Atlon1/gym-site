import React, {useState,useEffect} from 'react';
import {abouteng} from '../translations/eng/data';
import {aboutpl} from '../translations/pl/data';

import {IoIosArrowDroprightCircle} from "react-icons/io";



const About = () => {


    const {icon,title,subtitle1,subtitle2,link} = localStorage.getItem('lang') === 'pl' ? aboutpl : abouteng


    return (
        <section className=' py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]' id="about">
            <div className='container mx-auto px-[20px] lg:px-[135px]'>
                <div
                    data-aos='fade-up'
                    data-aos-dely='100'
                    className='section-title-group justify-start'>
                    <img src={icon} alt='icon'/>
                    <h2 className='h2 section-title'>{title}
                        <span className='text-primary-200'>
                        .
                    </span>
                    </h2>
                </div>
                <p
                    data-aos='fade-up'
                    data-aos-dely='200'
                    className='md:text-body-md mb-12'>{subtitle1}</p>
                <p  data-aos='fade-up'
                    data-aos-dely='300'
                    className='md:text-body-md mb-8'>{subtitle2}</p>
                <div
                    data-aos='fade-up'
                    data-aos-dely='400'>
                    <a className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
                       href='#'>{link}
                        <IoIosArrowDroprightCircle className='text-2xl'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
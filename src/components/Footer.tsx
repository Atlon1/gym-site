import React from 'react';
import logoM from '../assets/Maciej_logo.png'
import {footer} from "../translations/eng/data";

const Footer = () => {
    const {logo, copyrightText} = footer


    return (
        <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
            <div className='container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]'
                 data-aos='fade-up'
                 data-aos-offset='200'
                 data-aos-delay='200'
            >
                <a href='/gym-site'>
                    <img src={logo} alt='logo'/>
                </a>
                <a href='#' className='lg:max-w-[175px] max-w-[150px]'>
                    <img src={logoM} alt='logo'/>
                </a>
                <p className='text-neutral-300 text-sm'>{copyrightText}</p>
            </div>
        </footer>
    );
};

export default Footer;
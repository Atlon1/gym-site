import React from 'react';
import {about} from '../translations/eng/data';
import {IoIosArrowDroprightCircle} from "react-icons/io";
import {useTranslation} from "react-i18next";

const About = () => {
    const {icon} = about
    const [t, i18n] = useTranslation('global')

    return (
        <section className=' py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]' id="about">
            <div className='container mx-auto px-[20px] lg:px-[135px]'>
                <div
                    data-aos='fade-up'
                    data-aos-dely='100'
                    className='section-title-group justify-start'>
                    <img src={icon} alt='icon'/>
                    <h2 className='h2 section-title'>{t('about.title')}
                        <span className='text-primary-200'>
                        .
                    </span>
                    </h2>
                </div>
                <p
                    data-aos='fade-up'
                    data-aos-dely='200'
                    className='md:text-body-md mb-12'>{t('about.subtitle1')}</p>
                <p  data-aos='fade-up'
                    data-aos-dely='300'
                    className='md:text-body-md mb-8'>{t('about.subtitle2')}</p>
                <div
                    data-aos='fade-up'
                    data-aos-dely='400'>
                    <a className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
                       href='#'>{t('about.link')}
                        <IoIosArrowDroprightCircle className='text-2xl'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
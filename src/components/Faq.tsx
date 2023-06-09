import React from 'react';
import {faqEng} from "../translations/eng/data";
import {faqPl} from "../translations/pl/data";
import Accordion from "./Accordion";


const Faq = () => {

    const {icon, title, accordions} = localStorage.getItem("lang") === 'pl' ? faqPl : faqEng

    return (
        <section className='section pt-[480px] lg:pt-[280px] mb-[80px] lg:mb-0' id="faq">
            <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
                <div className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
                     data-aos='fade-up'
                     data-aos-offset='200'
                     data-aos-delay='200'
                >
                    <img className='lg:hidden' src={icon} alt="icon"/>
                    <h2 className='h2 section-title lg:mt-[100px]'>{title}
                        <span className='text-primary-200'>.</span>
                    </h2>
                </div>
                <div className='flex flex-col gap-y-4 px-4'
                     data-aos='fade-up'
                     data-aos-offset='300'
                     data-aos-delay='200'
                >
                    {accordions.map((accrdion, idx)=>{
                        return <Accordion accordion={accrdion} key={idx}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
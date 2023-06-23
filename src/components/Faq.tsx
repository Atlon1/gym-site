import React from 'react';

import {faq} from "../data";
import Accordion from "./Accordion";

const Faq = () => {

    const {icon, title, accordions} = faq
    return (
        <section className='bg-pink-200 section pt-[480px] lg:pt-[280px]'>
            <div>
                <div>
                    <img className='lg:hidden' src={icon} alt="icon"/>
                    <h2 className='h2 section-title lg:mt-[100px]'>{title}
                        <span className='text-primary-200'>.</span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Faq;
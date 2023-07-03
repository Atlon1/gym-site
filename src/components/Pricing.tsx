import React from 'react';
import {pricingEng} from '../translations/eng/data';
import {pricingPl} from '../translations/pl/data';
import PlanList from "./PlanList";


const Pricing = () => {
    const {icon, title, plans} = localStorage.getItem("lang") === 'pl' ? pricingPl : pricingEng

    return (
        <section className='section' id='pricing'>
           <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
            data-aos='fade-up'
                data-aos-offset="200"
                data-aos-delay='200'
           >
               <img src={icon} alt='icon'/>
               <h2 className='h2'>{title}<span className='text-primary-200'>.</span></h2>
           </div>
            <PlanList plans = {plans}/>
        </section>
    );
};

export default Pricing;
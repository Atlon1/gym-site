import React from 'react';

import {communityEng} from "../translations/eng/data"
import {communityPl} from "../translations/pl/data"
import CommunitySlider from "./CommunitySlider";



const Community= () => {

    const {icon, title, testimonials} = localStorage.getItem("lang") === "pl" ? communityPl : communityEng

    return (
        <section className='section relative' id="community">
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='section-title-group max-w-[320px] mx-auto px-4 lg:px-0 lg:ml-0 '
                    data-aos = "fade-up"
                    data-aos-offset = "200"
                    data-aos-delay = "200"
                    >
                        <img src={icon} alt='icon'/>
                        <h2 className='h2 section-title '>{title}
                            <span className='text-primary-200'>
                                .
                            </span>
                        </h2>
                    </div>
                    <div className='absolute -right-[375px] lg:-right-[360px] w-[1140px] top-48 lg:top-0'
                         data-aos = "fade-left"
                         data-aos-offset = "200"
                         data-aos-delay = "200"
                    >
                        <CommunitySlider testimonials={testimonials}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
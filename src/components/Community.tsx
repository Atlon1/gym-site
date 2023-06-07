import React from 'react';

import {community} from "../data"
import CommunitySlider from "./CommunitySlider";

const Community = () => {

    const {icon, title, testimonials} = community

    return (
        <section className='section relative'>
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='section-title-group max-w-[240px] mx-auto px-4 lg:px-0 lg:ml-0 '>
                        <img src={icon} alt='icon'/>
                        <h2 className='h2 section-title'>{title}
                            <span className='text-primary-200'>
                                .
                            </span>
                        </h2>
                    </div>
                    <div>
                        <CommunitySlider/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
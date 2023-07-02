import React from 'react';

import {workoutsEng} from '../translations/eng/data';
import {workoutsPl} from '../translations/pl/data';
import WorkoutSlider from "./WorkoutSlider";

const Workouts = () => {

    const {title, icon} = localStorage.getItem("lang") === "pl" ? workoutsPl : workoutsEng

    return (
        <section className='section' id='workouts'>
            <div className='section-title-group max-w-[600px] mx-auto px-4 lg:px-0'
                data-aos='fade-up'
                data-aos-delay='200'>
                <img src={icon} alt='icon'/>
                <h2 className='h2 section-title '>{title} <span className='text-primary-200'>.</span></h2>
            </div>
            <div
                data-aos='fade-up'
                data-aos-delay='300'>
                <WorkoutSlider/>
            </div>
        </section>
    );
};

export default Workouts;
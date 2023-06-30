import React, {useEffect, useState} from 'react';

import {BsFillArrowUpSquareFill} from "react-icons/bs"




const ArrowUp = () => {
    const [isActive, setIsActive] = useState(true)


    useEffect(() => {
        window.addEventListener("scroll",()=> {
            window.scrollY > 150 ? setIsActive(false) : setIsActive(true)
        })
    }, []);

    const handleUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${isActive ? "hidden" : 'md:hidden fixed right-10 bottom-10'} duration-500 transition-all z-30`} id='arrow'>
            <BsFillArrowUpSquareFill
                onClick={handleUp}
                className='w-10 h-10 text-primary-200 cursor-pointer'/>
        </div>
    );
};

export default ArrowUp;
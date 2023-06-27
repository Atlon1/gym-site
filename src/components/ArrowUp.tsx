import React, {useEffect, useState} from 'react';

import {BsFillArrowUpSquareFill} from "react-icons/bs"




const ArrowUp = () => {
    const [isActive, setIsActive] = useState(true)


    useEffect(() => {
       window.scrollY > 150 ? setIsActive(true) : setIsActive(false)
    }, []);

    const handleUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${isActive ? 'md:hidden fixed right-10 bottom-10' : 'opacity-0'} duration-500 transition-all`} id='arrow'>
            <BsFillArrowUpSquareFill
                onClick={handleUp}
                className='w-10 h-10 text-primary-200 cursor-pointer'/>
        </div>
    );
};

export default ArrowUp;
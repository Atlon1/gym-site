import React, {FC, useState} from 'react';

import {FaChevronCircleUp, FaChevronCircleDown} from "react-icons/fa"

interface AccordionProps {
    accordion: any
}

const Accordion: FC<AccordionProps>=  ({accordion}) => {
    const [isOpen, setIsOpen] = useState(false)

    const {question,  answer} = accordion

    return (
        <div className='cursor-pointer'>
            <div className='bg-white border'>
                acc
            </div>
        </div>
    );
};

export default Accordion;
import React, {useState, FC} from 'react';

import {BsCheckCircleFill} from "react-icons/bs"

interface PlanListProps {
    plans: any
}

interface Plan {
    name: string;
    price: number;
    list: string[];
    delay: number
}

const PlanList: FC<PlanListProps> = ({plans}) => {
    const [index, setIndex] = useState(0)


    return (
        <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
            {plans.map((plan : Plan, currentIndex : number)=> {
                const {name, price, list, delay} = plan
                return(
                    <div
                        onClick={() =>setIndex(currentIndex)}
                        className='w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]'
                         key={currentIndex}>
                        <div className={`${currentIndex === index ? "bg-neutral-500 text-white" : 'bg-neutral-400/10 text-neutral-500'} `}>
                            <div>
                                <div>{name}</div>
                                <div>
                                    <div>
                                        <span>{price}</span>
                                        <span>$</span>
                                    </div>
                                    <span>/month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default PlanList;
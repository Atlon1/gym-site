import React from 'react';

import {nav} from "../data"

const Nav = () => {
    return (
        <nav className='hidden lg:flex'>
            <ul className=' flex text-white gap-x-8'>
                {nav.map((elem : any, index: number) => {
                    return (
                        <li
                            className='hover:text-primary-200 transition'
                            key={index}>
                            <a href={elem.href}>{elem.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Nav;
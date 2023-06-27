import React from 'react';
import {Link} from 'react-scroll'


import {nav} from "../data"

const Nav = () => {
    return (
        <nav className='hidden lg:flex'>
            <ul className=' flex text-white gap-x-8'>
                {nav.map((elem : any, index: number) => {
                    return (
                        <li
                            className='hover:text-primary-200 transition'
                            key={index}

                        >
                            <Link
                                smooth={true}
                                offset={-100}
                                to={elem.href}>{elem.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Nav;
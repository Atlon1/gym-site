import React, {useState,useEffect} from 'react';
import {Link} from 'react-scroll'
import {navEng} from "../translations/eng/data"
import {navPl} from "../translations/pl/data"


const Nav = () => {
    const res = localStorage.getItem('lang') === "pl" ? navPl : navEng
    return (
        <nav className='hidden lg:flex'>
            <ul className=' flex text-white gap-x-6'>
                {res.map((elem: any, index: number) => {
                    return (
                        <li
                            className='hover:text-primary-200 transition cursor-pointer'
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
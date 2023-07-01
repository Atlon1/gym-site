import React, {FC} from 'react';
import {navEng} from '../translations/eng/data'
import {navPl} from "../translations/pl/data"
import {Link} from 'react-scroll'

interface NavMobileProps {
    navMobile: boolean
}

const NavMobile: FC<NavMobileProps> = ({navMobile}) => {
    return (
        <nav className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden
         w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden
         transition-all h-0 `}>
            <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
                {navEng.map((item : any, idx: number) =>{
                    return (
                        <li key={idx}>
                            <Link
                                className='text-white text-body-md cursor-pointer'
                                smooth={true}
                                offset={-100}
                                to={item.href}>{item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className='-mt-44 flex justify-center gap-x-8'>
                <button className='btn btn-lg text-white'>Log in</button>
                <button className='btn btn-lg btn-primary'>Sign in</button>
            </div>
        </nav>
    );
};

export default NavMobile;
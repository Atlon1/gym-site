import React, {FC, useEffect, useState} from 'react';
import {navEng} from '../translations/eng/data'
import {navPl} from "../translations/pl/data"
import {Link} from 'react-scroll'
import {headerPl} from "../translations/pl/data";
import {headerEng} from "../translations/eng/data"

interface NavMobileProps {
    navMobile: boolean
}

const NavMobile: FC<NavMobileProps> = ({navMobile}) => {
    const [langActive, setLangActive] = useState(false)
    const res = localStorage.getItem('lang') === "pl" ? navPl : navEng
    const {btnLoginText, btnSignupText} = localStorage.getItem('lang') === "pl" ? headerPl : headerEng
    const [lang, setLang] = useState("pl")

    useEffect(() => {
        const html: any = document.querySelector('html')
        if (localStorage.getItem('lang') === 'eng' && localStorage.getItem('active') === "false") {
            html.classList.add('eng')
            setLang('eng')
            setLangActive(true)
        } else {
            html.classList.remove('eng')
            setLang('pl')
            setLangActive(false)
        }
    }, [lang])


    const handleSwitchENG = () => {
        if (localStorage.getItem('lang') === 'pl') {
            setLang('eng');
            localStorage.setItem('lang', 'eng')
        }
        window.location.reload();
        setLangActive(!langActive)
    }
    const handleSwitchPL = () => {
        if (localStorage.getItem('lang') === 'eng') {
            setLang('pl');
            localStorage.setItem('lang', 'pl')
        }
        window.location.reload();
        setLangActive(!langActive)
    }


    return (
        <nav className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden
         w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden
         transition-all h-0 `}>
            <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
                {res.map((item : any, idx: number) =>{
                    return (
                        <li key={idx}>
                            <Link
                                className='text-white text-body-md cursor-pointer hover:bg-primary-200 duration-500 px-5 rounded-full'
                                smooth={true}
                                offset={-100}
                                to={item.href}>{item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className='-mt-44 flex justify-center gap-x-8'>
                <button className='btn btn-lg text-white'>{btnLoginText}</button>
                <button className='btn btn-lg btn-primary'>{btnSignupText}</button>
                <div className='flex flex-col'>
                    <button
                        className={`${langActive ? "text-gray-500" : "bg-neutral-500 text-white"} px-5 rounded-full hover:bg-neutral-300 duration-500`}
                        onClick={handleSwitchPL}>PL</button>
                    <button
                        className={`${langActive ? "bg-neutral-500 text-white" : "text-gray-500"} px-5 rounded-full hover:bg-neutral-300 duration-500`}
                        onClick={handleSwitchENG}>ENG</button>
                </div>
            </div>

        </nav>
    );
};

export default NavMobile;
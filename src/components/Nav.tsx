import React, {useState,useEffect} from 'react';
import {Link} from 'react-scroll'
import {navEng} from "../translations/eng/data"
import {navPl} from "../translations/pl/data"


const Nav = () => {

    const [lang, setLang] = useState("pl")
    const res = lang === "pl" ? navPl : navEng

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
    }, [])

    useEffect(() => {
        const html: any = document.querySelector('html')
        if (localStorage.getItem('lang') === 'eng') {
            html.classList.add('eng')
            setLang('eng')
        } else {
            html.classList.remove('eng')
            setLang('pl')
        }
    }, [lang])

    const handleSwitch = () => {
        if (localStorage.getItem('lang') === 'pl') {
            setLang('eng');
            localStorage.setItem('lang', 'eng')
        } else {
            setLang('pl')
            localStorage.setItem('lang', 'pl')
        }
        window.location.reload();

    }


    return (
        <nav className='hidden lg:flex'>
            <ul className=' flex text-white gap-x-8'>
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
            <button onClick={handleSwitch}>Język</button>
        </nav>
    );
};

export default Nav;
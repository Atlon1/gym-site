import React, {useState,useEffect} from 'react';
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import {RiMenu4Fill, RiCloseFill} from "react-icons/ri"
import {headerPl} from "../translations/pl/data";
import {headerEng} from "../translations/eng/data"

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [navMobile, setNavMobile] = useState(false)
    const [langActive, setLangActive] = useState(false)
    const [lang, setLang] = useState("pl")


    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('active') === null) {
            localStorage.setItem('active', 'false')
        }
    }, [])

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

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
        })
    })




    const {logo, btnLoginText, btnSignupText} = lang === "pl" ? headerPl : headerEng
    return (

        <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'}
         fixed max-w-[1440px] z-30 left-0 right-0
         mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
            <a href=''>
                <img className='h-[30px]'
                     src={logo} alt='LogoDisc'/>
            </a>
            <Nav/>
            <div className='hidden lg:flex space-x-4'>
                <button className='btn btn-sm text-white hover:text-primary-200 transition'>{btnLoginText}</button>
                <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
                <div className='flex flex-col'>
                    <button
                        className={`${langActive ? "text-gray-500" : "bg-neutral-500 text-white"} px-5 rounded-full hover:bg-neutral-300 duration-500`}
                        onClick={handleSwitchPL}>PL</button>
                    <button
                        className={`${langActive ? "bg-neutral-500 text-white" : "text-gray-500"} px-5 rounded-full hover:bg-neutral-300 duration-500`}
                        onClick={handleSwitchENG}>ENG</button>
                </div>
            </div>
            <div
                onClick={() => setNavMobile(!navMobile)}
                className='lg:hidden absolute right-4'>
                {navMobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer'/>) :
                    <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer'/>
                }
            </div>
            <NavMobile navMobile={navMobile}/>
        </header>
    );
};

export default Header;
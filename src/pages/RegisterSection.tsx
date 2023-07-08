import React, {useState} from 'react';
import {RegisterSectionEng} from "../translations/eng/data";
import {RegisterSectionPl} from "../translations/pl/data";
import {Link} from "react-router-dom"

const RegisterSection = () => {

    interface RegisterForm {
        email: string;
        password: string;
        repPassword: string
    }

    const {
        loginText,
        nameUser,
        password,
        btnLogin,
        btnRegister,
        rptPass,
        valEmail,
        valEmail2,
        valPass,
        valPss2,
        valRptPass,
        valRptPass2,
        valRptPass3
    } = localStorage.getItem("lang") === 'pl' ? RegisterSectionPl : RegisterSectionEng

    const [form, setForm] = useState<RegisterForm>({
        email: '',
        password: '',
        repPassword: ""
    })

    const validateEmail = (form: RegisterForm) => {
        if (!form.email) {
            return `${valEmail}`
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return `${valEmail2}`
        } else return null
    }

    const validatePassword = (form: RegisterForm) => {
        if (!form.password) {
            return `${valPass}`
        } else if (form.password.length < 6) {
            return `${valPss2}`
        }
        return null
    }

    const validateRePassword = (form: RegisterForm) => {
        if (!form.password) {
            return `${valRptPass}`
        } else if (form.password.length < 6) {
            return `${valRptPass2}`
        }
        if (form.repPassword !== form.password) {
            return `${valRptPass3}`
        }
        return null
    }

    const [emailErr, setEmailErr] = useState<any>(null)
    const [passErr, setPassErr] = useState<any>(null)
    const [rptPassErr, setRptPassErr] = useState<any>(null)
    const [borderColor, setBorderColor] = useState("border-white")

    const updateField = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        const errEmail = validateEmail(form)
        const errPass = validatePassword(form)
        const errRptPass = validateRePassword(form)
        if (errEmail || errPass || errRptPass) {
            setEmailErr(errEmail)
            setPassErr(errPass)
            setRptPassErr(errRptPass)
            setBorderColor("border-red-500")
        } else {
            setEmailErr('')
            setPassErr('')
            setRptPassErr('')
            setBorderColor('border-white')
        }
    }


    return (
        <section className='bg-neutral-500 h-[900px] ' id='login'>
            <div
                data-aos='fade-down'
                data-aos-offset='200'
                data-aos-delay='200'
                className='container mx-auto h-full pt-[150px] flex justify-center items-center'>
                <div
                    className={`flex flex-col justify-center items-center border rounded-bl-2xl rounded-tr-2xl ${borderColor} xl:max-w-[450px] max-h-[450ox] h-full w-full max-w-[350px] duration-500`}>
                    <h1 className='h1 text-primary-200 mb-[35px]'>{loginText}</h1>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='email'
                        name='email'
                        onChange={updateField}
                    />
                    <p className='text-red-500'>{emailErr}</p>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>{nameUser}</p>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='password'
                        name='password'
                        onChange={updateField}
                    />
                    <p className='text-red-500'>{passErr}</p>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>{password}</p>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='password'
                        name="repPassword"
                        onChange={updateField}
                    />
                    <p className='text-red-500'>{rptPassErr}</p>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>{rptPass}</p>
                    <div className='flex gap-x-6'>
                        <button className='btn btn-sm lg:btn-lg btn-secondary'
                                onClick={handleSubmit}
                        >{btnRegister}</button>
                        <button className='btn btn-sm lg:btn-lg btn-secondary'><Link
                            to='/my-gym/login'>{btnLogin}</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
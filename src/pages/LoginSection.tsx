import React, {useState} from 'react';
import {loginSectionEng} from "../translations/eng/data";
import {loginSectionPl} from "../translations/pl/data";
import {Link} from 'react-router-dom'

const LoginSection = () => {

    interface LoginForm {
        email: string;
        password: string;
    }

    const {
        loginText,
        nameUser,
        password,
        btnLogin,
        btnRegister,
        valEmail,
        valEmail2,
        valPass,
        valPss2
    } = localStorage.getItem("lang") === 'pl' ? loginSectionPl : loginSectionEng

    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const [emailErr, setEmailErr] = useState<any>(null);
    const [passwordErr, setPasswordErr] = useState<any>(null);
    const [borderColor, setBorderColor] = useState('border-white')


    const validateEmail = (form: LoginForm) => {
        if (!form.email) {
            return `${valEmail}`
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return `${valEmail2}`
        }
        return null
    }

    const validatePassword = (form: LoginForm) => {
        if (!form.password) {
            return `${valPass}`
        } else if (form.password.length < 5) {
            return `${valPss2}`
        }
        return null
    }

    const updateField = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const emailError = validateEmail(form)
        const passError = validatePassword(form)
        if (emailError || passError) {
            setEmailErr(emailError)
            setPasswordErr(passError)
            setBorderColor('border-red-500')
        } else {
            setEmailErr('')
            setPasswordErr('')
            setBorderColor('border-white')
        }
    }

    return (
        <section className='bg-neutral-500 h-[800px] ' id='login'>
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
                        name="email"
                        onChange={updateField}
                    />
                    <p className='text-red-500'>{emailErr}</p>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>{nameUser}</p>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='password'
                        name="password"
                        onChange={updateField}
                    />
                    <p className='text-red-500'>{passwordErr}</p>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>{password}</p>
                    <div className='flex gap-x-6'>
                        <button
                            className='btn btn-sm lg:btn-lg btn-secondary'
                            onClick={handleSubmit}
                        >{btnLogin}</button>
                        <button className='btn btn-sm lg:btn-lg btn-secondary'><Link
                            to='/my-gym/register'>{btnRegister}</Link></button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginSection;
import React from 'react';

const LoginSection = () => {
    return (
        <section className='bg-neutral-500 h-[800px] ' id='login'>
            <div className='container mx-auto h-full pt-[150px] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center border rounded-bl-2xl rounded-tr-2xl border-white xl:max-w-[450px] max-h-[450ox] h-full w-full max-w-[350px] duration-500' >
                    <h1 className='h1 text-primary-200 mb-[35px]'>Zaloguj się</h1>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='text'/>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>Nazwa użytkowanika</p>
                    <input
                        className='max-w-[250px] w-full mb-6 bg-neutral-500 text-white border border-white p-4 hover:border-primary-200 duration-500  rounded-bl-2xl rounded-tr-2xl'
                        type='password'/>
                    <p className='text-body-md lg:text-body-lg mb-8 text-white'>Hasło</p>
                    <div className='flex gap-x-6'>
                        <button className='btn btn-sm lg:btn-lg btn-secondary'>Login</button>
                        <button className='btn btn-sm lg:btn-lg btn-secondary'>Register</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LoginSection;
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import Home from "./pages/Home.";
import Header from "./components/Header";
import ArrowUp from "./components/ArrowUp";
import Footer from "./components/Footer";

const App = () => {
    Aos.init({
        duration: 2500,
        delay: 400,
    })
    return (
        <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
            <Header/>
            <Routes>
                <Route path='/my-gym' element={<Home/>}/>
            </Routes>
            <ArrowUp/>
            <Footer/>
        </div>
    );
};

export default App;


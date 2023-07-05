import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Workouts from "../components/Workouts";
import Pricing from "../components/Pricing";
import Community from "../components/Community";
import Faq from "../components/Faq";
import Join from "../components/Join";
import Footer from "../components/Footer";
import ArrowUp from "../components/ArrowUp";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Workouts />
            <Pricing />
            <Community />
            <Faq />
            <Join />
            <Footer/>
            <ArrowUp/>
        </div>
    );
};

export default Home;
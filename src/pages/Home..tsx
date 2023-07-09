import React from 'react';
import Banner from "../components/Banner";
import About from "../components/About";
import Workouts from "../components/Workouts";
import Pricing from "../components/Pricing";
import Community from "../components/Community";
import Faq from "../components/Faq";
import Join from "../components/Join";
import Header from "../components/Header";


const Home = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <About />
            <Workouts />
            <Pricing />
            <Community />
            <Faq />
            <Join />
        </div>
    );
};

export default Home;
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HomeSection from '../HomeSection';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Events from '../Events';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
            <HomeSection />
            <Welcome />
            <Cards />
            <Events />
            <br /><br /><br />
        </>
    );
}

export default Home;

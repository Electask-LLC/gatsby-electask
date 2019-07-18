import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import Background from '../components/Background';
import DarkNewsletter from '../components/DarkNewsletter';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

function About() {
    return (
        <React.Fragment>
            <SEO />
            <Navbar />
            <AboutHero />
            <DarkNewsletter />
            <Background />
            <Bottom />
            <Footer />
        </React.Fragment>
    );
}

export default About;

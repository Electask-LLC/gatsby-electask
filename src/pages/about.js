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
            <div className="mt-">
                <DarkNewsletter bg="dark" />
            </div>
            <div className="mb-5">
                <Background bg="light" />
            </div>
            <Bottom />
            <Footer />
        </React.Fragment>
    );
}

export default About;

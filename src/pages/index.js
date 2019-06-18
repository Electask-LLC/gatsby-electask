import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Dash from '../components/Dash';
import TaskCopy from '../components/Copy';
import Reports from '../components/Reports';
import Midcta from '../components/Midcta';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

export default () => (
    <React.Fragment>
        <SEO />
        <Navbar />
        <Hero />
        <Feature />
        <Dash />
        <TaskCopy />
        <Reports />
        <Midcta />
        <Bottom />
        <Footer />
    </React.Fragment>
);

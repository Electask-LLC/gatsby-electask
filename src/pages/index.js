import React from 'react';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Dash from '../components/Dash';
import Copy from '../components/Copy';
import Reports from '../components/Reports';
import Midcta from '../components/Midcta';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import '../styles/index.scss';

export default () => (
    <React.Fragment>
        <div className="container">
            <Navbar />
            <Hero />
        </div>
        <Feature />
        <Dash />
        <Copy />
        <Reports />
        <Midcta />
        <Bottom />
        <Footer />
    </React.Fragment>
);

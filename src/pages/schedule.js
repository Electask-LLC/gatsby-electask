import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default () => (
    <React.Fragment>
        <SEO />
        <Navbar />
        <div className="row justify-content-center">
            <iframe
                title="Schedule a Demo"
                width="100%"
                height="1000"
                src="https://meetings.hubspot.com/tom190"
                frameBorder="0"
            ></iframe>
        </div>
        <Footer />
    </React.Fragment>
);

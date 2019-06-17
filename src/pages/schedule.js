import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';

export default () => (
    <div className="container">
        <Navbar />
        <div className="row justify-content-center">
            <iframe
                title="Schedule a Demo"
                width="100%"
                height="500"
                src="https://meetings.hubspot.com/tom190"
                frameBorder="0"
            ></iframe>
        </div>
        <Footer />
    </div>
);

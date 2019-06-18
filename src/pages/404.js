import React from 'react';
import {Link} from 'gatsby';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';

export default () => (
    <>
        <div className="container">
            <SEO />
            <Navbar />
            <div
                className="row justify-content-center my-5 py-5"
                style={{height: '100vh'}}
            >
                <Link to="/" className="btn btn-lg btn-dark">
                    You seem lost... Return home!
                </Link>
            </div>
        </div>
        <Footer />
    </>
);

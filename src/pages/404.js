import React from 'react';
import {Link} from 'gatsby';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';

export default () => (
    <div className="container">
        <Navbar />
        <div className="row justify-content-center my-5 py-5">
            <Link to="/" className="btn btn-lg btn-dark">
                You seem lost... Return home!
            </Link>
        </div>
        <Footer />
    </div>
);

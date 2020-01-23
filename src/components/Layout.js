import React from 'react';
import SEO from './SEO';
import Navbar from './Navbar';
import Footer from './Footer';

export default ({ children }) => (
  <>
    <SEO />
    <Navbar />
    {children}
    <Footer />
  </>
);

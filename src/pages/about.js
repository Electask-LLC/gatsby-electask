import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/AboutHero';
import Background from '../components/Background';
import DarkNewsletter from '../components/DarkNewsletter';
import Bottom from '../components/Bottom';

export default () => {
  return (
    <Layout>
      <AboutHero />
      <div className="mt-">
        <DarkNewsletter bg="dark" />
      </div>
      <div className="mb-5">
        <Background bg="light" />
      </div>
      <Bottom />
    </Layout>
  );
};

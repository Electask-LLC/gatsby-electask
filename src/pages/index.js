import React from 'react';
import Layout from '../components/Layout';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Dash from '../components/Dash';
import TaskCopy from '../components/Copy';
import Reports from '../components/Reports';
import Midcta from '../components/Midcta';
import Bottom from '../components/Bottom';

export default () => (
  <Layout>
    <Hero />
    <Feature />
    <Dash />
    <TaskCopy />
    <Reports />
    <Midcta />
    <Bottom />
  </Layout>
);

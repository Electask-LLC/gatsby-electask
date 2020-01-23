import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <div className="container">
    <Layout>
      <div className="row justify-content-center my-5 py-5">
        <Link to="/" className="btn btn-lg btn-dark">
          You seem lost... Return home!
        </Link>
      </div>
    </Layout>
  </div>
);

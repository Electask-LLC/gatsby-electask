import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="h6 text-capitalize text-center font-weight-bold">
              Watch this demo of Electask to see how it can help your
              organization.
            </h2>
            <video preload="none" className="shadow bg-primary w-100" controls>
              <source
                src="https://electask-bucket.s3.us-west-1.amazonaws.com/electask_demo_2020.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <div className="mt-5 text-center">
              <Link to="/schedule" className="btn btn-lg btn-primary">
                See If For Yourself &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

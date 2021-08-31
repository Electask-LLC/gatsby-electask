import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => {
    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 my-5">
                    <video
                        preload="none"
                        className="shadow bg-primary w-100"
                        controls
                    >
                        <source
                            src="https://electask-bucket.s3.us-west-1.amazonaws.com/Electask.mp4"
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
        </Layout>
    );
};

import React from 'react';
import {Link} from 'gatsby';

const Bottom = () => {
    return (
        <div className="container py-md-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Support</h3>
                    <p className="font-weight-bold">
                        We are available for support via email, text, and call when you need it. Do not hesitate to contact us.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Updates</h3>
                    <p className="font-weight-bold">
                       Electask will continue to improve functionality over time. 
                       If you have suggestions for additional features or other requests, 
                           please reach out!
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Security</h3>
                    <p className="font-weight-bold">
                        Security is standard with Electask. All communication
                        between Electask and servers and databases are encrypted.
                
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-12 text-center">
                    <Link
                        to="/schedule"
                        className="btn btn-lg btn-outline-primary"
                    >
                        Book a Demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bottom;

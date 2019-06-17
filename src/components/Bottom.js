import React from 'react';
import {Link} from 'gatsby';

const Bottom = () => {
    return (
        <div className="container py-md-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Support</h3>
                    <p className="font-weight-bold">
                        If you need help, you can reach out via chat or text and
                        I'll help you get back at it. During elections, I'll be
                        here for you 24/7. When it's not so crazy, you can reach
                        me from 8 am to 5 pm your local time. Plus I'm really
                        nice (if I do say so myself)!
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Updates</h3>
                    <p className="font-weight-bold">
                        Electask is a growing, living thing. I'm always trying
                        to make it better, more user-friendly, and updade the
                        tech to keep it on the cutting edge. Also, if you think
                        of something that would make Electask better,
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">Security</h3>
                    <p className="font-weight-bold">
                        Security is standard with Electask. All communication
                        between Electask and servers and databases are all
                        encrypted. Each organization has their own database so
                        there's no mixing data. Also, each database is regularly
                        backed up, so if anything were to happen, your data
                        would be safe.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-12 text-center">
                    <Link
                        href="/schedule"
                        className="btn btn-lg btn-outline-primary"
                    >
                        See It Yourself Today
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bottom;

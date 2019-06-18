import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            reports: file(relativePath: {regex: "/reports.png/"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <div className="container">
            <div className="row my-5 py-3 py-md-5 justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 order-md-last">
                    <Img
                        fluid={data.reports.sharp.fluid}
                        alt="Our dashboard helps all your employees stay on the same page."
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-md-first">
                    <h3 class="h3 font-weight-bold">See How It's Going</h3>
                    <p class="font-weight-bold">
                        Electask offers regular reports showing what was
                        completed, what's being worked on, and what is falling
                        behind. How often these reports are sent out is up to
                        you. You can also be notified in a few different ways if
                        anything really important is past it's due date.
                    </p>
                    <Link
                        to="/schedule"
                        className="font-weight-bold border-bottom border-primary"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

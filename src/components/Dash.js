import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            dash: file(relativePath: {regex: "/dash.png/"}) {
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
                <div className="col-12 col-md-4 order-md-last">
                    <Img
                        fluid={data.dash.sharp.fluid}
                        alt="Our dashboard helps all your employees stay on the same page."
                    />
                </div>
                <div className="col-12 col-md-4 order-md-first">
                    <h3 class="mb-md-4 font-weight-bold">
                        More aware. More control.
                    </h3>
                    <p class="font-weight-bold">
                        Electask has built-in, automated reminders. It will send
                        everyone on each task reminders 1 week out from the task
                        due date and on the due date itself so everyone can be
                        aware of what's going on.
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

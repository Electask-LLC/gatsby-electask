import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            copy: file(relativePath: {regex: "/copy.png/"}) {
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
                <div className="col-12 col-md-4">
                    <Img
                        fluid={data.copy.sharp.fluid}
                        alt="Copy tasks from one election to another automatically"
                    />
                </div>
                <div className="col-12 col-md-4">
                    <h3 className="h3 font-weight-bold mt-5">
                        Copy Tasks Over Automatically
                    </h3>
                    <p className="font-weight-bold">
                        Many elections are pretty similar in what you have to do
                        to get them done. That's why Electask has an automated
                        process to copy tasks from one election to another with
                        the click of a button. All the task due dates are
                        updated based on the new election E-Date.
                    </p>
                    <Link
                        to="/schedule"
                        className="font-weight-bold border-bottom border-primary"
                    >
                        Schedule A Demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

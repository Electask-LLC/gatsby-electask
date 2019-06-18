import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {regex: "/logo_2.png/"}) {
                sharp: childImageSharp {
                    fixed(width: 100) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link
                    className="navbar-brand text-dark position-relative pl-1"
                    to="/"
                >
                    <Img fixed={data.logo.sharp.fixed} alt="Electask" />
                </Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            href="https://app.electask.com"
                            className="btn btn-outline-primary"
                        >
                            Sign In
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

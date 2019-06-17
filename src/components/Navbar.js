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
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link
                className="navbar-brand text-dark position-relative pl-1"
                to="/"
            >
                <Img fixed={data.logo.sharp.fixed} alt="Electask" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/schedule">
                            See If Yourself
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://app.electask.com"
                            className="btn btn-outline-primary"
                        >
                            Sign In
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

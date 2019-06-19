import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    padding: 10px 0;
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        li {
            display: inline;
            padding: 5px;
            a:hover {
                cursor: pointer;
            }
        }
    }
`;

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
            <Nav>
                <Link to="/">
                    <Img fixed={data.logo.sharp.fixed} alt="Electask" />
                </Link>
                <ul>
                    <li>
                        <Link to="/video" className="nav-link text-secondary">
                            Video
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://app.electask.com"
                            className="btn btn-outline-primary"
                        >
                            Sign In
                        </a>
                    </li>
                </ul>
            </Nav>
        </div>
    );
};

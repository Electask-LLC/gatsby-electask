import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const SVG = styled.svg`
    position: absolute;
    top: -7rem;
    left: 0;
    z-index: -1;
`;

function Feature() {
    const data = useStaticQuery(graphql`
        query {
            sac: file(relativePath: { regex: "/sacramento.png/" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <div className="position-relative my-5 py-3 py-md-5">
            <SVG
                width="100%"
                viewBox="0 0 2996 1063"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 4.99992C0 4.99992 357 594.5 1075.5 269C1794 -56.5001 2996 4.99992 2996 4.99992V973C2996 973 1857.5 463.5 1161.5 852C465.5 1240.5 0 973 0 973V4.99992Z"
                    fill="url(#paint0_linear)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="484.5"
                        y1="251"
                        x2="2766"
                        y2="645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#008DB9" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#008DB9" />
                    </linearGradient>
                </defs>
            </SVG>
            <div className="py-md-3 col-12 col-md-6 p-5 mx-auto bg-white rounded border border-muted shadow">
                <h2 className="text-center">
                    "This fits an election official's needs."
                </h2>
                <p className="text-italics text-center">
                    ~ Jill LaVine - Former Sacramento County Registrar of Voters
                </p>
                <div className="text-center col-12 col-md-8 mx-auto">
                    <Img
                        fluid={data.sac.sharp.fluid}
                        alt="Sacramento County Elections"
                        style={{ opacity: '0.6' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Feature;

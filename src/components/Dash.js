import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Dash() {
  const data = useStaticQuery(graphql`
    query {
      dash: file(relativePath: { regex: "/dash.png/" }) {
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
            fluid={data.dash.sharp.fluid}
            alt="Our dashboard helps all your employees stay on the same page."
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-md-first">
          <h3 className="mb-md-4 font-weight-bold">
            More aware. More control.
          </h3>
          <p className="font-weight-bold">
          Electask's dashboard lets you see your teams' activities in one place and make sure everyone is on track.
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
}

export default Dash;

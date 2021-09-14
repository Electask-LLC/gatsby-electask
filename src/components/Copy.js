import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Copy() {
  const data = useStaticQuery(graphql`
    query {
      copy: file(relativePath: { regex: "/copy.png/" }) {
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
        <div className="col-12 col-md-6 col-lg-4">
          <Img
            fluid={data.copy.sharp.fluid}
            alt="Assign tasks"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <h3 className="h3 font-weight-bold">Never miss a deadline</h3>
          <p className="font-weight-bold">
            Electask lets you assign tasks to specific people or positions and remind them automatically so you never miss deadlines 
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
}

export default Copy;

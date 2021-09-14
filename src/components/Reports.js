import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Report() {
  const data = useStaticQuery(graphql`
    query {
      reports: file(relativePath: { regex: "/reports.png/" }) {
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
          <h3 className="h3 font-weight-bold">Run Multiple Elections Concurrently</h3>
          <p className="font-weight-bold">
            With Electask, you can run multiple elections at once and even copy tasks between them. 
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

export default Report;

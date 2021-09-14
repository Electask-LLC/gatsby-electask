import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function AboutHero() {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { regex: "/me.png/" }) {
        sharp: childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="container">
      <div className="row align-items-center my-5 py-3 py-md-5">
        <div className="col-12 col-md-5">
          <h1 className="font-weight-bold">Accessible pricing for all counties</h1>
          <h2 className="lead my-4">
            Electask costs around 1.5¢ per county resident per year
          </h2>
          <a href="/schedule" className="btn btn-dark text-white">
            Get in touch &rarr;
          </a>
        </div>
        <div className="col-12 col-md-7 mt-5 mt-md-0 d-none d-md-block text-center">
          <Img
            fixed={data.me.sharp.fixed}
            alt="Picture of Tom Hall, founder of Electask"
            className="rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

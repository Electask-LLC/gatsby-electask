import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #232323;
`;

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      opag: file(relativePath: { regex: "/operating-agreement.pdf/" }) {
        publicURL
      }
    }
  `);
  return (
    <StyledFooter className="py-5 mt-5 mt-md-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-left">
            <small className="font-weight-bold text-white">Electask</small>
            <p className="mb-0">
              <small className="text-white">
                &copy; {new Date().getFullYear()} Electask, LLC
              </small>
            </p>
            <small className="text-white">
              Icons by
              <a href="https://www.freepik.com" className="text-white">
                Freepik
              </a>
              <br />
              from
              <a href="https://www.flaticon.com" className="text-white">
                www.flaticon.com
              </a>
            </small>
            <br />
          </div>
          <div className="col-12 col-md-2">
            <h6 className="font-weight-bold text-white">
              <span className="border-bottom">Support</span>
            </h6>
            {/* <small>
                            <Link to="./privacy-policy" className="text-white">
                                Privacy Policy
                            </Link>
                        </small>
                        <br /> */}
            <small>
              <a href={data.opag.publicURL} className="text-white">
                Operating Agreement
              </a>
            </small>
            <br />
            <small>
              <a href="mailto:tom@electask.com" className="text-white">
                Contact Me
              </a>
            </small>
          </div>
          <div className="col-12 col-md-2">
            <h6 className="font-weight-bold text-white">
              <span className="border-bottom">Company</span>
            </h6>
            <small>
              <a href="mailto:tom@electask.com" className="text-white">
                Careers
              </a>
            </small>
            ><br />
          </div>
          <div className="col-12 col-md-2">
            <h6 className="font-weight-bold text-white">
              <span className="border-bottom">Product</span>
            </h6>
            <small>
              <Link to="/schedule" className="text-white">
                Schedule a Demo
              </Link>
            </small>
            <br />
            <small>
              <a href="https://app.electask.com" className="text-white">
                Login
              </a>
            </small>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;

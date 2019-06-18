import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Video = styled.video`
    width: 100%;
`;

export default () => {
    const data = useStaticQuery(graphql`
        query {
            poster: file(relativePath: {regex: "/video-thumbnail.png/"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <React.Fragment>
            <SEO />
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-12 col-md-7 my-5">
                    <Video
                        preload="none"
                        className="shadow"
                        poster={data.poster.sharp.fluid}
                        controls
                    >
                        <source
                            src="https://electask.s3-us-west-1.amazonaws.com/jill.mp4"
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support embedded videos.
                    </Video>
                    <div className="mt-5 text-center">
                        <Link to="/schedule" className="btn btn-lg btn-primary">
                            See If For Yourself &rarr;
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';

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
    console.log(data.poster.sharp.fluid);
    return (
        <div className="container">
            <div className="row align-items-center my-5 py-3 py-md-5">
                <div className="col-12 col-md-5">
                    <h1 className="font-weight-bold">Election Task Calendar</h1>
                    <h2 className="lead font-weight-light my-4">
                        The task calendar that automates the boring stuff so you
                        can focus on what's important.
                    </h2>
                    <Link to="/schedule" className="btn btn-danger text-white">
                        Schedule to See Electask &rarr;
                    </Link>
                </div>
                <div className="col-12 col-md-7 mt-5 mt-md-0 d-none d-md-block">
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
                </div>
            </div>
        </div>
    );
};

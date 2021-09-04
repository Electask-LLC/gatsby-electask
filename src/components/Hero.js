import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Video = styled.video`
    width: 100%;
`;

function Hero() {
    return (
        <div className="container">
            <div className="row align-items-center my-5 py-3 py-md-5">
                <div className="col-12 col-md-5">
                    <h1 className="font-weight-bold">Track all your election tasks in one place</h1>
                    <h2 className="lead my-4">
                        Electask empowers forward-thinking election officials to manage all of their teams' tasks for just 1.5¢ per resident
                    </h2>
                    <Link
                        to="/schedule"
                        className="btn btn-lg btn-dark text-white"
                    >
                        Schedule to See Electask &rarr;
                    </Link>
                </div>
                <div className="col-12 col-md-7 mt-5 mt-md-0 d-none d-md-block">
                    <Video
                        preload="none"
                        className="shadow"
                        poster="https://electask-bucket.s3.us-west-1.amazonaws.com/video-thumbnail.png"
                        controls
                    >
                        <source
                            src="https://electask-bucket.s3.us-west-1.amazonaws.com/Electask.mp4"
                            type="video/mp4"
                        />
                        Sorry, your browser doesn't support embedded videos.
                    </Video>
                </div>
            </div>
        </div>
    );
}

export default Hero;

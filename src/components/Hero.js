import React from 'react';
import {Link} from 'gatsby';
import ReactPlayer from 'react-player';

export default () => (
    <div className="row align-items-center my-5 py-3 py-md-5">
        <div className="col-12 col-md-5">
            <h1 className="font-weight-bold">Election Task Calendar</h1>
            <h2 className="lead font-weight-light my-4">
                The task calendar that automates the boring stuff so you can
                focus on what's important.
            </h2>
            <Link to="/schedule" className="btn btn-lg btn-primary text-white">
                Schedule to See Electask &rarr;
            </Link>
        </div>
        <div className="col-12 col-md-7">
            <ReactPlayer
                title="Jill LeVine"
                url="https://player.vimeo.com/video/342514605"
                width="100%"
            />
        </div>
    </div>
);

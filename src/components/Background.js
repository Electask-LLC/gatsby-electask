import React from 'react';
import PropTypes from 'prop-types';

function Background({bg}) {
    return (
        <div className={`bg-${bg} py-5`}>
            <div className="col-md-6 col-lg-4 mx-auto">
                <h2 className="text-muted">Background</h2>
                <p>
                    I worked for Voter Sacramento County Registration &amp;
                    Elections before, during, and after the 2014 Gubernatorial
                    Election so I got to see first hand how they prepared for,
                    managed, and completed an election. It was great experience
                    and let me see how many improvements there were to be made
                    in the tech and process.
                </p>
                <p>
                    A few years after my time with the County, the Executive
                    Secretary at the time, knowing my programming experience,
                    reached out to me for advice on how to improve their task
                    management process. I built the first version of Electask
                    and had them try it out.
                </p>
                <p>
                    After a few tweaks, they were up and running with it and
                    implemented it into their core task management process. Now,
                    several improvements later (and more to come), Sacramento,
                    along with other counties, have found value in what Electask
                    can do.
                </p>
                <p>
                    The bottom line is it makes their life easier. It helps
                    everyone stay up to date and on the same page. And many more
                    exciting features and improvements are scheduled for the
                    future.
                </p>
            </div>
        </div>
    );
}

Background.propTypes = {
    bg: PropTypes.string
};

export default Background;

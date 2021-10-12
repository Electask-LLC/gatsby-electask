import React from 'react';
import PropTypes from 'prop-types';

function Background({bg}) {
    return (
        <div className={`bg-${bg} py-5`}>
            <div className="col-md-6 col-lg-4 mx-auto">
                <h2 className="text-muted">Background</h2>
                <p>
                    Electask grew out of a custom project for Sacramento County, who were 
                    looking to replace their Excel-based election task management 
                    with software. When they couldn't find a solution, we built Electask!
                </p>
                <p>
                    Since then, Electask has allowed counties to track their tasks in one place without an expensive
                    election management suite. This allows those counties to be better stewards of taxpayer
                    dollars.
                </p>
                <p>
                    We wanted to help because we've worked in local and state government and
                   we want to make sure that they get top-notch software that is affordable. We'd
                    love to talk to you about your county's needs!
                
                </p>
            </div>
        </div>
    );
}

Background.propTypes = {
    bg: PropTypes.string
};

export default Background;

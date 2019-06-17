import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import '../styles/index.scss';

const Big = styled.p`
    font-weight: 700;
    color: white;
    font-size: 3rem;
`;

export default () => (
    <div className="container border border-dark p-5 my-5">
        <div className="col-12 col-md-10 mx-auto text-center bg-dark rounded shadow p-5">
            <Big>Electask excels at communication and visualization</Big>
        </div>
        <div className="text-center mt-5">
            <Link to="/schedule" className="btn btn-lg btn-light">
                See It Now
            </Link>
        </div>
    </div>
);

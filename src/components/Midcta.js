import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import '../styles/index.scss';

const Big = styled.p`
    font-weight: 700;
    color: white;
    font-size: 2rem;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export default () => (
    <div className="container border border-dark p-2 p-md-5 my-5">
        <div className="col-12 col-md-10 mx-auto text-center bg-dark rounded shadow p-4 p-md-5">
            <Big>Electask excels at communication and visualization</Big>
        </div>
        <div className="text-center mt-5">
            <Link to="/schedule" className="btn btn-lg btn-light">
                See It Now
            </Link>
        </div>
    </div>
);

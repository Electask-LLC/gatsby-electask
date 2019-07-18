import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            me: file(relativePath: {regex: "/me.png/"}) {
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
                    <h1 className="font-weight-bold">Hi, I'm Tom</h1>
                    <h2 className="lead font-weight-light my-4">
                        I originally built Electask for Sacramento County
                        because they were having such a hard time managing their
                        election tasks and keeping everyone on the same page.
                        They've been able to get far more organized and run much
                        smoother now. Other counties have seen the value as
                        well. Feel free to reach out to hear the whole story and
                        how it's evolved and where it's going.
                    </h2>
                    <a
                        href="mailto:tom@electask.com"
                        className="btn btn-dark text-white"
                    >
                        Send Me A Message &rarr;
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
};

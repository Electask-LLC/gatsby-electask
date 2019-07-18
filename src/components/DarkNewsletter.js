import React, {useEffect} from 'react';

function DarkNewsletter() {
    useEffect(() => {
        if (document.location.search.length > 0) {
            document.location.search = '';
        }
    });
    return (
        <div className="bg-dark py-5 mt-5">
            <div className="col-md-6 col-lg-4 mx-auto">
                <h2 className="text-white">Newsletter</h2>
                <p className="text-white">
                    I have a newsletter that goes out that talks about election
                    efficiencies, tech, and other interesting things. If you'd
                    like to receive the newsletters I send out, subscribe below!
                    You can always unsubscribe later
                </p>
                <form id="newsletter-form" className="bg-light p-5">
                    <p>My email address is...</p>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="GET UPDATES!"
                            className="form-control btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default DarkNewsletter;

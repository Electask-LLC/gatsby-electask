import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';

function DarkNewsletter(props) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [cookies, setCookie] = useCookies(['electasksubscribed']);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (cookies.electasksubscribed) {
      // if there's a cookie, that means they already
      // signed up, so we'll set subscribed and the
      // message
      setSubscribed(true);
      // only if message hasn't already been set by the
      // handleSubmit function
      if (message === '') {
        setMessage('Thank you for subscribing!');
      }
    }
  }, [cookies.electasksubscribed, message]);

  async function handleSubmit(e) {
    e.preventDefault();
    // send to mailchimp
    const data = await addToMailchimp(email);
    // if it worked, we'll set subscribed, the message to the user
    // and the cookie.  If not, we'll just set the error message to
    // show the user what happened
    if (data.result === 'success') {
      setSubscribed(true);
      setMessage(data.msg);
      const nextYear = new Date().getFullYear() + 1;
      const date = new Date(`December 31, ${nextYear} 23:59:59`);
      setCookie('electasksubscribed', true, { expires: date });
    } else {
      const message = data.msg.includes('already subscribed')
        ? 'You have already subscribed with that email address.'
        : data.msg;
      setErrorMessage(message);
    }
  }
  return (
    <div className={`bg-${props.bg} py-5`}>
      <div className="col-md-6 col-lg-4 mx-auto">
        <h2 className="text-white">Newsletter</h2>
        <p className="text-white">
          I have a newsletter that goes out that talks about election
          efficiencies, tech, and other interesting things. If you'd like to
          receive the newsletters I send out, subscribe below! You can always
          unsubscribe later
        </p>
        {subscribed && (
          <div className="bg-light p-5">
            <h2 className="lead">{message}</h2>
          </div>
        )}
        {!subscribed && (
          <form
            id="newsletter-form"
            className="bg-light p-5"
            onSubmit={handleSubmit}
          >
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <p>My email address is...</p>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
        )}
      </div>
    </div>
  );
}

DarkNewsletter.propTypes = {
  bg: PropTypes.string
};

export default DarkNewsletter;

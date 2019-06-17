import React from 'react';
import {Link} from 'gatsby';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-left">
                        <small
                            style="font-family: 'Roboto', sans-serif;"
                            class="font-weight-bold text-white"
                        >
                            Electask
                        </small>
                        <p class="mb-0">
                            <small class="text-white">
                                &copy; <span id="year"></span> Electask, LLC
                            </small>
                        </p>
                        <small class="text-white">
                            Icons by
                            <a
                                href="https://www.freepik.com"
                                class="text-white"
                            >
                                Freepik
                            </a>
                            from
                            <a
                                href="https://www.flaticon.com"
                                class="text-white"
                            >
                                www.flaticon.com
                            </a>
                        </small>
                        <br />
                    </div>
                    <div class="col-12 col-md-2">
                        <h6 class="font-weight-bold text-white">
                            <span class="border-bottom">Support</span>
                        </h6>
                        <small>
                            <Link to="./privacy-policy" class="text-white">
                                Privacy Policy
                            </Link>
                        </small>
                        <br />
                        <small>
                            <Link
                                to="./operating-agreement.pdf"
                                class="text-white"
                            >
                                Operating Agreement
                            </Link>
                        </small>
                        <br />
                        <small>
                            <a
                                href="mailto:tom@electask.com"
                                class="text-white"
                            >
                                Contact Me
                            </a>
                        </small>
                    </div>
                    <div class="col-12 col-md-2">
                        <h6 class="font-weight-bold text-white">
                            <span class="border-bottom">Company</span>
                        </h6>
                        <small>
                            <a
                                href="mailto:tom@electask.com"
                                class="text-white"
                            >
                                Careers
                            </a>
                        </small>
                        ><br />
                    </div>
                    <div class="col-12 col-md-2">
                        <h6 class="font-weight-bold text-white">
                            <span class="border-bottom">Product</span>
                        </h6>
                        <small>
                            <Link href="/schedule" class="text-white">
                                Schedule a Demo
                            </Link>
                        </small>
                        <br />
                        <small>
                            <a
                                href="https://app.electask.com"
                                class="text-white"
                            >
                                Login
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

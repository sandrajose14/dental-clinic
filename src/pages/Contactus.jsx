import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contactus() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <h1 className="text-primary text-center mb-4 fw-bold">Contact Us</h1>
                <div className="row p-4 shadow" style={{ backgroundColor: 'lavender' }}>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="mb-2">
                            <h2>We take your dental health seriously & provide top-notch care.</h2>
                            <p>Schedule your dental appointment today for a healthy smile. Our experienced professionals, convenient hours, and caring team await you.</p>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                                <FontAwesomeIcon icon={faHeadset} className="me-2" />
                                <span className="fw-bold">For Booking:</span>
                                <p>+91 9865 74 12 30</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                <span className="fw-bold">Talk to Us:</span>
                                <p>+91 9685 74 12 30</p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                <span className="fw-bold">Mail Us:</span>
                                <p>mail@dental.in</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold">Follow Us :</h5>
                            <div className="d-flex">
                                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faSquareFacebook} className="mx-1 fs-3" /></a>
                                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faSquareInstagram} className="mx-1 fs-3" /></a>
                                <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faSquareTwitter} className="mx-1 fs-3" /></a>
                                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} className="mx-1 fs-3" /></a>
                                <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faSquareYoutube} className="mx-1 fs-3" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.558327210354!2d76.30948071075343!3d10.008813464676205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714236289511!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '300px' }}></iframe>
                        </div>
                        <div className="mt-4 d-flex justify-content-center">
                            <Link to="/treatment">
                                <Button className="border rounded-3 w-100" style={{ height: '53px' }}>Book an Appointment</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactus;

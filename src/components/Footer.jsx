import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faLocationDot, faNotesMedical, faTooth, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import CSS for additional styling

function Footer() {
    return (
        <footer className="bg-dark  py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="website">
                            <FontAwesomeIcon icon={faTooth} className="icon" size="2x" />
                            <span className="brand">The Dentakay</span>
                            <p className="description mt-4">Welcome to The Patient Dentist, where your smile is our top priority! We are dedicated to providing exceptional dental care in a state-of-the-art, comfortable, and welcoming environment.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className="Services">
                            <h4 className='text-primary fw-bold'>Our page <FontAwesomeIcon icon={faNotesMedical} className="icon" /></h4>
                            <ul className="list-unstyled mt-4">
                                <li><Link to='/login' className='text-white'>Login</Link></li>
                                <li><Link to='/feedback' className='text-white'>Feedbacks</Link></li>
                                <li><Link to='/' className='text-white'>Home</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className="Doctors">
                            <h4 className='text-primary fw-bold'>Services <FontAwesomeIcon icon={faUserDoctor} className="icon" /></h4>
                            <ul className="list-unstyled mt-4">
                                <li><Link to='/treatment' className='text-white'>Treatments</Link></li>
                                <li><Link to='/treatment' className='text-white'>Dental Surgeon ( view after selecting treatment )</Link></li>
                                <li><Link to='/contact' className='text-white'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="contact-us ">
                            <h4 className='text-primary fw-bold'>Contact Us <FontAwesomeIcon icon={faAddressBook} className="icon" /></h4>
                            <div className="subscribe mt-4">
    <input className="form-control " type="text" placeholder="Enter your email" style={{width:'220px'}} /> 
    <button className="btn btn-primary" style={{ height: "35px", width: '100px' }}>Register</button>
</div>

                            
<div className="social-links text-white mt-3 d-flex me-4" >
    <Link to='/' style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faInstagram} className="social-icon " style={{ color: "white",width:'30px' }} />
    </Link>
    <Link to='/' style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faTwitter} className="social-icon" style={{ color: "white",width:'30px' }} />
    </Link>
    <Link to='/' style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" style={{ color: "white",width:'30px' }} />
    </Link>
    <Link to='/' style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faFacebook} className="social-icon" style={{ color: "white",width:'30px'}} />
    </Link>
</div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">Copy right © 2024 The Dentakay. Built by Group 4 with React.</div>
        </footer>
    );
}

export default Footer;

import React from 'react'
import footerLogo from './images/footer-logo.png'
import footerMailIcon from './images/footer-mail-icon.png'
import footerPhoneIcon from './images/footer-phone-icon.png'
import footerLocationIcon from './images/footer-location-icon.png'
import { NavLink } from 'react-router-dom'
import './style.css'

function Footer() {
    return (
        // <!-- *************** FOOTER SECTION STARTS *************** -->
        <footer>
            <div className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="footer-section-left">
                                <img src={footerLogo} />
                                <p>
                                    Since 2010, we are on a
                                    <strong>mission to enable and empower rural women</strong>
                                    in India by providing them with access to credit
                                    Currently, we operate across India with 250 branches in
                                    10 states
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="footer-section-middle">
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li><NavLink to="/presence">Presence</NavLink></li>
                                    <li><NavLink to="/products">Products</NavLink></li>
                                    <li><NavLink to="/technology">Technology</NavLink></li>
                                    <li><NavLink to="/partners">Partners</NavLink></li>
                                    <li><NavLink to="/policies">Policies</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="footer-section-middle policy">
                                <ul>
                                    <li><NavLink to="/policies">Policies</NavLink></li>
                                    <li><NavLink to="/board">Board</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/grievance">Grievance</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="footer-section-right">
                                <div className="footer-card">
                                    <img src={footerMailIcon} />
                                    <div>
                                        <p>Email id</p>
                                        <h6>info@svcl.in</h6>
                                    </div>
                                </div>
                                <div className="footer-card">
                                    <img src={footerPhoneIcon} />
                                    <div>
                                        <p>Contact</p>
                                        <h6>1800-120-9040</h6>
                                    </div>
                                </div>
                                <div className="footer-card">
                                    <img src={footerLocationIcon} />
                                    <div>
                                        <p>Address</p>
                                        <h6>Lorem Ipsum</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="footer-section-copyright">Copyright © 2023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

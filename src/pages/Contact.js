import React, { useState } from 'react'
import heroSectionContact from './images/hero-section-contact-img.webp'
import contactBg from './images/contact-bg-img.jpg'
import contactPhone from './images/contact-phone.png'
import contactEmail from './images/contact-email.png'
import contactLocation from './images/contact-location.png'
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

function Contact() {
    const [phoneError, setPhoneError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // Email Validation
    const validateEmail = (e) => {
        let email = e.target.value
        setEmail(e.target.value)

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email !')
        }
    }

    // Phone Number Validation
    const validatePhone = (e) => {
        let phone = e.target.value
        setPhone(e.target.value)

        if (validator.isMobilePhone(phone)) {
            setPhoneError('');
        } else {
            setPhoneError('Enter your valid Phone Number !');
        }
    }

    const handleClick = (e) => {
        if (email === '' || phone === '' || firstName === '' || lastName === '' || message === '') {
            toast.error('Fill all the details !', {
                position: toast.POSITION.TOP_RIGHT
            });
            e.preventDefault();
        }
    }

    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionContact} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>CONTACT US</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** CONTACT SECTION STARTS *************** --> */}

                <section className="contact-section">
                    <div className="container">
                        <div className="contact-section-form">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-image-wrapper">
                                        <img src={contactBg} />
                                    </div>
                                    <div className="contact-image-content">
                                        <h4>Contact details</h4>
                                        <p><img src={contactPhone} />1800-120-9040</p>
                                        <p><img src={contactEmail} />info@svcl.in</p>
                                        <p>
                                            <img src={contactLocation} />5th Floor, Tower
                                            B, SAS Tower Medicity, Sector - 38, Gurugram Haryana, India
                                            - 122001.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName"
                                                    >First Name <span>(optional)</span></label
                                                    >
                                                    <input
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        placeholder="|"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName"
                                                    >Last name <span>(optional)</span></label
                                                    >
                                                    <input
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="Email">Email <span>(optional)</span></label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="Email"
                                                        onChange={(e) => validateEmail(e)}
                                                    />
                                                    <span style={{ fontWeight: 'bold', color: 'red' }}>{email.length > 0 && emailError}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">Phone number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phoneNumber"
                                                        placeholder="+1 102 3456 789"
                                                        onChange={(e) => validatePhone(e)}
                                                    />
                                                    <span style={{ fontWeight: 'bold', color: 'red' }}>{phone.length > 0 && phoneError}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <input
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="message"
                                                        placeholder="Write your message.."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="col-md-12 contact-submit-button">
                                                    <button type="submit" onClick={handleClick} className="btn btn-primary">
                                                        Submit
                                                    </button>
                                                </div>
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact

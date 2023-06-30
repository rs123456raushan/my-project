import React, { useState } from 'react'
import Impact from './Impact'
import Value from './Value'
import heroSectionCareer from './images/hero-section-careers-img.png'
import careerWork1 from './images/careers-work-img1.png'
import careerWork2 from './images/careers-work-img2.png'
import careerWork3 from './images/careers-work-img3.png'
import careerWork4 from './images/careers-work-img4.png'
import careerWork5 from './images/careers-work-img5.png'
import validator from 'validator'
import './style.css'

function Career() {
    const [phoneError, setPhoneError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mobile, setMobile] = useState('')

    // Email Validation
    const validateEmail = (e) => {
        let email = e.target.value
        setEmail(e.target.value)

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    // Phone Number Validation
    const validatePhone = (e) => {
        let phone = e.target.value
        setPhone(e.target.value)

        if (validator.isMobilePhone(phone)) {
            setPhoneError('');
        } else {
            setPhoneError('Enter your valid Phone Number!');
        }
    }

    // Mobile Number Validation
    const validateMobile = (e) => {
        let mobile = e.target.value
        setMobile(e.target.value)

        if (validator.isMobilePhone(mobile)) {
            setPhoneError('');
        } else {
            setPhoneError('Enter your valid Mobile Number!');
        }
    }
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionCareer} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>CAREERS</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** WORK SECTION STARTS *************** --> */}
                <section className="work-section">
                    <div className="container">
                        <div className="main-heading">WHY WORK WITH US</div>
                        <div className="work-cards-wrapper">
                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={careerWork1} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>We are creating impact Real impact.</h5>
                                    <p>Improved lives of 30 lakh rural women. And counting.</p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={careerWork2} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>
                                        We are growing.<br />
                                        Fast.
                                    </h5>
                                    <p>Aiming to double our impact and scale. Every year.</p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={careerWork3} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>Our values defines our culture</h5>
                                    <p>सम्मान. सेवा. साधना. सहयोग. सुधार</p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={careerWork4} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>We grow when our team does.</h5>
                                    <p>We invest in our people, wholeheartedly.</p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={careerWork5} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>We are not afraid to innovate.</h5>
                                    <p>Our technology and learning mindset is our capital.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** VALUE SECTION STARTS *************** --> */}
                <Value />

                {/* <!-- *************** IMPACT SECTION STARTS *************** --> */}
                <Impact />

                {/* <!-- *************** APPLY SECTION STARTS *************** --> */}

                <section className="apply-section">
                    <div className="container">
                        <div className="apply-section-main-heading">APPLY HERE</div>
                        <div className="apply-section-form">
                            <form>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="fullName">Full Name*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                placeholder="|"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="Email">Email*</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="Email"
                                                placeholder="Doe"
                                                onChange={(e) => validateEmail(e)}
                                            /> <br />
                                            <span style={{ fontWeight: 'bold', color: 'red' }}>{email.length > 0 && emailError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="phoneNumber">Phone number*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phoneNumber"
                                                placeholder="+1 012 3456 789"
                                                onChange={(e) => validatePhone(e)}
                                            /> <br />
                                            <span style={{ fontWeight: 'bold', color: 'red' }}>{phone.length > 0 && phoneError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="DOB">Date of birth*</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="DOB"
                                                placeholder="DD-MM-YYYY"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="mobileNumber">Mobile number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="mobileNumber"
                                                placeholder="+91 -"
                                                onChange={(e) => validateMobile(e)}
                                            /> <br />
                                            <span style={{ fontWeight: 'bold', color: 'red' }}>{mobile.length > 0 && phoneError}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="workExperience">Work experience</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="workExperience"
                                                        placeholder="Years"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="workExperience"
                                                        placeholder="Months"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="role">Role</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="role"
                                                placeholder="Lorem Ipsum"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label for="resume">Resume</label>
                                            <div className="resume-button">
                                                <input type="file" id="myFileInput" style={{display: 'none'}} />
                                                <button type="button" onClick={() => document.getElementById('myFileInput').click()} className="btn">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Career

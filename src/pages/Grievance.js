import React from 'react'
import heroSectionGrievance from './images/hero-section-grievance-img.webp'
import contactBg from './images/contact-bg-img.jpg'
import contactPhone from './images/contact-phone.png'
import contactEmail from './images/contact-email.png'
import contactLocation from './images/contact-location.png'
import grievanceUser from './images/grievance-user-icon.png'
import grievanceMail from './images/grievance-mail-icon.png'
import grievancePhone from './images/grievance-phone-icon.png'
import grievanceLocation from './images/grievance-location-icon.png'
import './style.css'

function Grievance() {
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionGrievance} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>CUSTOMER GRIEVANCE</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** GRIEVANCE REDRESSAL SECTION STARTS *************** --> */}

                <section className="grievance-redressal-section">
                    <div className="container">
                        <div className="grievance-redressal-section-content">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="grievance-redressal-image-wrapper">
                                        <img src={contactBg} />
                                    </div>
                                    <div className="grievance-redressal-image-content">
                                        <h4>Contact details</h4>
                                        <p><a href="tel:1800-120-9040"><img src={contactPhone} />1800-120-9040</a></p>
                                        <p><a href="mailto:info@svcl.in"><img src={contactEmail} />info@svcl.in</a></p>
                                        <p>
                                            <img src={contactLocation} />5th Floor, Tower
                                            B, SAS Tower Medicity, Sector - 38, Gurugram Haryana, India
                                            - 122001.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="grievance-redressal-right-section-heading">
                                        Grievances Redressal Officer
                                    </div>
                                    <div className="grievance-redressal-right-section-cards">
                                        <div className="grievance-card-content">
                                            <img src={grievanceUser} />
                                            <div>
                                                <p>Name</p>
                                                <h6>Akshay Pandey</h6>
                                            </div>
                                        </div>
                                        <div className="grievance-card-content">
                                            <a href="mailto:info@svcl.in"><img src={grievanceMail} /></a>
                                            <div>
                                                <p>Email</p>
                                                <h6><a href="mailto:info@svcl.in">info@svcl.in</a></h6>
                                            </div>
                                        </div>
                                        <div className="grievance-card-content">
                                            <a href="tel:1800-120-9040"><img src={grievancePhone} /></a>
                                            <div>
                                                <p>Contact</p>
                                                <h6><a href="tel:1800-120-9040">1800-120-9040</a></h6>
                                            </div>
                                        </div>
                                        <div className="grievance-card-content">
                                            <img src={grievanceLocation} />
                                            <div>
                                                <p>Address</p>
                                                <h6>
                                                    5th Floor, Tower B, SAS Towers Medicity, Sector - 38,
                                                    Gurugram Haryana, India - 122001.
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** GRIEVANCE REDRESSAL MECHANISM SECTION STARTS *************** --> */}

                <section className="value-section grievance-mechanism-section">
                    <div className="container">
                        <div className="main-heading">GRIEVANCE REDRESSAL MECHANISM</div>
                        <div className="card-wrapper">
                            <div className="value-cards-wrapper grievance-mechanism-card-wrapper">
                                <div className="value-card grievance-mechanism-card">
                                    <div className="value-card-body grievance-mechanism-card-body">
                                        <h5>Level 1</h5>
                                        <h6>Branch Manager</h6>
                                        <p>
                                            Contact the respective Branch Manager. Phone number and the
                                            address of the Branch office are mentioned in the passbook.
                                        </p>
                                    </div>
                                </div>
                                <div className="value-card grievance-mechanism-card">
                                    <div className="value-card-body grievance-mechanism-card-body">
                                        <h5>Level 2</h5>
                                        <h6>Grievance officer</h6>
                                        <p>
                                            If the complaint is not resolved within 15 days, the
                                            customer can reach out to the grievance officer.<br /><br />
                                            Grievance Redressal Officer:<br />Mr. Akshay Pandey<br />Toll
                                            Free Number: 1800-120-9040<br />Email:
                                            <a href="#" target="_blank">grievance@svcl.in</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="value-card grievance-mechanism-card">
                                    <div className="value-card-body grievance-mechanism-card-body">
                                        <h5>Level 3</h5>
                                        <h6>Chief business officer</h6>
                                        <p>
                                            If the complaint is not resolved within 30 days, the
                                            customer can reach out to the CBO <br /><br />
                                            CBO: Mr. Anand Tripathi<br />Email:
                                            <a href="#" target="_blank">cbo@svcl.in</a><br />Address:
                                            5th Floor, Tower B, SAS Tower, Medanta Sector-38, Gurugram,
                                            Haryana - 122001
                                        </p>
                                    </div>
                                </div>
                                <div className="value-card grievance-mechanism-card">
                                    <div className="value-card-body grievance-mechanism-card-body">
                                        <h5>Level 4</h5>
                                        <h6>Microfinance Institutions Network</h6>
                                        <p>Toll-free number -1800 102 1080</p>
                                    </div>
                                </div>
                                <div className="value-card grievance-mechanism-card">
                                    <div className="value-card-body grievance-mechanism-card-body">
                                        <h5>Level 5</h5>
                                        <h6>Reserve Bank of India</h6>
                                        <p>
                                            If the complaint is not addressed within 30 days, the
                                            customer can approach the Reserve Bank of India General
                                            Manager.<br /><br />
                                            Phone number: 011-23318759,<br />Email:
                                            <a href="#" target="_blank">dnbsnewdelhi@rbi.org.in</a
                                            ><br />
                                            Address: Delhi Regional Office Parliament Street, New
                                            Delhi-110001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Grievance

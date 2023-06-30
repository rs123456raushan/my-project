import React from 'react'
import heroSectionTechnology from './images/hero-section-technology-img.png'
import tech1 from './images/technology-img1.png'
import tech2 from './images/technology-img2.png'
import tech3 from './images/technology-img3.png'
import tech4 from './images/technology-img4.png'
import tech5 from './images/technology-img5.png'
import './style.css'

function Technology() {
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionTechnology} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>TECHNOLOGY</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** PARAGRAPH SECTION STARTS *************** --> */}
                <section className="paragraph-section technology-para-section">
                    <div className="container">
                        <p>
                            FINNCUB, a seamless, secure API integrated & an innovative fintech
                            solution designed to address the financial challenges of modern
                            lending business. Its paperless and latest integrated technologies
                            enable it to cover entire loan journey from customer on-boarding,
                            digitization, and compression of customer's documents on a cloud
                            storage through real time customer credit verification to loan
                            disbursement and closure of loan application. Thus, making it
                            secure, transparent, and powerful business reporting platform that
                            helps in risk mitigation with clear visibility to boost the lending
                            business.
                        </p>
                    </div>
                </section>

                {/* <!-- *************** TECHNOLOGY CAPITAL STARTS *************** --> */}

                <section className="work-section technology-capital-section">
                    <div className="container">
                        <div className="main-heading">OUR TECHNOLOGY IS OUR CAPITAL</div>
                        <div className="work-cards-wrapper">
                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={tech1} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>Comprehensive and integrated solution</h5>
                                    <p>
                                        We have the entire loan journey, from onboarding and document
                                        digitization to real-time credit verification and loan
                                        disbursement, all on a single platform with LOS, LMS, and
                                        Finance ERP modules integrated in one solution.
                                    </p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={tech2} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>
                                        Dynamic real-time<br />
                                        analytics
                                    </h5>
                                    <p>
                                        Real-time analytics allows us to gain valuable insights that
                                        help with risk mitigation and improve overall efficiency. We
                                        can track movement of our field employees in real-time,
                                        ensuring transparency and more accountability.
                                    </p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={tech3} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>
                                        Seamless<br />
                                        integration
                                    </h5>
                                    <p>
                                        Benefit from our robust integration and strong partnerships
                                        with over 10 banks, enabling effortless co-lending and
                                        fostering diverse collaborations. This integration enhances
                                        cooperation, expands our capabilities, and ensures better
                                        service delivery.
                                    </p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={tech4} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>Advanced credit rule algorithm</h5>
                                    <p>
                                        With our robust credit rules algorithm, we are able to do an
                                        accurate and reliable assessment of customer creditworthiness.
                                        helping us to effectively mitigate risk and ensure a secure
                                        and trustworthy financial environment for all stakeholders
                                        involved.
                                    </p>
                                </div>
                            </div>

                            <div className="work-card">
                                <div className="work-card-image">
                                    <img src={tech5} alt="" />
                                </div>
                                <div className="work-card-body">
                                    <h5>In-house mobile <br />application</h5>
                                    <p>
                                        Experience enhanced productivity as our solution empowers
                                        field staff to efficiently perform operations while on the
                                        move. This streamlined approach enables seamless execution,
                                        ensuring that tasks are accomplished effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Technology

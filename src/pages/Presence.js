import React from 'react'
import heroSectionPresenceImg from './images/hero-section-presence-img.png'
import frame from './images/Frame.png'
import './style.css'

function Presence() {
    return (
        <div>
            <div className="main wrapper">
                
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionPresenceImg} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>OUR PRESENCE</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** PARAGRAPH SECTION STARTS *************** --> */}
                <section className="paragraph-section">
                    <div className="container">
                        <p>
                            We are dedicated to pushing boundaries and providing unwavering
                            support to our rural communities by expanding our footprint. With
                            our extensive reach, we currently operate in 10 states, spanning
                            across Uttar Pradesh, Uttarakhand, Bihar, Madhya Pradesh,
                            Chhattisgarh, Jharkhand, Punjab, Haryana, Rajasthan, Gujarat. Our
                            network comprises 249 branches strategically located to ensure
                            accessibility and convenience for those in need.
                        </p>
                    </div>
                </section>

                {/* <!-- *************** MAP SECTION STARTS *************** --> */}
                <section className="map-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="map-section-left">
                                    <div className="map-section-card">
                                        <h4>10</h4>
                                        <p>STATES</p>
                                    </div>
                                    <div className="map-section-card">
                                        <h4>249</h4>
                                        <p>BRANCHES</p>
                                    </div>
                                    <div className="map-section-card">
                                        <h4>148</h4>
                                        <p>DISTRICTS</p>
                                    </div>
                                    <div className="map-section-card">
                                        <h4>35,515</h4>
                                        <p>NUMBER OF VILLAGES</p>
                                    </div>
                                    <div className="map-section-card">
                                        <h4>1054</h4>
                                        <p>NUMBER OF LOAN OFFICERS</p>
                                    </div>
                                    <p className="asOnDate">Data as on 31st March 2023</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="map-section-right">
                                    <img src={frame} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Presence

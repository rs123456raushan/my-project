import React from 'react'
import impactCardImg1 from './images/impact-card-img1.png'
import impactCardImg2 from './images/impact-card-img2.png'
import impactCardImg3 from './images/impact-card-img3.png'
import impactCardImg4 from './images/impact-card-img4.png'
import impactCardImg5 from './images/impact-card-img5.png'
import impactCardImg6 from './images/impact-card-img6.png'
import CountUp from 'react-countup'
import './style.css'

function Impact({ impactSection }) {
    return (
        <div>
            {/* <!-- *************** IMPACT SECTION STARTS *************** --> */}
            <section className={impactSection ? "impact-section career-impact-section" : "impact-section"}>
                <div className="container">
                    <div className="main-heading">OUR IMPACT</div>
                    <div className="impact-card-wrapper">
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg1} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={10} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} /></h3>
                                <p className="impact-card-text">STATES</p>
                            </div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg2} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={249} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} /></h3>
                                <p className="impact-card-text">BRANCHES</p>
                            </div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg3} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={3.5} decimals={1} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} /> L+</h3>
                                <p className="card-text">CUSTOMERS</p>
                            </div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg4} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={1400} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} />+</h3>
                                <p className="impact-card-text">EMPLOYEES</p>
                            </div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg5} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={446} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} /> CR</h3>
                                <p className="impact-card-text">LAST YEAR DISBURSEMENT</p>
                            </div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-card-image">
                                <img src={impactCardImg6} alt="" />
                            </div>
                            <div className="impact-card-body">
                                <h3><CountUp end={729} duration={2} enableScrollSpy={true} scrollSpyDelay={200} scrollSpyOnce={true} /> CR</h3>
                                <p className="impact-card-text">AUM</p>
                            </div>
                        </div>
                        <p className='impact-section-date'>Data as on 31st March 2023</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Impact

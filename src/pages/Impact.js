import React from 'react'
import impactCardImg1 from './images/impact-card-img1.png'
import impactCardImg2 from './images/impact-card-img2.png'
import impactCardImg3 from './images/impact-card-img3.png'
import impactCardImg4 from './images/impact-card-img4.png'
import impactCardImg5 from './images/impact-card-img5.png'
import impactCardImg6 from './images/impact-card-img6.png'
import './style.css'

function Impact() {
    return (
        <div>
            {/* <!-- *************** IMPACT SECTION STARTS *************** --> */}
            <section class="impact-section">
                <div class="container">
                    <div class="main-heading">OUR IMPACT</div>
                    <div class="impact-card-wrapper">
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg1} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>10</h3>
                                <p class="impact-card-text">STATES</p>
                            </div>
                        </div>
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg2} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>249</h3>
                                <p class="impact-card-text">BRANCHES</p>
                            </div>
                        </div>
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg3} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>3.5 L+</h3>
                                <p class="card-text">CUSTOMERS</p>
                            </div>
                        </div>
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg4} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>1400+</h3>
                                <p class="impact-card-text">EMPLOYEES</p>
                            </div>
                        </div>
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg5} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>446 CR</h3>
                                <p class="impact-card-text">LAST YEAR DISBURSEMENT</p>
                            </div>
                        </div>
                        <div class="impact-card">
                            <div class="impact-card-image">
                                <img src={impactCardImg6} alt="" />
                            </div>
                            <div class="impact-card-body">
                                <h3>729 CR</h3>
                                <p class="impact-card-text">AUM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Impact

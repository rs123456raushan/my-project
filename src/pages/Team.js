import React from 'react'
import heroSectionTeam from './images/hero-section-team-img.png'
import teamAnand from './images/team-anand.png'
import teamKapil from './images/team-kapil.png'
import teamChandini from './images/team-chandini.png'
import './style.css'

function Team() {
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionTeam} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>OUR TEAM</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** TEAM SECTION STARTS *************** --> */}

                <section className="team-section">
                    <div className="container">
                        <div className="person-card-wrapper">
                            <div className="person-card">
                                <img src={teamAnand} alt="" />
                                <div className="person-card-text">
                                    <h4>ANAND TRIPATHI</h4>
                                    <p>chief business officer</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamAnand} alt="" />
                                <div className="person-card-text">
                                    <h4>Saurabh arora</h4>
                                    <p>Chief Finance Officer</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamKapil} alt="" />
                                <div className="person-card-text">
                                    <h4>Kapil Tyagi</h4>
                                    <p>chief business officer</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamChandini} alt="" />
                                <div className="person-card-text">
                                    <h4>Chandani Gagwani</h4>
                                    <p>company secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Team

import React from 'react'
import heroSectionTeam from './images/hero-section-team-img.webp'
import teamAnand from './images/team-anand.webp'
import teamKapil from './images/team-kapil.webp'
import teamChandini from './images/team-chandini.webp'
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
                                <div className="person-card-overlay">
                                    <p>
                                        He is a socially driven entrepreneur having in-depth
                                        experience in setting up various projects with outstanding
                                        achievements. “Medanta, the Medicity” an Asia famous hospital
                                        with state of art medical facilities is one of the ventures
                                        running successfully, helping society at large.Mr.Sachdeva, as
                                        a visionary entrepreneur, had helped society with first public
                                        private partnership in water distribution in Haryana.His other
                                        business ventures are into financial services, infrastructure
                                        development, technology and hospitality, flourishing at
                                        national and international level.His power, vision, values,
                                        charisma and intelligence all put together distinguish him as
                                        a leader who has organized a group of people to achieve a
                                        common goal.
                                    </p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamAnand} alt="" />
                                <div className="person-card-text">
                                    <h4>Saurabh arora</h4>
                                    <p>Chief Finance Officer</p>
                                </div>
                                <div className="person-card-overlay">
                                    <p>
                                        He is a socially driven entrepreneur having in-depth
                                        experience in setting up various projects with outstanding
                                        achievements. “Medanta, the Medicity” an Asia famous hospital
                                        with state of art medical facilities is one of the ventures
                                        running successfully, helping society at large.Mr.Sachdeva, as
                                        a visionary entrepreneur, had helped society with first public
                                        private partnership in water distribution in Haryana.His other
                                        business ventures are into financial services, infrastructure
                                        development, technology and hospitality, flourishing at
                                        national and international level.His power, vision, values,
                                        charisma and intelligence all put together distinguish him as
                                        a leader who has organized a group of people to achieve a
                                        common goal.
                                    </p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamKapil} alt="" />
                                <div className="person-card-text">
                                    <h4>Kapil Tyagi</h4>
                                    <p>chief business officer</p>
                                </div>
                                <div className="person-card-overlay">
                                    <p>
                                        He is a socially driven entrepreneur having in-depth
                                        experience in setting up various projects with outstanding
                                        achievements. “Medanta, the Medicity” an Asia famous hospital
                                        with state of art medical facilities is one of the ventures
                                        running successfully, helping society at large.Mr.Sachdeva, as
                                        a visionary entrepreneur, had helped society with first public
                                        private partnership in water distribution in Haryana.His other
                                        business ventures are into financial services, infrastructure
                                        development, technology and hospitality, flourishing at
                                        national and international level.His power, vision, values,
                                        charisma and intelligence all put together distinguish him as
                                        a leader who has organized a group of people to achieve a
                                        common goal.
                                    </p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamChandini} alt="" />
                                <div className="person-card-text">
                                    <h4>Chandani Gagwani</h4>
                                    <p>company secretary</p>
                                </div>
                                <div className="person-card-overlay">
                                    <p>
                                        He is a socially driven entrepreneur having in-depth
                                        experience in setting up various projects with outstanding
                                        achievements. “Medanta, the Medicity” an Asia famous hospital
                                        with state of art medical facilities is one of the ventures
                                        running successfully, helping society at large.Mr.Sachdeva, as
                                        a visionary entrepreneur, had helped society with first public
                                        private partnership in water distribution in Haryana.His other
                                        business ventures are into financial services, infrastructure
                                        development, technology and hospitality, flourishing at
                                        national and international level.His power, vision, values,
                                        charisma and intelligence all put together distinguish him as
                                        a leader who has organized a group of people to achieve a
                                        common goal.
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

export default Team

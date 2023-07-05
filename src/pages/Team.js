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
                                    Mr. Tripathi, Chief Business Officer of SV Credit line limited and has been associated with the Company since July 2019. He has played a variety of roles, notable among them being leading Process Excellence, Transformation, Zonal Business, Sales control and Learning & Organization Development teams. Anand has 21 years of experience in Banking and NBFC that includes major stint with IndusInd Bank limited and Jana Small finance bank, managing large complex operations (2,000 staff), Retail Banks and Credit Card Issuers. Anand holds a B.Sc. (Statistics) and certified NCFM profession in depository module.
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
                                    A Qualified Chartered Accountant, Mr Saurabh Arora has overall 8 years of experience in Financials Sectors. He possesses experience in Audit and Assurance engagements with exposure to different industries and assignments with BSR & Co. LLP (KPMG India) and MSKA & Associates (BDO India). He has also handled US listing engagements. Over 8 years of experience in the audit discipline, handling assignments across a diverse range of sectors including Financial Services, Manufacturing, covering statutory and tax audits, group reporting and limited reviews. He also possesses the skill set for the Financial Management, Process Upgradations and Improvements, Treasury Management, Internal Audits, Internal controls, IND AS implementation, Team building.
                                    </p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={teamKapil} alt="" />
                                <div className="person-card-text">
                                    <h4>Kapil Tyagi</h4>
                                    <p>HEAD - INFORMATION TECHNOLOGY</p>
                                </div>
                                <div className="person-card-overlay">
                                    <p>
                                    Mr. Kapil Tyagi has 14 years of experience in software development with IT and Non-IT companies. He has expertise in Product Development Lifecycle Management, Program/Project Management, IT Service Delivery, Service Desk Management, Business Application Support & Vendor Governance, leading turnkey IT development projects for various businesses in the financial sector. His last stint is with Satin Creditcare ltd. as a Assistant Vice President.
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

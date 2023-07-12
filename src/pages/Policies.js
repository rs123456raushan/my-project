import React, { useState } from 'react'
import heroSectionPolicy from './images/hero-section-policy-img.webp'
import policyLink from './images/plocy-link-icon.png'
import './style.css'
import { NavLink } from 'react-router-dom';

function Policies() {
    let policies = [
        { name: "CSR Policy" },
        { name: "NRC Policy" },
        { name: "POSH" },
        { name: "Whistle Blower/ Vigil Mechanism" },
        { name: "Moratorium" },
        { name: "Policy resolution framework" },
        { name: "Major Highlights of resolution framework" },
        { name: "Co-Lending Policy" },
        { name: "Related party transactions Policy" },
        { name: "Code of Conduct" },
        { name: "Terms and conditions for appointment of independent director" },
        { name: "Risk Management Policy" },
        { name: "Grievance Redressal Procedure" },
        { name: "Fair Practice Code" },
    ];

    const [numberOfItemsShown, setNumberOfItemsShown] = useState(6);

    const showMore = () => {
        if (numberOfItemsShown + 6 <= policies.length) {
            setNumberOfItemsShown(numberOfItemsShown + 6)
        } else {
            setNumberOfItemsShown(policies.length)
        }
    }

    return (
        <div>
            <div className="main wrapper">

                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionPolicy} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>POLICIES</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** POLICY SECTION STARTS *************** --> */}

                <section className="policy-section">
                    <div className="container">
                        <h1 className="main-heading">POLICIES</h1>
                        <div className="policy-items-wrapper">
                            {/* <div className="policy-item">
                                <h4>CSR Policy</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div>
                            <div className="policy-item">
                                <h4>NRC Policy</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div>
                            <div className="policy-item">
                                <h4>POSH</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div>
                            <div className="policy-item">
                                <h4>Whistle Blower/ Vigil Mechanism</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div>
                            <div className="policy-item">
                                <h4>Corporate Governance</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div>
                            <div className="policy-item">
                                <h4>Moratorium</h4>
                                <a href=""><span>View </span> <img src={policyLink} alt="" /></a>
                            </div> */}
                            {
                                policies.slice(0, numberOfItemsShown)
                                    .map((policy) => {
                                        return (
                                            <div className="policy-item">
                                                <h4>{policy.name}</h4>
                                                {/* <a href=""><span>View </span> <img src={policyLink} alt="" /></a> */}
                                                {/* <NavLink onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} to='/policyContent'>
                                                    <span>View </span>
                                                    <img src={policyLink} alt="" />
                                                </NavLink> */}
                                                <NavLink to='/policyContent'
                                                    state={{
                                                        title: policy.name
                                                    }}
                                                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                                                    to='/policyContent'>
                                                    <span>View </span>
                                                    <img src={policyLink} alt="" />
                                                </NavLink>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <div className="text-center">
                            {
                                (numberOfItemsShown < policies.length) && (
                                    <button className="view-more-btn" onClick={showMore}>View More</button>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}

export default Policies

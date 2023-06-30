import React from 'react'
import heroSectionPartner from './images/hero-section-partner-img.png'
import partner1 from './images/parner-all-1.png'
import partner2 from './images/parner-all-2.png'
import partner3 from './images/parner-all-3.png'
import partner4 from './images/parner-all-4.png'
import partner5 from './images/parner-all-5.png'
import './style.css'

function Partners() {
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionPartner} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>PARTNERS AND ASSOCIATION</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** PARTNER TABS SECTION STARTS *************** --> */}

                <section className="partner-section">
                    <div className="container">
                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="all-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#all"
                                    type="button"
                                    role="tab"
                                    aria-controls="all"
                                    aria-selected="true"
                                >
                                    All
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="banking-partner-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#banking-partner"
                                    type="button"
                                    role="tab"
                                    aria-controls="banking-partner"
                                    aria-selected="false"
                                >
                                    Banking Partners
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="rating-agency-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#rating-agency"
                                    type="button"
                                    role="tab"
                                    aria-controls="rating-agency"
                                    aria-selected="false"
                                >
                                    Rating Agencies
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="technical-partner-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#technical-partner"
                                    type="button"
                                    role="tab"
                                    aria-controls="technical-partner"
                                    aria-selected="false"
                                >
                                    Technical Partners
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="self-regulatory-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#self-regulatory"
                                    type="button"
                                    role="tab"
                                    aria-controls="self-regulatory"
                                    aria-selected="false"
                                >
                                    Self Regulatory Organisation
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="group-insurance-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#group-insurance"
                                    type="button"
                                    role="tab"
                                    aria-controls="group-insurance"
                                    aria-selected="false"
                                >
                                    Group Insurance Partners
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="credit-bureau-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#credit-bureau"
                                    type="button"
                                    role="tab"
                                    aria-controls="credit-bureau"
                                    aria-selected="false"
                                >
                                    Credit Bureau
                                </button>
                            </li>
                        </ul>

                        <hr />

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="all"
                                role="tabpanel"
                                aria-labelledby="all-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner1} alt="" />
                                    <img src={partner2} alt="" />
                                    <img src={partner3} alt="" />
                                    <img src={partner3} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="banking-partner"
                                role="tabpanel"
                                aria-labelledby="banking-partner-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner3} alt="" />
                                    <img src={partner4} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="rating-agency"
                                role="tabpanel"
                                aria-labelledby="rating-agency-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner1} alt="" />
                                    <img src={partner2} alt="" />
                                    <img src={partner4} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="technical-partner"
                                role="tabpanel"
                                aria-labelledby="technical-partner-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner3} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="self-regulatory"
                                role="tabpanel"
                                aria-labelledby="self-regulatory-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner3} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="group-insurance"
                                role="tabpanel"
                                aria-labelledby="group-insurance-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner3} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="credit-bureau"
                                role="tabpanel"
                                aria-labelledby="credit-bureau-tab"
                                tabindex="0"
                            >
                                <div className="product-tab-item">
                                    <img src={partner3} alt="" />
                                    <img src={partner5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Partners

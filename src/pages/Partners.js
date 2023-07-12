import React from "react";
import heroSectionPartner from "./images/hero-section-partner-img.webp";
import partnerLending1 from "./images/partner-lending-1.png";
import partnerLending2 from "./images/partner-lending-2.png";
import partnerLending3 from "./images/partner-lending-3.png";
import partnerLending4 from "./images/partner-lending-4.png";
import partnerLending5 from "./images/partner-lending-5.png";
import partnerLending6 from "./images/partner-lending-6.png";
import partnerLending7 from "./images/partner-lending-7.png";
import partnerLending8 from "./images/partner-lending-8.png";
import partnerLending9 from "./images/partner-lending-9.png";
import partnerLending10 from "./images/partner-lending-10.png";
import partnerLending11 from "./images/partner-lending-11.png";
import partnerLending12 from "./images/partner-lending-12.png";
import partnerLending13 from "./images/partner-lending-13.png";
import partnerInsurance1 from "./images/partner-insurance-1.png";
import partnerInsurance2 from "./images/partner-insurance-2.png";
import partnerInsurance3 from "./images/partner-insurance-3.png";
import partnerInsurance4 from "./images/partner-insurance-4.png";
import partnerInsurance5 from "./images/partner-insurance-5.png";
import partnerInsurance6 from "./images/partner-insurance-6.png";
import partnerBank1 from "./images/partner-bank-1.png";
import partnerBank2 from "./images/partner-bank-2.png";
import partnerBank3 from "./images/partner-bank-3.png";
import partnerBank4 from "./images/partner-bank-4.png";
import partnerRating1 from "./images/partner-rating-1.png";
import partnerRating2 from "./images/partner-rating-2.png";
import partnerTechnical1 from "./images/partner-technical-1.png";
import partnerOrganisation1 from "./images/partner-organisation-1.png";
import partnerOrganisation2 from "./images/partner-organisation-2.png";
import partnerCredit1 from "./images/partner-credit-1.png";
import partnerCredit2 from "./images/partner-credit-2.png";
import "./style.css";

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
                  Lending Partners
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                  id="bc-partners-tab"
                                    data-bs-toggle="tab"
                  data-bs-target="#bc-partners"
                                    type="button"
                                    role="tab"
                  aria-controls="bc-partners"
                                    aria-selected="false"
                                >
                  BC partners
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
                        </ul>

                        <hr />

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="all"
                                role="tabpanel"
                                aria-labelledby="all-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerLending1} alt="" />
                  <img src={partnerLending2} alt="" />
                  <img src={partnerLending3} alt="" />
                  <img src={partnerLending4} alt="" />
                  <img src={partnerLending5} alt="" />
                  <img src={partnerLending6} alt="" />
                  <img src={partnerLending7} alt="" />
                  <img src={partnerLending8} alt="" />
                  <img src={partnerLending9} alt="" />
                  <img src={partnerLending10} alt="" />
                  <img src={partnerLending11} alt="" />
                  <img src={partnerLending12} alt="" />
                  <img src={partnerLending13} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="banking-partner"
                                role="tabpanel"
                                aria-labelledby="banking-partner-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerLending1} alt="" />
                  <img src={partnerLending2} alt="" />
                  <img src={partnerLending3} alt="" />
                  <img src={partnerLending4} alt="" />
                  <img src={partnerLending5} alt="" />
                  <img src={partnerLending6} alt="" />
                  <img src={partnerLending7} alt="" />
                  <img src={partnerLending9} alt="" />
                  <img src={partnerLending10} alt="" />
                  <img src={partnerLending11} alt="" />
                  <img src={partnerLending12} alt="" />
                  <img src={partnerLending13} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                id="bc-partners"
                                role="tabpanel"
                aria-labelledby="bc-partners-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerBank1} alt="" />
                  <img src={partnerBank2} alt="" />
                  <img src={partnerBank3} alt="" />
                  <img src={partnerBank4} alt="" />
                  <img src={partnerLending8} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="technical-partner"
                                role="tabpanel"
                                aria-labelledby="technical-partner-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerTechnical1} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="self-regulatory"
                                role="tabpanel"
                                aria-labelledby="self-regulatory-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerOrganisation1} alt="" />
                  <img src={partnerOrganisation2} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="group-insurance"
                                role="tabpanel"
                                aria-labelledby="group-insurance-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerInsurance1} alt="" />
                  <img src={partnerInsurance2} alt="" />
                  <img src={partnerInsurance3} alt="" />
                  <img src={partnerInsurance4} alt="" />
                  <img src={partnerInsurance6} alt="" />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="credit-bureau"
                                role="tabpanel"
                                aria-labelledby="credit-bureau-tab"
                tabIndex="0"
                            >
                                <div className="product-tab-item">
                  <img src={partnerCredit1} alt="" />
                  <img src={partnerCredit2} alt="" />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="rating-agency"
                role="tabpanel"
                aria-labelledby="rating-agency-tab"
                tabIndex="0"
              >
                <div className="product-tab-item">
                  <img src={partnerRating1} alt="" />
                  <img src={partnerRating2} alt="" />
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

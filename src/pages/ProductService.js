import React from 'react'
import heroSectionProductImg from './images/hero-section-poducts-img.webp'
import './style.css'

function ProductService() {
    return (
        <div>
            <div className="main wrapper">

                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionProductImg} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>Products and Services</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** PARAGRAPH SECTION STARTS *************** --> */}
                <section className="paragraph-section">
                    <div className="container">
                        <p>
                            Our business is based primarily on the joint liability group model, where we offer collateral free
                            micro credit for income generation activities. We prioritize simplicity in our product design,
                            ensuring that our customers easily comprehend and access our offerings.
                        </p>
                    </div>
                </section>

                {/* <!-- *************** PRODUCT CARD SECTION STARTS *************** --> */}
                <section className="product-card-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product-card">
                                    <div className="card-image">
                                        <h4>Income generating loan - JLG</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="para-top">
                                            <p>
                                                We empower rural women through loans for income generation
                                                in activities like agriculture, dairy, trading, kirana
                                                stores and tailoring businesses. Under the joint liability
                                                model, women form groups, sharing equal responsibility for
                                                repayment through a formal agreement.
                                            </p>
                                        </div>
                                        <div className="card-stats-wrapper">
                                            <div className="card-stat">
                                                <p>Amount</p>
                                                <h6>₹ 15,000 – 75,000</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Tenure</p>
                                                <h6>12 - 36 months</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Interest</p>
                                                <h6>19 - 29 %</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Processing fees</p>
                                                <h6>2% <span>+ GST</span></h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Frequency</p>
                                                <h6><span className="fs-12">weekly – biweekly – monthly</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-card">
                                    <div className="card-image grihSudharCard">
                                        <h4>Grih sudhar</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="para-top">
                                            <p>
                                                We provide loans for home and income improvement products,
                                                elevating customers' potential and quality of life. We cover
                                                a wide range of products including sewing machines, fans,
                                                mixer grinders, induction cookers, and more. With a focus on
                                                meeting evolving needs, we are constantly expanding our
                                                product suite to ensure customers have the tools for
                                                progress and prosperity.
                                            </p>
                                        </div>
                                        <div className="card-stats-wrapper">
                                            <div className="card-stat">
                                                <p>Amount</p>
                                                <h6>₹ 15,000 – 75,000</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Tenure</p>
                                                <h6>12 - 36 months</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Interest</p>
                                                <h6>19 - 29 %</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Processing fees</p>
                                                <h6>2% <span>+ GST</span></h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Frequency</p>
                                                <h6><span>14 Days/28 Days</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-card">
                                    <div className="card-image">
                                        <h4>Micro business loan</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="para-top">
                                            <p>
                                                We also provide income generating loans to individuals
                                                without any group guarantee. This product is a better fit
                                                for customers with strong credit discipline. This product is
                                                ideally suited for customers with a strong credit history.
                                                Our thorough evaluation process ensures eligibility,
                                                aligning with our unwavering commitment to foster a reliable
                                                and responsible lending ecosystem.
                                            </p>
                                        </div>
                                        <div className="card-stats-wrapper">
                                            <div className="card-stat">
                                                <p>Amount</p>
                                                <h6>₹ 15,000 – 75,000</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Tenure</p>
                                                <h6>12 - 36 months</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Interest</p>
                                                <h6>19 - 29 %</h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Processing fees</p>
                                                <h6>2% <span>+ GST</span></h6>
                                            </div>
                                            <div className="card-stat">
                                                <p>Frequency</p>
                                                <h6><span>14 Days/28 Days</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductService

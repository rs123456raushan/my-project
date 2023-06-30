import React from 'react';
import About from './About';
import Impact from './Impact';
import Value from './Value';
import './style.css'

function Home() {
    return (
        <div>
            <div className="main wrapper">

                {/* <!-- *************** MAIN CAROUSEL SECTION STARTS *************** --> */}
                <section className="main-carousel-section">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel-content">
                                    <div className="carousel-text">
                                        <p>
                                            we helped <strong id="totalWomens">10,000</strong> rural women grow their
                                            <strong id="businessNames">Kirana</strong> business
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-content">
                                    <div className="carousel-text">
                                        <p>
                                            we helped <strong>10,000</strong> rural women grow their
                                            <strong>Kirana</strong> business
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-content">
                                    <div className="carousel-text">
                                        <p>
                                            we helped <strong>10,000</strong> rural women grow their
                                            <strong>Kirana</strong> business
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** ABOUT US SECTION STARTS *************** --> */}
                <About />
                <div>
                    {/* <!-- *************** IMPACT SECTION STARTS *************** --> */}
                    <Impact />

                    {/* <!-- *************** VALUE SECTION STARTS *************** --> */}
                    <Value />
                </div>
            </div >
        </div >
    )
}

export default Home


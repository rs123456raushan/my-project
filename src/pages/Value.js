import React from 'react'
import valueCardImg1 from './images/value-card-img1.png'
import valueCardImg2 from './images/value-card-img2.png'
import valueCardImg3 from './images/value-card-img3.png'
import valueCardImg4 from './images/value-card-img4.png'
import valueCardImg5 from './images/value-card-img5.png'
import './style.css'

function Value({valuesection}) {
    return (
        <div>
            <section className={valuesection?"value-section career-value-section d-md-block d-none":"value-section d-md-block d-none"}>
                <div className="container">
                    <div className="main-heading">OUR VALUES</div>
                    <div className="card-wrapper">
                        <div className="value-cards-wrapper">
                            <div className="value-card">
                                <div className="value-card-image">
                                    <img src={valueCardImg1} alt="" />
                                </div>
                                <div className="value-card-body">
                                    <h5>सम्मान</h5>
                                    <h6>Respect as fundamental value</h6>
                                    <p>
                                        Treating everyone with dignity, fairness, and empathy,
                                        fostering a supportive environment for our team members and
                                        customers.
                                    </p>
                                </div>
                            </div>

                            <div className="value-card">
                                <div className="value-card-image">
                                    <img src={valueCardImg2}
                                        alt="" />
                                </div>
                                <div className="value-card-body">
                                    <h5>साधना</h5>
                                    <h6>Discipline, resilience and hardwork</h6>
                                    <p>
                                        Going the extra mile to achieve our goals and embracing
                                        challenges as opportunities for growth.
                                    </p>
                                </div>
                            </div>

                            <div className="value-card">
                                <div className="value-card-image">
                                    <img
                                        src={valueCardImg3}
                                        alt="" />
                                </div>
                                <div className="value-card-body">
                                    <h5>सहयोग</h5>
                                    <h6>Culture of we. Not me.</h6>
                                    <p>
                                        Fostering an environment of teamwork and shared purpose, we
                                        amplify our collective strengths, enabling us to achieve
                                        challenging outcomes.
                                    </p>
                                </div>
                            </div>

                            <div className="value-card">
                                <div className="value-card-image">
                                    <img src={valueCardImg4}
                                        alt="" />
                                </div>
                                <div className="value-card-body">
                                    <h5>सेवा</h5>
                                    <h6>Customer is our <del>king</del> queen.</h6>
                                    <p>
                                        We place the unique aspirations of our customers at the
                                        forefront, and design solutions that will help improve the
                                        quality of their lives.
                                    </p>
                                </div>
                            </div>

                            <div className="value-card">
                                <div className="value-card-image">
                                    <img src={valueCardImg5} alt="" />
                                </div>
                                <div className="value-card-body">
                                    <h5>सुधार</h5>
                                    <h6>Hungry to be better. Every day.</h6>
                                    <p>
                                        We nurture a growth mindset, seek innovation, and are
                                        looking to adapt to evolving needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="value-mobile-section d-md-none d-block">
                <div className="container">
                    <div className="main-heading">OUR VALUES</div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="value-card">
                                    <div className="value-card-image">
                                        <img src={valueCardImg1} alt="" />
                                    </div>
                                    <div className="value-card-body">
                                        <h5>सम्मान</h5>
                                        <h6>Respect as fundamental value</h6>
                                        <p>
                                            Treating everyone with dignity, fairness, and empathy,
                                            fostering a supportive environment for our team members and
                                            customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="value-card">
                                    <div className="value-card-image">
                                        <img src={valueCardImg2} alt="" />
                                    </div>
                                    <div className="value-card-body">
                                        <h5>साधना</h5>
                                        <h6>Discipline, resilience and hardwork</h6>
                                        <p>
                                            Going the extra mile to achieve our goals and embracing
                                            challenges as opportunities for growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="value-card">
                                    <div className="value-card-image">
                                        <img src={valueCardImg3} alt="" />
                                    </div>
                                    <div className="value-card-body">
                                        <h5>सहयोग</h5>
                                        <h6>Culture of we. Not me.</h6>
                                        <p>
                                            Fostering an environment of teamwork and shared purpose, we
                                            amplify our collective strengths, enabling us to achieve
                                            challenging outcomes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="value-card">
                                    <div className="value-card-image">
                                        <img src={valueCardImg4} alt="" />
                                    </div>
                                    <div className="value-card-body">
                                        <h5>सेवा</h5>
                                        <h6>Customer is our <del>king</del> queen.</h6>
                                        <p>
                                            We place the unique aspirations of our customers at the
                                            forefront, and design solutions that will help improve the
                                            quality of their lives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="value-card">
                                    <div className="value-card-image">
                                        <img src={valueCardImg5} alt="" />
                                    </div>
                                    <div className="value-card-body">
                                        <h5>सुधार</h5>
                                        <h6>Hungry to be better. Every day.</h6>
                                        <p>
                                            We nurture a growth mindset, seek innovation, and are
                                            looking to adapt to evolving needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Value

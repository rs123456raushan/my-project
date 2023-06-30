import React from 'react'
import heroSectionBoard from './images/hero-section-board-img.png'
import boardSunil from './images/board-sunil.png'
import boardVijay from './images/board-vijay.png'
import boardMeeta from './images/board-meeta.png'
import boardKalpataru from './images/board-kalpataru.png'
import boardAnil from './images/board-anil.png'
import boardVivek from './images/board-vivek.png'
import './style.css'

function Board() {
    return (
        <div>
            <div className="main wrapper">
                {/* <!-- *************** HERO SECTION STARTS *************** --> */}
                <section className="hero-section">
                    <img src={heroSectionBoard} alt="" />
                    <div className="hero-section-box">
                        <div className="hero-section-text">
                            <p>OUR BOARD</p>
                        </div>
                    </div>
                </section>

                {/* <!-- *************** BOARD SECTION STARTS *************** --> */}

                <section className="board-section">
                    <div className="container">
                        <div className="person-card-wrapper">
                            <div className="person-card">
                                <img src={boardSunil} alt="" />
                                <div className="person-card-text">
                                    <h4>MR. SUNIL SACHDEVA</h4>
                                    <p>Promoter Director</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={boardVijay} alt="" />
                                <div className="person-card-text">
                                    <h4>MR. VIJAY PAREKH</h4>
                                    <p>Promoter Director</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={boardMeeta} alt="" />
                                <div className="person-card-text">
                                    <h4>MS. MEETA MAKHAN</h4>
                                    <p>INDEPENDENT DIRECTOR</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={boardAnil} alt="" />
                                <div className="person-card-text">
                                    <h4>Mr. Anil Kumar Jha</h4>
                                    <p>INDEPENDENT DIRECTOR</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={boardKalpataru} alt="" />
                                <div className="person-card-text">
                                    <h4>MR. KALPATARU TRIPATHY</h4>
                                    <p>INDEPENDENT DIRECTOR</p>
                                </div>
                            </div>
                            <div className="person-card">
                                <img src={boardVivek} alt="" />
                                <div className="person-card-text">
                                    <h4>Mr. Vivek Goyal</h4>
                                    <p>INDEPENDENT DIRECTOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Board

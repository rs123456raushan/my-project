import React, { useEffect, useState } from 'react';
import About from './About';
import Impact from './Impact';
import Value from './Value';
import './style.css'

function Home() {
    var totalWomens = ["10,000", "27,000", "53,000"];
    var businessNames = ["Kirana", "Dairy", "Tailoring"];
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    })
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
                setIndex((index + 1) % totalWomens.length)
            }
        }, 2000);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <div>
            <div className="main wrapper">

                {/* <!-- *************** MAIN CAROUSEL SECTION STARTS *************** --> */}
                <section className="main-carousel-section">
                    <div className="carousel-content">
                        <div className="carousel-text">
                            <p>
                                we helped <strong className={fadeProp.fade} id="totalWomens">
                                    {
                                        totalWomens[index]
                                    }
                                </strong> rural women grow their
                                <strong className={fadeProp.fade} id="businessNames">
                                    {
                                       " " + businessNames[index]
                                    }
                                </strong> business
                            </p>
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


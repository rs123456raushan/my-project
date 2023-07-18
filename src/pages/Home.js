import React, { useEffect, useState } from "react";
import About from "./About";
import Impact from "./Impact";
import Value from "./Value";
import "./style.css";

function Home() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 56) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  var totalWomens = ["45,000+", "120,000+", "35,000+"];
  var businessNames = ["kirana", "dairy", "farming"];
  // const [fadeProp, setFadeProp] = useState({
  //     fade: 'fade-in'
  // })
  const [Index, setIndex] = useState(0);

  // useEffect(() => {
  //     const timeout = setInterval(() => {
  //         if (fadeProp.fade === 'fade-in') {
  //             setFadeProp({
  //                 fade: 'fade-out'
  //             })
  //         } else {
  //             setFadeProp({
  //                 fade: 'fade-in'
  //             })
  //             setIndex((index + 1) % totalWomens.length)
  //         }
  //     }, 2000);

  //     return () => clearInterval(timeout)
  // }, [fadeProp])

  useEffect(() => {
    const tick = () => {
      setIndex((i) => (i + 1) % totalWomens.length);
    };
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={fix ? "main-wrapper fixed" : "main-wrapper"}>
      {/* <!-- *************** MAIN CAROUSEL SECTION STARTS *************** --> */}
      <section className="main-carousel-section">
        <div className="carousel-content">
          <div className="carousel-text">
            <p>
              {/* we helped <strong className={fadeProp.fade} id="totalWomens">
                                    {
                                        totalWomens[index]
                                    } */}
              Last year we helped{" "}
              <strong id="totalWomens">
                {totalWomens[Index].split("").map(function (char, index) {
                  const style = { "animation-delay": 0.5 + index / 10 + "s" };
                  return (
                    <span
                      className="anime"
                      aria-hidden="true"
                      key={Math.random() * 100}
                      style={style}
                    >
                      {char}
                    </span>
                  );
                })}
              </strong>{" "}
              {"rural women grow their "}
              {/* <strong className={fadeProp.fade} id="businessNames">
                                    {
                                        " " + businessNames[index]
                                    }
                                </strong> business */}
              <strong id="businessNames">
                {businessNames[Index].split("").map(function (char, index) {
                  let style = { "animation-delay": 0.5 + index / 10 + "s" };
                  if (Index === 0) {
                    style = { "animation-delay": 0.5 + index / 8 + "s" };
                  } else if (Index === 1) {
                    style = { "animation-delay": 0.5 + index / 5 + "s" };
                  }
                  return (
                    <span
                      className="anime"
                      aria-hidden="true"
                      key={Math.random() * 100}
                      style={style}
                    >
                      {char}
                    </span>
                  );
                })}
              </strong>{" "}
              business
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
    </div>
  );
}

export default Home;

import React from "react";
import objects from "./images/OBJECTS.png";
import team03 from "./images/team-03 1.png";
import indexFocusSegment from "./images/index-focus-segment-img.png";
import indexFounderImage from "./images/index-founder-img.webp";

import "./style.css";

function About() {
  return (
    <div>
      {/* <!-- *************** ABOUT US SECTION STARTS *************** --> */}
      <section className="about-us-section">
        <div className="about-us-inner-section">
          <div className="container">
            <div className="about-us-section-top">
              <h4 className="main-heading">ABOUT US</h4>
              <p>
                We are one of the oldest and largest microfinance companies in
                India.
              </p>
              <p>
                <span>
                  Since 2010, we are on a
                  <strong> mission to enable and empower rural women</strong> in
                  India by providing them with access to credit, which is
                  otherwise scarcely available. By extending credit to them, we
                  not only enable their financial independence but also empower
                  them to become change catalysts in their communities. 
                </span>
                <span>
                  We are constantly exploring boundaries and extending our
                  support towards the rural population. Currently, we operate
                  across India with 250 branches in 10 states – Uttar Pradesh,
                  Uttarakhand, Bihar, Madhya Pradesh, Chhattisgarh, Jharkhand,
                  Punjab, Haryana, Rajasthan, Gujarat. 
                </span>
              </p>
            </div>
          </div>
          <div className="about-us-section-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="left-content">
                    <img src={indexFocusSegment} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-content">
                    <p>
                      In India, ~60% of the population still earns less than 5
                      lakh per year, which equates to less than 1500 rupees per
                      day. This segment has been the victim of unequal access -
                      unequal access to capital, unequal access to healthcare,
                      unequal access to a better life.
                      <br />
                      At our core, we aspire to serve and uplift this very
                      segment by providing them with the essential support they
                      need to break free from the cycle of inequality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      {/* <!-- *************** FOUNDER SECTION STARTS *************** --> */}
      <section className="founder-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 pe-0 ps-0">
              <div className="founder-section-left">
                <div className="card border-0 rounded-0">
                  <img
                    src={indexFounderImage}
                    className="card-img-top border-0 rounded-0"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      MR. SUNIL SACHDEVA
                      <br />
                      <span>FOUNDER, SVCL</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="founder-section-right">
                <p>
                  <span>
                    We are proud and humbled to be one of pioneers of the Indian
                    microfinance industry.&nbsp;
                    <strong>
                      With 15 lakh women borrowers served to date,
                    </strong>
                    &nbsp; we are breaking barriers that have hindered their
                    progress for too long. These women are not just borrowers;
                    they are courageous entrepreneurs with dreams and
                    aspirations, deserving equal opportunities.
                  </span>
                  <br />
                  <br />
                  <span>
                    Our mission extends beyond providing loans; it's about
                    creating a ripple effect of empowerment.&nbsp;
                    <strong>
                      When we empower a woman, we empower an entire family, a
                      community, and eventually, a nation
                    </strong>
                    . With unwavering passion, we support these women in
                    starting businesses, provide them access to better
                    healthcare and build a brighter future.
                  </span>
                  <br />
                  <br />
                  <span>
                    We are immensely proud of our impact so far, and even more
                    energized for the impact that we are yet to create.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

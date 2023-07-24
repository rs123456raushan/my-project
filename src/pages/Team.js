import React from "react";
import heroSectionTeam from "./images/hero-section-team-img.webp";
import teamAnand from "./images/team-anand.webp";
import teamKapil from "./images/team-kapil.webp";
import teamChandini from "./images/team-chandini.webp";
import teamSaurabh from "./images/team-saurabh.png";
import "./style.css";

function Team() {
  return (
    <div>
      <div className="main wrapper">
        {/* <!-- *************** HERO SECTION STARTS *************** --> */}
        <section className="hero-section">
          <img src={heroSectionTeam} alt="" />
          <div className="hero-section-box">
            <div className="hero-section-text">
              <p>OUR TEAM</p>
            </div>
          </div>
        </section>

        {/* <!-- *************** TEAM SECTION STARTS *************** --> */}

        <section className="team-section">
          <div className="container">
            <div className="person-card-wrapper">
              <div className="person-card">
                <img src={teamAnand} alt="" />
                <div className="person-card-text">
                  <h4>ANAND TRIPATHI</h4>
                  <p className="person-role">chief business officer</p>
                  <p className="person-description">
                    Mr. Tripathi, Chief Business Officer of SV Credit line
                    limited and has been associated with the Company since July
                    2019. He has played a variety of roles, notable among them
                    being leading Process Excellence, Transformation, Zonal
                    Business, Sales control, and Learning & Organization
                    Development teams. Anand has 21 years of experience in
                    Banking and NBFC which includes a major stint with IndusInd
                    Bank Limited and Jana Small finance bank, managing large
                    complex operations (2,000 staff), Retail Banks, and Credit
                    Card Issuers.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={teamSaurabh} alt="" />
                <div className="person-card-text">
                  <h4>Saurabh arora</h4>
                  <p className="person-role">Chief Finance Officer</p>
                  <p className="person-description">
                    Mr Saurabh Arora, Chief Finance Officer has over 10 years of
                    experience in financial management, audit, treasury, and
                    accounting. He is a qualified Chartered Accountant. His
                    professional journey includes valuable experience in
                    conducting Audit & Assurance engagements across diverse
                    industries with esteemed firms like BSR & Co. LLP (KPMG
                    India) and S.S. Kothari Mehta & Co.Having worked with
                    diverse sectors such as Manufacturing, Financial Sectors
                    (NBFCs & Stock Brokers), Construction, Service, and more, he
                    has gained valuable exposure. This experience has sharpened
                    his skills and provided him with an in-depth understanding
                    of the intricacies and distinctive demands of each industry.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={teamKapil} alt="" />
                <div className="person-card-text">
                  <h4>Kapil Tyagi</h4>
                  <p className="person-role">HEAD - INFORMATION TECHNOLOGY</p>
                  <p className="person-description">
                    Mr. Kapil Tyagi has 14 years of experience in software
                    development with IT and Non-IT companies. He has expertise
                    in Product Development Lifecycle Management, Program/Project
                    Management, IT Service Delivery, Service Desk Management,
                    Business Application Support & Vendor Governance, and
                    leading turnkey IT development projects for various
                    businesses in the financial sector. His last stint is with
                    Satin Creditcare Ltd. as an Assistant Vice President.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={teamChandini} alt="" />
                <div className="person-card-text">
                  <h4>Chandani Gagwani</h4>
                  <p className="person-role">company secretary</p>
                  <p className="person-description">
                    Chandani Gagwani is a seasoned professional with five years
                    of experience in handling Company Law and RBI Master
                    Direction. She has developed a strong understanding of legal
                    and regulatory frameworks in the corporate sector, with a
                    specific focus on Compliance and governance. She has worked
                    with prominent organizations such as Shipra Estate Limited a
                    renowned real estate and S.R Dinodia, &amp; Co. LLP. In her
                    role, she has gained extensive knowledge of RBI master
                    directions and actively participated in various matters
                    related to Company law compliance, conducting legal
                    research, drafting legal documents, and providing strategic
                    advice to ensure compliance with applicable laws and
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;

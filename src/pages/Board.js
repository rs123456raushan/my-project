import React from "react";
import heroSectionBoard from "./images/hero-section-board-img.webp";
import boardSunil from "./images/board-sunil.webp";
import boardVijay from "./images/board-vijay.png";
// import boardVijay from "./images/Vijay.png";
import boardMeeta from "./images/board-meeta.webp";
import boardKalpataru from "./images/board-kalpataru.jpg";
import boardAnil from "./images/board-anil.webp";
import "./style.css";
import { useState } from "react";

function Board() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 56) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div>
      <div className={fix ? "main-wrapper fixed" : "main-wrapper"}>
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
                  <p className="person-role">Founder</p>
                  <p className="person-description">
                    Sunil Sachdeva is a seasoned entrepreneur with a diverse
                    business portfolio spanning healthcare, finance, real
                    estate, and technology. He is the co-founder and director of
                    Medanta, one of India’s largest multi-specialty hospitals{" "}
                    <i>(2400+ installed beds)</i> with five hospitals in Delhi,
                    Gurugram, Indore, Ranchi, Patna and Lucknow. In 2010, he
                    established SVCL with a clear mission to facilitate
                    financial inclusion for the enterprising rural women in
                    India. His unwavering vision, boundless energy, and
                    commitment to innovation have positioned him as a standout
                    leader, propelling SVCL's growth story forward. His
                    entrepreneurial journey has been instrumental in
                    transforming access to quality healthcare and promoting
                    financial inclusion in India.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={boardVijay} alt="" />
                <div className="person-card-text">
                  <h4>MR. VIJAY PAREKH</h4>
                  <p className="person-role">Promoter Director</p>
                  <p className="person-description">
                    As a promoter director, he is a very seasoned Global Banker
                    and has handled prestigious assignments with MNC Banks and
                    Financial Institutions.Mr.Parekh holds a Masters degree from
                    Memphis State University, USA and over the years built
                    valuable cross functional experience such as in marketing,
                    credit and risk, strategic planning and business
                    development. He has handled key international positions in
                    financial sectors including President of International
                    Consumer & Small Business Financial Services and Vice
                    Chairman of American Express Bank.In his last assignment, he
                    has been the Senior Managing Director, special projects at
                    Temasek holdings(Pte) Ltd and Director of Fullerton
                    Financial Holdings(Pte.), Singapore.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={boardMeeta} alt="" />
                <div className="person-card-text">
                  <h4>MS. MEETA MAKHAN</h4>
                  <p className="person-role">INDEPENDENT DIRECTOR</p>
                  <p className="person-description">
                    Ms. Meeta Makhan, is Founder and Director of Doundo Services
                    Pvt Ltd, a sustainability solutions company, working with
                    emerging technologies for prevention of climate change,
                    converting public spaces into green in corporate buildings,
                    helping individuals have their own organic vegetable gardens
                    and promoting residential and corporate office rooftop
                    solar. She has wide range of experience in Corporate and
                    Investment Banking dealing with Large Indian Corporates,
                    Multinationals and Medium and Small Enterprise companies
                    across various regions in India.
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={boardAnil} alt="" />
                <div className="person-card-text">
                  <h4>Mr. Anil Kumar Jha</h4>
                  <p className="person-role">INDEPENDENT DIRECTOR</p>
                  <p className="person-description">
                    Mr Anil Kumar Jha is B. Tech. in Mining from IIT(ISM),
                    Dhanbad and M. Tech. in Mine Planning & Design from
                    IIT(ISM), Dhanbad. He has three decades of experience under
                    his belt in mine planning, production, management
                    supervision direction and control of underground as well as
                    open cast coal mines. He began his career in coal mining
                    industry in 1983 in Central Coalfields Limited. He also
                    served as General Manager in Central Coalfields Limited. He
                    was Chairman & Managing Director of Coal India Limited
                    (CIL).
                  </p>
                </div>
              </div>
              <div className="person-card">
                <img src={boardKalpataru} alt="" />
                <div className="person-card-text">
                  <h4>MR. KALPATARU TRIPATHY</h4>
                  <p className="person-role">INDEPENDENT DIRECTOR</p>
                  <p className="person-description">
                    Kalpataru Tripathy is a corporate lawyer with close to 25
                    years of experience. He is a Chemistry (Hons.) graduate from
                    Utkal University, a law graduate from Delhi University, a PG
                    Diploma holder in International Business Law from Indian
                    Society of International Law, and has undertaken an
                    Executive Education (Management) from Judge Business School,
                    University of Cambridge.
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

export default Board;

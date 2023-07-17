import React, { useEffect } from "react";
import footerLogo from "./images/footer-logo.png";
import footerMailIcon from "./images/footer-mail-icon.png";
import footerPhoneIcon from "./images/footer-phone-icon.png";
import footerLocationIcon from "./images/footer-location-icon.png";
import { NavLink } from "react-router-dom";
import "./style.css";

function Footer() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    // <!-- *************** FOOTER SECTION STARTS *************** -->
    <footer>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="footer-section-left">
                <a href="/">
                  <img src={footerLogo} />
                </a>
                <p>
                  Since 2010, we are on a{" "}
                  <strong> mission to enable and empower rural women</strong> in
                  India by providing them with access to credit. Currently, we
                  operate across India with 249 branches in 10 states.
                </p>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-section-middle">
                <h6>Quick Links</h6>
                <ul>
                  <li>
                    <NavLink
                      to="/home"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/presence"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Presence
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/technology"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/partners"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Partners
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-section-middle">
                <h6>Quick Links</h6>
                <ul>
                  <li>
                    <NavLink
                      to="/team"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Team
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="/policies"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Policies
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      to="/board"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Board
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Contact us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/grievance"
                      onClick={() =>
                        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Customer Grievance
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer-section-right">
                <div className="footer-card">
                  <a href="mailto:info@svcl.in">
                    <img src={footerMailIcon} />
                  </a>
                  <div>
                    <p>Email id:</p>
                    <h6>
                      <a href="mailto:info@svcl.in">info@svcl.in</a>
                    </h6>
                  </div>
                </div>
                <div className="footer-card">
                  <a href="tel:1800-120-9040">
                    <img src={footerPhoneIcon} />
                  </a>
                  <div>
                    <p>Contact</p>
                    <h6>
                      <a href="tel:1800-120-9040">1800-120-9040</a>
                    </h6>
                  </div>
                </div>
                <div className="footer-card">
                  <img src={footerLocationIcon} />
                  <div>
                    <p>Address</p>
                    <h6>
                      {/* 201, Empire Apartments, First Floor, Sultanpur MG Road,
                      New Delhi-110030 */}
                      5th Floor, Tower B, SAS Tower Medicity, Sector - 38,
                      Gurugram Haryana, India - 122001.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="footer-section-copyright">Copyright © 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

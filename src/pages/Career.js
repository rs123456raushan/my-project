import React, { useState } from "react";
import Impact from "./Impact";
import Value from "./Value";
import heroSectionCareer from "./images/hero-section-careers-img.webp";
import careerWork1 from "./images/careers-work-img1.png";
import careerWork2 from "./images/careers-work-img2.png";
import careerWork3 from "./images/careers-work-img3.png";
import careerWork4 from "./images/careers-work-img4.png";
import careerWork5 from "./images/careers-work-img5.png";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Career() {
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);

  // Email Validation
  const validateEmail = (e) => {
    let email = e.target.value;
    setEmail(e.target.value);

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email !");
    }
  };

  // Phone Number Validation
  const validatePhone = (e) => {
    let phone = e.target.value;
    setPhone(e.target.value);

    if (validator.isMobilePhone(phone)) {
      setPhoneError("");
    } else {
      setPhoneError("Enter your valid Phone Number !");
    }
  };

  // Mobile Number Validation
  const validateMobile = (e) => {
    let mobile = e.target.value;
    setMobile(e.target.value);

    if (validator.isMobilePhone(mobile)) {
      setPhoneError("");
    } else {
      setPhoneError("Enter your valid Mobile Number !");
    }
  };

  const handleClick = (e) => {
    if (
      email === "" ||
      phone === "" ||
      mobile === "" ||
      fullName === "" ||
      years === null ||
      months === null ||
      date === "" ||
      role === ""
    ) {
      toast.error("Fill all the details !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="main wrapper">
        {/* <!-- *************** HERO SECTION STARTS *************** --> */}
        <section className="hero-section">
          <img src={heroSectionCareer} alt="" />
          <div className="hero-section-box">
            <div className="hero-section-text">
              <p>CAREERS</p>
            </div>
          </div>
        </section>

        {/* <!-- *************** WORK SECTION STARTS *************** --> */}
        <section className="work-section">
          <div className="container">
            <div className="main-heading">WHY WORK WITH US</div>
            <div className="work-cards-wrapper">
              <div className="work-card">
                <div className="work-card-image">
                  <img src={careerWork1} alt="" />
                </div>
                <div className="work-card-body">
                  <h5>We are creating impact Real impact.</h5>
                  <p>Improved lives of 15 lakh rural women. And counting.</p>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-image">
                  <img src={careerWork2} alt="" />
                </div>
                <div className="work-card-body">
                  <h5>
                    We are growing.
                    <br />
                    Fast.
                  </h5>
                  <p>Aiming to double our impact and scale. Every year.</p>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-image">
                  <img src={careerWork3} alt="" />
                </div>
                <div className="work-card-body">
                  <h5>Our values defines our culture</h5>
                  <p>सम्मान. सेवा. साधना. सहयोग. सुधार</p>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-image">
                  <img src={careerWork4} alt="" />
                </div>
                <div className="work-card-body">
                  <h5>We grow when our team does.</h5>
                  <p>We invest in our people, wholeheartedly.</p>
                </div>
              </div>

              <div className="work-card">
                <div className="work-card-image">
                  <img src={careerWork5} alt="" />
                </div>
                <div className="work-card-body">
                  <h5>We are not afraid to innovate.</h5>
                  <p>Our technology and learning mindset is our capital.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- *************** VALUE SECTION STARTS *************** --> */}
        <Value valueSection={true} />

        {/* <!-- *************** IMPACT SECTION STARTS *************** --> */}
        <Impact impactSection={true} />

        {/* <!-- *************** APPLY SECTION STARTS *************** --> */}

        <section className="apply-section">
          <div className="container">
            <div className="apply-section-main-heading">APPLY HERE</div>
            <div className="apply-section-form">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name*</label>
                      <input
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="fullName"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="Email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        onChange={(e) => validateEmail(e)}
                      />{" "}
                      <br />
                      <span style={{ fontWeight: "bold", color: "red" }}>
                        {email.length > 0 && emailError}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone number*</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        onChange={(e) => validatePhone(e)}
                      />{" "}
                      <br />
                      <span style={{ fontWeight: "bold", color: "red" }}>
                        {phone.length > 0 && phoneError}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="DOB">Date of birth*</label>
                      <input
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        id="DOB"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="workExperience">Work experience</label>
                      <div className="row">
                        <div className="col-md-6 col-6">
                          <input
                            onChange={(e) => setYears(e.target.value)}
                            type="text"
                            className="form-control"
                            id="workExperience"
                            placeholder="Years"
                          />
                        </div>
                        <div className="col-md-6 col-6">
                          <input
                            onChange={(e) => setMonths(e.target.value)}
                            type="text"
                            className="form-control"
                            id="workExperience"
                            placeholder="Months"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="role">Role</label>
                      <select
                        onChange={(e) => setRole(e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Role</option>
                        <option value="operations">Operations</option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                        <option value="human-resources">Human resources</option>
                        <option value="audit">Audit</option>
                        <option value="stragety">Stragety</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group resume-upload">
                      <label htmlFor="resume">Resume</label>
                      <div className="resume-button">
                        <input
                          type="file"
                          id="myFileInput"
                          style={{ display: "none" }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("myFileInput").click()
                          }
                          className="btn"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        onClick={handleClick}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Career;

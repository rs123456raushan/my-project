import React from 'react'
import phoneIcon from './images/phone-icon.png'
import mailIcon from './images/mail-icon.png'
import headerLogo from './images/header-logo.png'
import { NavLink } from 'react-router-dom';
import './style.css'

function Header() {
    return (
        <header>
            <div className="topbar">
                <div className="container">
                    <ul>
                        <li><img src={phoneIcon} /><span>1800-120-9040</span></li>
                        <li><img src={mailIcon} /><span>info@svcl.in</span></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={headerLogo} alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/presence">Presence</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/technology">Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/partners">Partners</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/team">Team</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Governance
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            {/* <a className="dropdown-item" href="#">Policies</a> */}
                                            <NavLink className='dropdown-item' style={{background: 'none'}} to="/policies">Policies</NavLink>
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#">Board</a> */}
                                            <NavLink className='dropdown-item' style={{background: 'none'}} to="/board">Board</NavLink>
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#">Fair Practices</a> */}
                                            <NavLink className='dropdown-item' style={{background: 'none'}} to="/policies">Fair Practices</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' aria-current='page' to="/careers">Careers</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Reach Us
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            {/* <a className="dropdown-item" href="#">Home</a> */}
                                            <NavLink className='dropdown-item' style={{background: 'none'}} to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#">About</a> */}
                                            <NavLink className='dropdown-item' style={{background: 'none'}} to="/grievance">Customer Grievance</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header

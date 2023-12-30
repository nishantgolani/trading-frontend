import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            {/* Your existing navigation items */}
                            <li className="nav-item rounded">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <i className="bi bi-house-fill me-2" />
                                    Home
                                </a>
                            </li>
                            <li className="nav-item rounded">
                                <a className="nav-link" href="/about">
                                    <i className="bi bi-people-fill me-2" />
                                    About
                                </a>
                            </li>
                            <li className="nav-item rounded">
                                <a className="nav-link" href="/contact">
                                    <i className="bi bi-people-fill me-2" />
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item rounded">
                                <a className="nav-link" href="/login">
                                    <i className="bi bi-people-fill me-2" />
                                    Login
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar;

import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [mode, setMode] = useState('dark');
    const togglerMode = () => {
      if (mode === 'dark') {
        setMode('light')
        document.body.style.backgroundColor = 'black';
      }
      else {
        setMode('dark')
        document.body.style.backgroundColor = 'white';
      }
    }
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
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <i className="bi bi-house-fill me-2" />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link" to="/about">
                                    <i className="bi bi-people-fill me-2" />
                                    About
                                </Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link className="nav-link" to="/contact">
                                    <i className="bi bi-people-fill me-2" />
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item dropdown rounded">

                                <Link className="nav-link dropdown-toggle" id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false" to="/Profile">
                                    <i className="bi bi-people-fill me-2" />
                                    Profile
                                </Link>

                                <ul
                                    className="dropdown-menu dropdown-menu-end bg-dark"
                                    aria-labelledby="navbarDropdown"

                                >
                                    <li>
                                        <Link className="nav-link nav-item dropdown-item bg-dark " to="/Account">
                                            <i className="bi bi-people-fill me-2" />
                                            Account
                                        </Link>

                                    </li>
                                    <li>
                                        <Link className="nav-link nav-item dropdown-item bg-dark" onClick={togglerMode}>
                                            <i className="bi bi-people-fill me-2" />
                                            {mode} mode
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link nav-item dropdown-item bg-dark"  to="/login">
                                            <i className="bi bi-person-fill me-2" />
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

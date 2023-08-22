import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../store/action/user.action';
import './navbar.css';

const Navbar = () => {

    const loginUser = useSelector((u) => u.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {

        const st = window.confirm("Do you want logout");
        if (st) {
            dispatch(clearCurrentUser());
            navigate("/login")
        }

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning mynav">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/"><i class="fa-solid fa-building-columns"></i>CoinBank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            loginUser &&

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/user/uhome" className="nav-link active" > Home</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account Info
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/user/viewProfile">View Profile</Link></li>
                                        <li><Link class="dropdown-item" to="/user/changePassword">Change Password</Link></li>
                                        <li><hr class="dropdown-divider" /></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to="/user/sendmoney" className="nav-link active" > Send Money</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/user/allTransaction" className="nav-link active" > Transaction</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/user/balance" className="nav-link active" > Balance</Link>
                                </li>
                            </ul>
                        }
                        {
                            !loginUser && <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                {/* <li className="nav-item">
                                    <Link to="netbanking" className="nav-link active" > Wallet</Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link to="login" className="nav-link active" ><i className="fa-solid fa-right-to-bracket"></i> Logout</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="register" className="nav-link active"> Register</Link>
                                </li>
                            </ul>
                        }



                        {
                            loginUser && <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                {/* <li className="nav-item">
                                    <Link to="user/appliedJob" className="nav-link active"><i class="fa-solid fa-list"></i> Applied Jobs</Link>
                                </li> */}

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-circle-user"></i> {loginUser.firstName}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" onClick={() => logout()}>logout</a></li>

                                    </ul>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

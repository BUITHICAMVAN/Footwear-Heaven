import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">Cybersoft <span className="visually-hidden">(current)</span></a>
                    </li>
                    <form className="d-flex my-2 my-lg-0 align-items-center">
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                        <button className="btn btn-outline-success my-2 my-sm-0 border-0 text-white" type="submit">
                            Search
                        </button>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i>(1)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <NavLink to="login" className={"link-style"}>Login</NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <NavLink to="register" className={"link-style"}>Register</NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <NavLink to="profile" className={"link-style"}>Profile</NavLink>
                            </a>
                        </li>
                    </form>
                </ul>
            </div>
        </nav>
    )
}

export default Header

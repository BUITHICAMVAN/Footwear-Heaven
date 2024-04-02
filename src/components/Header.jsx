import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Search from "../pages/search/Search";
const Header = () => {
  const { arrProductCart } = useSelector((state) => state.productCartReducer);
  if (arrProductCart) console.log(arrProductCart);
  const navigate = useNavigate()

    // Authentication functions
    const isAuthenticated = () => {
        return (localStorage.getItem('token') && localStorage.getItem('user_login')) !== null;
    };

    const logout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user_login');
        // Redirect to login page
        navigate('/login');
    };
  
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Shoes Shop
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
         <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {isAuthenticated() && (
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active text-white"
                                    to="/"
                                    aria-current="page"
                                >
                                    Trang chủ
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                        )}
                    </ul>
          <Search />
          <NavLink
            to="/cart"
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <i className="fa fa-cart-plus"></i> (
            {arrProductCart?.reduce((total, prod) => {
              return (total += prod.quantity);
            }, 0)}
            )
          </NavLink>
  <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {!isAuthenticated() && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/login">
                                        Đăng nhập
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/register">
                                        Đăng ký
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {isAuthenticated() && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="/profile">
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link text-white" onClick={logout}>
                                        Đăng xuất
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
        </div>
      </div>
    </nav>
  );
};
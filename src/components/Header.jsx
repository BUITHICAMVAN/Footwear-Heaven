import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { product } = useSelector((state) => state.productReducer);
  if (product) console.log(product);
  
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
            {/* <li className="nav-item">
              <NavLink className="nav-link text-white" to="#">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item text-white" to="#">
                  Action 1
                </NavLink>
                <NavLink className="dropdown-item text-white" to="#">
                  Action 2
                </NavLink>
              </div>
            </li> */}
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>

          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <NavLink
            to="/cart"
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <i className="fa fa-cart-plus"></i> (
            {/* {this.props.stateCart.reduce((total, prod) => {
              return (total += prod.quantity);
            }, 0)} */}
            )
          </NavLink>
        </div>
      </div>
    </nav>

  );
};

export default Header;

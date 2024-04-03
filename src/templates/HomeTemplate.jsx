// rafce
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ResponsiveItem } from "./ResponsiveItem";
import FooterMobile from "../components/FooterMobile";

// tach file ra cung dc nhung it qua nen de day luon
const FooterDesktop = (
  <div className="p-3 text-center bg-dark text-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 custom__footer">
          <h3>GET HELP</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Nike</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 custom__footer">
          <h3>SUPPORT</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 custom__footer">
          <h3>REGISTER</h3>
          <ul>
            <li>
              <a href="#">register</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
                     </ul>
        </div>
      </div>
    </div>
  </div>
);

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <div className="content" style={{ minHeight: 650, marginBottom: 100 }}>
        <Outlet />
      </div>
      <ResponsiveItem
        component={FooterDesktop}
        mobileComponent={<FooterMobile />}
      />
    </div>
  );
};

export default HomeTemplate;

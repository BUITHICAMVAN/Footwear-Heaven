import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "./assets/css/main.css";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeTemplate from "./templates/HomeTemplate";
import { ResponsiveItem } from "./templates/ResponsiveItem";
import HomePage from "./pages/home/HomePage";
import HomeResponsivePage from "./pages/home/HomeResponsivePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import SearchPage from "./pages/search/SearchPage";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route
            element={
              <ResponsiveItem
                component={<HomePage />}
                mobileComponent={<HomeResponsivePage />}
              />
            }
            index
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Details />}></Route>
          </Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="Product" element={<SearchPage />}>
            {/* <Route path=":keyword" element={<SearchPage />}></Route> */}
          </Route>
          {/* /product?keyword=${searchTerm} */}
        </Route>
      </Routes>
    </Provider>
  </HistoryRouter>
);

import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../static/images/logo.png";
import "./Header.scss";

import CartWrapper from "../Cart/CartWrapper";
import useProduct from "../../../utilities/useProduct";

const Header = () => {
  const { onCategoryClick } = useProduct();

  return (
    <header className="header">
      <div className="header__sub-container">
        <Link to="/">
          <img src={Logo} className="logo-image" />
        </Link>
        <nav className="header__sub-container__nav-items">
          <Link to="/" className="header__sub-container__nav-items__link">
            Home
          </Link>
          <Link
            to="/products"
            className="header__sub-container__nav-items__link"
            onClick={() => onCategoryClick()}
          >
            Products
          </Link>
        </nav>
        <div className="header__sub-container__nav-wrapper">
          <nav className="header__sub-container__nav-wrapper__login">
            <Link
              to="/signin"
              className="header__sub-container__nav-wrapper__login__link"
            >
              SignIn
            </Link>
            <Link
              to="/register"
              className="header__sub-container__nav-wrapper__login__link"
            >
              Register
            </Link>
          </nav>
            <CartWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;

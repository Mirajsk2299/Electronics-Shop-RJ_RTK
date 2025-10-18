import React, { useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/components.css";
import Electro from "../assets/electro.png";
import { WishlistContext } from "../context/WishlistContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { ButtonContext } from "../context/ButtonContext";

const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(ButtonContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();
  const location = useLocation();

  const handleredirection = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      e.target.value = "";
    }
  };

  const isHome = location.pathname === "/";

  return (
    <div className="nav-box">
      <div className="upper-box">
        <div className="app-name">
          <img src={Electro} alt="Logo" className="logo-icon" />
          <p className="name-txt-para">
            <Link to="/">
              <span className="name-txt"> Electro</span>Mart
            </Link>
          </p>
        </div>

        <div className="search-container">
          <form className="srch-inp">
            <input placeholder="Search..." />
            <button>Search</button>
          </form>
        </div>

        <div className="contact-box">
          <div className="cnt-left">
            <div className="contact-icon">📞</div>
          </div>
          <div className="cnt-right">
            <p>Call To :- +91 9999675543 </p>
            <p>Email :- Info.Electro@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="lower-box">
        <div className="category-drop">
          <select className="first-select" onChange={handleredirection}>
            <option value="" hidden>
              ☰ &nbsp; Category
            </option>
            <option value="/smartphones">Smart Phones</option>
            <option value="/laptop">Laptops</option>
            <option value="/swatch">Smartwatches</option>
            <option value="#" style={{ color: "#98999bff" }}>
              Audios
            </option>
            <option value="#" style={{ color: "#98999bff" }}>
              Cameras
            </option>
            <option value="#" style={{ color: "#98999bff" }}>
              Accessories
            </option>
          </select>
        </div>

        <div className="nav-btns">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isHome && (
              <li>
                <a href="#category">Shop</a>
              </li>
            )}

            <li>
              <Link to="/hotselling">On Sale</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>

            <select className="second-select" onChange={handleredirection}>
              <option className="second-options" value="" hidden>
                Pages
              </option>
              <option value="/contact">Contact Us</option>
              <option value="/register">Register</option>
              <option value="/forgot-password">Forgot Password</option>
            </select>
          </ul>
        </div>

        <div className="nav-icons">
          <div className="icon-bg">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={regularHeart} size="2x" color="black" />
            </Link>
            <span className="wish-count">{wishlist.length}</span>
          </div>

          <div className="icon-bg">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
            </Link>
            <span className="cart-count">{totalItems}</span>
          </div>

          <div className="icon-bg">
            <Link to="/login">
              <FontAwesomeIcon
                icon={faRightToBracket}
                size="2x"
                color="black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

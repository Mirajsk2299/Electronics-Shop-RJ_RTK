import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components.css";
import { Link } from "react-router-dom";
import Electro from "../assets/electro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"; // 👈 import login icon
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
            <a href="/">
              <span className="name-txt"> Electro</span>Mart
            </a>
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
            <option value="/swatch">Smartwatchs</option>
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
              <a href="/Hotselling">On Sale</a>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <select className="second-select" onChange={handleredirection}>
              <option className="second-options" value="" hidden>
                Pages
              </option>
              <option value="/contact ">Contact Us</option>
              <option value="/register">Register</option>
              <option value="/Forgotpass">Forgot Password</option>
            </select>
          </ul>
        </div>

        <div className="nav-icons">
          <div className="icon-bg">
            <a href="/wishlist">
              <FontAwesomeIcon icon={regularHeart} size="2x" color="black" />
            </a>
            <span className="wish-count">3</span>
          </div>

          <div className="icon-bg">
            <a href="/cart">
              <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
            </a>

            <span className="cart-count">3</span>
          </div>

          <div className="icon-bg">
            <a href="/login">
              <FontAwesomeIcon
                icon={faRightToBracket}
                size="2x"
                color="black"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

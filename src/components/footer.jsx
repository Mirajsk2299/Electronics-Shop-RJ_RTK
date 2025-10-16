import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-mainbox">
      <hr
        style={{
          border: "none",
          height: "1.5px",
          backgroundColor: "#000000ff",
          margin: "10px 0",
        }}
      />
      <div className="footer-txt">
        <div className="footer-intro">
          <h2>ElectroMart</h2>
          <p>
            Welcome to our electronics store, your trusted and reliable
            destination for discovering the latest, most innovative, and
            high-quality gadgets designed to make your everyday life smarter,
            easier, and more connected.
          </p>
        </div>
        <div className="footer-intro">
          <h2>More About Store </h2>
          <p>Multiple Branches</p>
          <p>Take Franchise</p>
          <p>Scheduled Offers</p>
          <p>FAQ</p>
        </div>

        <div className="footer-intro">
          <h2>Connect With US</h2>
          <div className="footer-icons">
            <div className="one-icon">
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2x"
                  color="#1e1e1fff"
                />
              </a>
            </div>
            <div className="one-icon">
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="#1e1e1fff"
                />
              </a>
            </div>

            <div className="one-icon">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1e1e1fff" />
              </a>
            </div>
          </div>

          <div className="footer-btn">
            <button>Email Us</button>
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "none",
          height: "1.5px",
          backgroundColor: "#000000ff",
          margin: "10px 0",
        }}
      />

      <div className="last-txt">
        <p>
          Created with ❤️ by <span className="love-spaan">Miraj Shaikh</span>
        </p>
        <p>
          Copyright © 2025 – All Rights Reserved, But feel free to get inspired
          !
        </p>
      </div>
    </div>
  );
};

export default Footer;

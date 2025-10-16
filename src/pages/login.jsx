import React from "react";
import "../styles/pages.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const directforgot = () => {
    navigate("/forgotpass"); // your page route
  };

  const directregister = () => {
    navigate("/register"); // your page route
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="extra-links">
          <button type="button" className="link-btn" onClick={directforgot}>
            Forgot Password?
          </button>
          <button
            type="button"
            className="link-btn register-btn"
            onClick={directregister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="back-link">
          <Link to="/login">Back to Login</Link>
          {/* <a href="/login">Back to Login</a> */}
        </div>
      </div>
    </div>
  );
};

export default Register;

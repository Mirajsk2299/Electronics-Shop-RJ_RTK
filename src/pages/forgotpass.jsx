import React from "react";

const Forgotpass = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <p className="forgot-text">
          Enter your registered email to receive a password reset link.
        </p>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="reset-btn">
            Send Reset Link
          </button>
        </form>

        <div className="back-link">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;

import React from "react";
import "../styles/components.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="upper-txt">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-frm">
        <form action="#" method="post">
          <div className="inp-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="inp-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="inp-box">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

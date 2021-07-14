import React from "react";
import { Link } from "react-router-dom";
import "./style/loginPage.scss";

export const LoginPage = () => {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <div id="email-field">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>

        <div id="password-field">
          <label htmlFor="email">password</label>
          <input type="password" />
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

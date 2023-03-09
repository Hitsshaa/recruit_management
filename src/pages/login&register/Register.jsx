import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div class="account-page">
      <div class="main-wrapper">
        <div class="account-content">
          <div class="container">
            <div class="account-logo">
              <a href="admin-dashboard.html">
                <img src="assets/img/logo.png" alt="Dreamguy's Technologies" />
              </a>
            </div>

            <div class="account-box">
              <div class="account-wrapper">
                <h3 class="account-title">Register</h3>
                <p class="account-subtitle">
                  Welcome to Recruitment Management System
                </p>

                <form action="admin-dashboard.html">
                  <div class="form-group">
                    <label>
                      Email<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label>
                      Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="form-group">
                    <label>
                      Repeat Password<span class="mandatory">*</span>
                    </label>
                    <input class="form-control" type="password" />
                  </div>
                  <div class="form-group text-center">
                    <button class="btn btn-primary account-btn" type="submit">
                      Register
                    </button>
                  </div>
                  <div class="account-footer">
                    <p>
                      Already have an account? <Link to="/">login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <a href="jobs-dashboard.html">
                <img
                  src="assets/img/logo.png"
                  alt="ThinkCore Technologies Private Limited"
                />
              </a>
            </div>

            <div className="account-box">
              <div className="account-wrapper">
                <section class="page_404">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                          <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>
                          </div>

                          <div class="contant_box_404">
                            <h3 class="h2">Look like you're lost</h3>

                            <p>the page you are looking for not avaible!</p>

                            <Link to="/"> Go to Login</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;

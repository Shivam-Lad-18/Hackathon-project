import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <>
      <div className="section">
          <div className="box-1">
            <div
              className="row justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div
                  className="section pb-5 pt-5 pt-sm-2 text-center"
                >
                  <h6>
                    <span className="login">
                      Log In
                    </span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  /> 
                  <label for="reg-log"></label>
                  <h6>
                    <span className="signup">
                      Sign Up
                    </span>
                  </h6>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3" id="name">
                              Log In
                            </h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Email"
                              /> 
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="none"
                              /> 
                            </div> 
                            <a href="#" className="btn mt-4">
                              Login
                            </a>
                            <p className="mb-0 mt-4 text-center">
                               
                              <a href="#0" className="link">
                                Forgot your password?
                              </a> 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3" id="name">
                              Sign Up
                            </h4>
                            <div className="form-group">
                               
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autocomplete="none"
                              /> 
                            </div>
                            <div className="form-group mt-2">
                               
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="none"
                              /> 
                            </div>
                            <div className="form-group mt-2">
                               
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="none"
                              /> 
                            </div> 
                            <a href="#" className="btn mt-4">
                              Signup
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg p-0 navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={require("./LOGO1.png")}
              alt=""
              width="50"
              height="45"
              className="mx-2"
            />
            ClamMinds
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <a class="nav-link active" href="#">
                Login
              </a>
              <a class="nav-link active" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-1">
        <div className="text1">
          <h1 className="text-center">Mental Health</h1>
          <h2 className="text-center">is a Priority</h2>
          <ul>
            <li>Assess your sleep, anxiety, stress & mood. </li>
            <li>Find out which areas you could improve.</li>
            <li> Get resources to support you.</li>
          </ul>
        </div>
      <div className="image">
        <img src={require("./child.png")} height="530px"/>
      </div>
      </div>
      <div className="buttons text-center">
        <div className="rect">
            <h1>Test</h1>
            <p>Take a test to check ur mental health</p>
            <button className="btn"> Start </button>
        </div>
        <div className="rect">
            <h1>Signs & Symptoms</h1>
            <p>Check sign and symptoms of ur child</p>
            <button className="btn"> Start </button>
        </div>
        <div className="rect">
            <h1>Mental health Problems</h1>
            <p>Take a test to check ur mental health</p>
            <button className="btn"> Start </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;

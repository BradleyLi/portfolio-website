import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span>
              {" "}
              Hello, I'M <span className="highlighted-text">Bradley Li</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typewriter
                  options={{
                    strings: ["Enthusiastic Dev", "Full stack Dev"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Looking for new grad or junior{" "}
                <span className="profile-role-highlight">
                  <b>software developer</b>
                </span>{" "}
                opportunities
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Resume_BradleyLi.pdf" download="Resume_BradleyLi.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

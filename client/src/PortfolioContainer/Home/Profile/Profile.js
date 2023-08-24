import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  // const [typeEffect] = useTypewriter({
  //   words: [
  //     "Enthusiastic Dev",
  //     "Full stack Dev",
  //     "Mern stack Dev",
  //     "React/React Native Dev",
  //   ],
  //   loop: {},
  //   typeSpeed: 50,
  // });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instgram-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div> */}

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
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                /> */}
                {/* {typeEffect} */}
                {/* <Typed
                  strings={[
                    "Enthusiastic Dev",
                    "Full stack Dev",
                    "Mern stack Dev",
                    "React/React Native Dev",
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  loop
                /> */}
                <Typewriter
                  options={{
                    strings: [
                      "Enthusiastic Dev",
                      "Full stack Dev",
                      "Mern stack Dev",
                      "React/React Native Dev",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Looking for my first{" "}
                <span className="profile-role-highlight">
                  <b>full stack developer intern/co-op</b>
                </span>{" "}
                opportunity
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
            <a href="Resume_JizheLi.pdf" download="Resume_JizheLi.pdf">
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

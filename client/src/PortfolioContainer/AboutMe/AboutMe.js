import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      // eslint-disable-next-line
      "As a fifth-year Computer Science student at the University of Calgary approaching graduation, \
      I bring deep passion for leveraging cutting-edge technologies to architect and implement scalable \
      solutions for complex real-world challenges. My ability to thrive in dynamic, high-pressure \
      environments has consistently pushed me beyond my comfort zone, enabling continuous growth \
      and innovation. With a strong foundation in computer science fundamentals and hands-on experience \
      in both full-stack web and mobile development, I combine theoretical knowledge with practical expertise \
      to deliver impactful solutions. My drive for technical excellence and adaptability positions me as a \
      valuable contributor ready to make meaningful impact in any organization.",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile Development",
        "Building REST & GraphQL API",
        "Cloud Technology and Infrastructure (Azure, AWS)",
        "Testing and Quality Assurance (Playwright, Jest)",
        "Agile Development Practices",
        "System Architecture and Optimization",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  );
}

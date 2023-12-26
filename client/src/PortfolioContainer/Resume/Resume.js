import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  DiJavascript1,
  DiJava,
  DiCss3Full,
  DiMysql,
  DiPostgresql,
  DiReact,
  DiLinux,
} from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandPython } from "react-icons/tb";
import {
  SiExpress,
  SiAmazonaws,
  SiGithub,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Skill from "../Skill/Skill";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <div className="heading-info">
            <span>{props.heading ? props.heading : ""}</span>
            {props.projectLink ? (
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-open">
                  Open
                  <FaExternalLinkAlt className="link-icon" />
                </button>
              </a>
            ) : (
              <div></div>
            )}

            {props.gitHubLink ? (
              <a
                href={props.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-github">
                  GitHub
                  <FaGithub className="link-icon" />
                </button>
              </a>
            ) : (
              <div></div>
            )}
          </div>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "experience.svg" },
    { label: "Technical Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const languagesDetails = [
    { skill: "JavaScript", icon: <DiJavascript1 /> },
    { skill: "NodeJS", icon: <FaNodeJs /> },
    { skill: "Java", icon: <DiJava /> },
    { skill: "Python", icon: <TbBrandPython /> },
    { skill: "C", icon: <SiC /> },
    { skill: "C++", icon: <SiCplusplus /> },
    { skill: "HTML", icon: <AiOutlineHtml5 /> },
    { skill: "CSS", icon: <DiCss3Full /> },
    { skill: "MySQL", icon: <DiMysql /> },
    { skill: "PosgrelSQL", icon: <DiPostgresql /> },
  ];

  const frameworksDetails = [
    { skill: "React", icon: <DiReact /> },
    { skill: "ExpressJS", icon: <SiExpress /> },
  ];

  const toolsDetails = [
    { skill: "AWS", icon: <SiAmazonaws /> },
    { skill: "Linux", icon: <DiLinux /> },
    { skill: "Git/GitHub", icon: <SiGithub /> },
  ];

  const projectsDetails = [
    {
      title: "StudyHub - Chatroom App",
      projectLink: "https://uofc-study-hub.vercel.app/",
      gitHubLink: "https://github.com/zhifanl/UofC-Study-Hub",
      duration: { fromDate: "September 2023", toDate: "December 2023" },
      description:
        // eslint-disable-next-line no-multi-str
        "Developed a real-time, multi-user chat application; utilized Socket.io for live messaging, integrated a Node.js backend with \
        Express for robust service handling, and utilized MongoDB for efficient data storage; developed UI prototypes using Figma.",
      subHeading:
        "React.js, Figma, Express, REST API, Postman, MongoDB Atlas, Mongoose, JWT, Git/GitHub, AWS",
    },
    {
      title: "MeetFood – Short Video Platform",
      projectLink:
        "https://apps.apple.com/ca/app/meetfood-explore-reviews/id1603020687",
      duration: { fromDate: "May 2023", toDate: "August 2023" },
      description:
        // eslint-disable-next-line no-multi-str
        "Collaborated with cross-functional teams to develop and integrate user and video RESTful APIs, crafted responsive UI\
        components, and contributed to the full-stack development and deployment of the application.",
      subHeading:
        "Technologies Used: React Native, Typescript, Express, MongoDB, Mongoose, JWT, AWS S3, Elastic Beanstalk, Cognito",
    },
    {
      title: "Course Outline Parser",
      projectLink: "https://lifeline.techstartucalgary.com/",
      gitHubLink: "https://github.com/techstartucalgary/lifeline",
      duration: { fromDate: "October 2022", toDate: "April 2023" },
      description:
        "Powered by gpt-3.5-turbo, Lifeline compiles your deadlines from your course outlines 📄, into calendar reminders ⏰ and a spreadsheet to-do list 📈.",
      subHeading:
        "Technologies Used: ReactJS, Tailwind CSS, TypeScript, Python, Flask, Git/GitHub",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Calgary, AB, Canada"}
        subHeading={"Bachelor of Science, Computer of Science"}
        fromDate={"09/2020"}
        toDate={"Current"}
      />

      <ResumeHeading
        heading={"Queen Elizabeth High School, AB, Canada "}
        subHeading={"High School Diploma with Distinction"}
        fromDate={"09/2017"}
        toDate={"06/2020"}
      />
    </div>,

    /* EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Mobile Application Developer Intern"}
          subHeading={"Knapsack-X"}
          fromDate={"January 2024"}
          toDate={"Current"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Design and develop mobile applications for
            [iOS/Android/cross-platform] using React Native and other relevant
            technologies.
          </span>
          <br />
          <span className="resume-description-text">
            - Engage in various stages of the mobile gaming app development
            lifecycle, from requirement analysis and design to implementation,
            testing, and deployment.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Enhance the codebase, implement features, and fix bugs while
            adhering to coding standards and best practices. - Ensure new
            features align with design specifications, conducting comprehensive
            testing to ensure functionality and performance in mobile gaming
            experiences.
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"Full Stack Developer Intern"}
          subHeading={"Joblogic-X Corporation"}
          fromDate={"May 2023"}
          toDate={"August 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a short-video mobile app called MeetFood by effectively
            working with other developers, designers, and architects to
            implement UX/UI, frontend & backend functionalities, document user
            requirements and troubleshoot issues.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented user and video RESTful APIs, developed prototypes and
            user interface components, and aided in the application's deployment
            on AWS to achieve a resilient and scalable deployment.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div key="programming-skills">
      <div className="technical-skills-section">
        <div>
          <span>Languages:</span>
        </div>
        <div className="technical-skills-container">
          {languagesDetails.map((skill, index) => (
            <Skill title={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
      <div className="technical-skills-section">
        <div>
          <span>Frameworks/Libraries:</span>
        </div>
        <div className="technical-skills-container">
          {frameworksDetails.map((skill, index) => (
            <Skill title={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
      <div className="technical-skills-section">
        <div>
          <span>Tools:</span>
        </div>
        <div className="technical-skills-container">
          {toolsDetails.map((skill, index) => (
            <Skill title={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          projectLink={projectsDetails.projectLink}
          gitHubLink={projectsDetails.gitHubLink}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, I also work as a part-time tutor to teach students problem-solving skills on maths and computer science, simply because lifting people up from struggles gives me a lot of joy ."
      />
      <ResumeHeading
        heading="Reading"
        description="As a lifelong learner, it's always a pleasure to seek for more knowledge and wisdom by gaining from other people's perspective and experience."
      />
      <ResumeHeading
        heading="Sports"
        description="I've always been an athelete myself and engaged into a wide variety of sports such as rock climbing, ice skating, squash, workout and so on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 545;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

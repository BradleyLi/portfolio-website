import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  DiJavascript,
  DiNodejs,
  DiJava,
  DiPython,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPostgresql,
  DiReact,
  DiLinux,
} from "react-icons/di";
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
    { skill: "JavaScript", icon: <DiJavascript /> },
    { skill: "NodeJS", icon: <DiNodejs /> },
    { skill: "Java", icon: <DiJava /> },
    { skill: "Python", icon: <DiPython /> },
    { skill: "C", icon: <SiC /> },
    { skill: "C++", icon: <SiCplusplus /> },
    { skill: "HTML", icon: <DiHtml5 /> },
    { skill: "CSS", icon: <DiCss3 /> },
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
      title: "Nature Tour Explorer",
      gitHubLink: "https://github.com/BradleyLi/Nature-Tour-Explorer",
      duration: { fromDate: "July 2023", toDate: "Current" },
      description:
        "Powered by the Express framework and fortified with robust JWT security mechanisms, our platform empowers users to effortlessly discover and book a wide array of exciting touring options within seconds. Additionally, our integration of Stripe webhooks ensures a seamless and secure payment experience, making the entire process convenient and worry-free.",
      subHeading:
        "Technologies Used: NodeJS, Express, REST API, MongoDB Atlas, Mongoose, JWT, Git/GitHub, Heroku",
    },
    {
      title: "Personal Portfolio Website",
      projectLink: "https://www.bradleyli.dev",
      gitHubLink: "https://github.com/BradleyLi/portfolio-website",
      duration: { fromDate: "May 2023", toDate: "June 2023" },
      description:
        "Built with React and Express, my personal portfolio website showcases my personal experience and projects at one place.",
      subHeading:
        "Technologies Used: ReactJS, Bootstrap, NodeJS, Express, Git/GitHub, Heroku",
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
    {
      title: "Expense Tracker",
      projectLink:
        "http://expense-tracker-bradleyli.s3-website-us-west-2.amazonaws.com/",
      gitHubLink: "https://github.com/BradleyLi/SmartSpend-ExpenseTracker",
      duration: { fromDate: "August 2022", toDate: "October 2023" },
      description:
        "Built with ReactJS, this intuitive front-end application aims at simplifying expense tracking for users.",
      subHeading:
        "Technologies Used: React, JavaScript, HTML, CSS, AWS S3, Git/GitHub",
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
          heading={"Computer Science Teaching Assistant"}
          subHeading={"University of Calgary"}
          fromDate={"May 2023"}
          toDate={"July 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Guided a diverse group of over 20 students in comprehensive,
            hands-on coding practice sessions twice weekly, fostering a deep
            understanding different programming paradigms.
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborated closely with the course instructor in a fast-pacing
            environment and multitasked to design impactful assignments and exam
            materials, actively contributing to the ongoing development and
            improvement of the course.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Utilized strong communication skills to facilitate group
            discussions and encourage active participation in lectures.
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"Frontend Developer"}
          subHeading={"Tech Start UCalgary"}
          fromDate={"October 2022"}
          toDate={"April 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Collaborated with a team of seven people using Agile methodology
            to develop a full-stack deadline-managing application.
          </span>
          <br />
          <span className="resume-description-text">
            - Contributed primarily to the front-end development and worked
            closely with teammates in design, code reviews and testing.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Communicated clearly and effective with all members of the team
            and ensured the production of high-quality code.
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

import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  DiNodejs,
  DiPython,
  DiSwift,
  DiJava,
  DiReact,
} from "react-icons/di";
import { SiTypescript, SiJavascript, SiJest } from "react-icons/si";
import {
  SiExpress,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiC,
  SiCplusplus,
  SiApachekafka,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { GrGraphQl } from "react-icons/gr";
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
    { skill: "TypeScript", icon: <SiTypescript /> },
    { skill: "JavaScript", icon: <SiJavascript /> },
    { skill: "NodeJS", icon: <DiNodejs /> },
    { skill: "Python", icon: <DiPython /> },
    { skill: "Swift", icon: <DiSwift /> },
    { skill: "Java", icon: <DiJava /> },
    { skill: "C", icon: <SiC /> },
    { skill: "C++", icon: <SiCplusplus /> },
  ];

  const frameworksDetails = [
    { skill: "ReactJS", icon: <DiReact /> },
    { skill: "ExpressJS", icon: <SiExpress /> },
    { skill: "Jest", icon: <SiJest /> },
    { skill: "GraphQL", icon: <GrGraphQl /> },
  ];

  const toolsDetails = [
    { skill: "Azure", icon: <VscAzure /> },
    { skill: "AWS", icon: <SiAmazonaws /> },
    { skill: "Docker", icon: <SiDocker /> },
    { skill: "Kubernetes", icon: <SiKubernetes /> },
    { skill: "Apache Kafka", icon: <SiApachekafka /> },
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
        subHeading={"Bachelor of Science, Major in Computer of Science"}
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
          heading={"Full Stack Engineer Intern"}
          subHeading={"Alberta Energy Regulator"}
          fromDate={"Semtember 2024"}
          toDate={"Current"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked closely with senior engineers to engineer and deploy
            scalable microservices architecture for OneStop2.0 platform,
            contributing to system modernization initiatives.
          </span>
        </div>
        <ResumeHeading
          heading={"Software Engineer in Test Intern"}
          subHeading={"Alberta Energy Regulator"}
          fromDate={"May 2024"}
          toDate={"August 2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed and refactored 100+ automated functional and API test
            cases using Playwright while performing manual regression testing
            within each sprint before each UAT and prod release, identifying and
            reporting 30+ defects.
          </span>
        </div>
        <ResumeHeading
          heading={"Mobile Application Developer Intern"}
          subHeading={"Knapsack-X"}
          fromDate={"January 2024"}
          toDate={"April 2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed and implemented scalable mobile solutions, integrating
            Firebase for data synchronization and user authentication.
          </span>
        </div>
        <ResumeHeading
          heading={"Computer Science Teaching Assistant"}
          subHeading={"University of Calgary"}
          fromDate={"May 2023"}
          toDate={"June 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Directed bi-weekly coding sessions for 20+ students, achieving
            100% assignment completion rate through interactive problem-solving
            and targeted code reviews
          </span>
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

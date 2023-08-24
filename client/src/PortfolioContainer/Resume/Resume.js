import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
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
          <span>{props.heading ? props.heading : ""}</span>
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
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "June 2023", toDate: "August 2023" },
      description:
        "A Personal Portfolio website showcasing personal experience and projects at one place.",
      subHeading:
        "Technologies Used: React JS, Bootstrap, NodeJS, Express, Git/GitHub, Heroku",
    },
    {
      title: "Meetfood - Social Media && E-commerce platform for food",
      duration: { fromDate: "September 2022", toDate: "January 2023" },
      description:
        "An iOS app designed for users to share experiences and creative content on food using a variety of formats including photos, text, videos.",
      subHeading:
        "Technologies Used: React Native, TypeScript, NodeJS, ExpressJS, MongoDB, Mongoose, JWT, AWS, Apifox",
    },
    {
      title: "Course Outline Parser && Deadline Tracker",
      duration: { fromDate: "October 2022", toDate: "April 2023" },
      description:
        "A course outline Parser that uses gpt-3.5-turbo to parse university course outlines and a deadline tracker to help keep track of the deadlines.",
      subHeading:
        "Technologies Used: ReactJS, Tailwind CSS, TypeScript, Python, Flask, ChatGPT API, AWS, Git/GitHub",
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
          heading={"Software Engineer Intern"}
          subHeading={"Joblogic-X Corporation"}
          fromDate={"September 2022"}
          toDate={"January 2023"}
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
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
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

import React from "react";
import "./Skill.css";

export default function Skill(props) {
  return (
    <div className="skill-box">
      <div className="skill-icon">{props.icon}</div>
      <div className="skill-title">{props.title}</div>
    </div>
  );
}

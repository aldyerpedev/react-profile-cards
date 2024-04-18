import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML & CSS",
    level: "intermediate",
    color: "#ff3377",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#33ff77",
  },
  {
    skill: "PHP",
    level: "intermediate",
    color: "#ff33ff",
  },
  {
    skill: "MySQL",
    level: "intermediate",
    color: "#cc69ff",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#10ff99",
  },
  {
    skill: "NodeJS",
    level: "advanced",
    color: "#befa99",
  },
  {
    skill: "ReactJS",
    level: "advanced",
    color: "#cafa00",
  },
  {
    skill: "Laravel",
    level: "advanced",
    color: "#dada11",
  },
];

function App() {
  return (
    <div>
      <h1 className="main-title">ReactJS Profile Cards by Aldy Rizky Putra</h1>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images/aldyrp.png" alt="Aldy Images" />;
}

function Intro() {
  return (
    <div>
      <h2 className="name">Aldy Rizky Putra</h2>
      <p className="description">
        Freelance Front End Developer that always try to learn any programming
        language, and frameworks, especially for web development. IT Addict
        since Elementary School. Now, learning Laravel. Stated in Tangerang,
        Banten, Indonesia. Contact me by WA on +62-819-0618-1088 if you want to
        hire me as your professional skilled person. Thank You.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "👦"}
        {level === "intermediate" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

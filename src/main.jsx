import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="HTML & CSS" rate="💪" color="#ff3377" />
      <Skill skill="JavaScript" rate="💪" color="#33ff77" />
      <Skill skill="PHP" rate="💪" color="#ff33ff" />
      <Skill skill="MySQL" rate="💪" color="#cc69ff" />
      <Skill skill="Git" rate="💪" color="#10ff99" />
      <Skill
        skill="NodeJS"
        rate="
👦"
        color="#befa99"
      />
      <Skill
        skill="ReactJS"
        rate="
👦"
        color="#cafa00"
      />
      <Skill
        skill="Laravel"
        rate="
👦"
        color="#dada11"
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.rate}</span>
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

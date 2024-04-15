import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="main-title">ReactJS Profile Card by Aldy Rizky Putra</h1>
      <div className="container">
        <ProfileImage />
        <ProfileDetails />
        <ProfileSkills />
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <img className="profile-img" src="images/aldyrp.png" alt="Aldy Images" />
  );
}

function ProfileDetails() {
  return (
    <div className="profile-details">
      <h2>Aldy Rizky Putra</h2>
      <p>
        Freelance Front End Developer that always try to learn any programming
        language, and frameworks, especially for web development. IT Addict
        since Elementary School. Now, learning Laravel. Stated in Tangerang,
        Banten, Indonesia. Contact me by WA on +62-819-0618-1088 if you want to
        hire me as your professional skilled person. Thank You.
      </p>
    </div>
  );
}

function ProfileSkills() {
  return (
    <div className="profile-skills">
      <ul>
        <SkillsItem
          bgColor="#225577"
          txtColor="#ffffff"
          skillTitle="HTML & CSS"
          skillRate="💪"
        />
        <SkillsItem
          bgColor="#ff5757"
          txtColor="#ffffff"
          skillTitle="JavaScript"
          skillRate="💪"
        />
        <SkillsItem
          bgColor="#57ff57"
          txtColor="#000000"
          skillTitle="PHP"
          skillRate="💪"
        />
        <SkillsItem
          bgColor="#5757ff"
          txtColor="#ffffff"
          skillTitle="MySQL"
          skillRate="💪"
        />
        <SkillsItem
          bgColor="#7e8021"
          txtColor="#ffffff"
          skillTitle="ReactJS"
          skillRate="👦"
        />
        <SkillsItem
          bgColor="#339922"
          txtColor="#ffffff"
          skillTitle="Laravel"
          skillRate="👦"
        />
        <SkillsItem
          bgColor="#90ff69"
          txtColor="#000000"
          skillTitle="Git"
          skillRate="💪"
        />
      </ul>
    </div>
  );
}

function SkillsItem(props) {
  return (
    <li style={{ backgroundColor: props.bgColor, color: props.txtColor }}>
      <span>{props.skillTitle}</span>
      <span>{props.skillRate}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

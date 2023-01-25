import React from "react";
import profileimg from '../images/profile.jpeg'

export default function Profile() {
  return (
    <div className="profile-area">
      <a
        href="https://neerajiitm.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        title="Portfolio"
      >
        <img src={profileimg} alt="profile" />
      </a>
      <a
        href="https://github.com/raajeverma"
        target="_blank"
        rel="noopener noreferrer"
        title="Github Profile"
      >
        <span className="icon">
          <i class="fa-brands fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/neeraj-verma-5ba086203/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
      >
        <span className="icon">
          <i class="fa-brands fa-linkedin"></i>
        </span>
      </a>
      <a
        href="mailto: vneeraj926@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="vneeraj926@gmail.com"
      >
        <span className="icon">
          <i class="fa-regular fa-envelope"></i>
        </span>
      </a>
      <a
        href="https://github.com/raajeverma/tenzies"
        target="_blank"
        rel="noopener noreferrer"
        title="Project Code"
      >
        <span className="icon icon-code">
        <i class="fa-solid fa-code"></i>
        </span>
      </a>
    </div>
  );
};
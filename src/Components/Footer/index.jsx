import React from "react";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="update">Website Last Updated: Feb 1, 2022</div>
      <ul className="social__links">
        <li>
          <a href="https://blog.theboringschool.org">
            <i className="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a href="https://blog.theboringschool.org">
            <i className="ri-discord-line"></i>
          </a>
        </li>
        <li>
          <a href="https://blog.theboringschool.org">
            <i className="ri-twitter-line"></i>
          </a>
        </li>
        <li>
          <a href="https://blog.theboringschool.org">
            <i className="ri-medium-line"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

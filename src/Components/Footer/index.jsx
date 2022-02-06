import React from "react";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="update">Website Last Updated: Feb 1, 2022</div>
      <ul className="social__links">
        <li>
          <a
            aria-label="GitHub"
            href="https://blog.theboringschool.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill" />
          </a>
        </li>
        <li>
          <a
            aria-label="Discord"
            href="https://blog.theboringschool.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-discord-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Twitter"
            href="https://blog.theboringschool.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Medium"
            href="https://blog.theboringschool.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-medium-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Telegram"
            href="https://blog.theboringschool.org"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-telegram-line" />
          </a>
        </li>
      </ul>
    </div>
  );
}

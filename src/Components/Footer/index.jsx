import React from "react";
import "remixicon/fonts/remixicon.css";
import "./styles/style.css";

export default function Footer({ lightMode }) {
  return (
    <div
      className={`footer__container ${lightMode ? "lightMode" : "darkMode"}`}
    >
      <div className={`update ${lightMode ? "lightMode" : "darkMode"}`}>
        Website Last Updated: May 17, 2022
      </div>
      <ul className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
        <li className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
          <a
            aria-label="GitHub"
            href="https://github.com/L1Playpoint"
            target="_blank"
            rel="noreferrer"
            className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <i className="ri-github-fill" />
          </a>
        </li>
        <li className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
          <a
            aria-label="Discord"
            href="https://discord.com/invite/6Uu7pEvGhE"
            target="_blank"
            rel="noreferrer"
            className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <i className="ri-discord-line" />
          </a>
        </li>
        <li className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
          <a
            aria-label="Twitter"
            href="https://twitter.com/PlaypointP2E"
            target="_blank"
            rel="noreferrer"
            className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <i className="ri-twitter-line" />
          </a>
        </li>
        <li className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
          <a
            aria-label="Medium"
            href="https://blog.playpoint.ai"
            target="_blank"
            rel="noreferrer"
            className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <i className="ri-medium-line" />
          </a>
        </li>
        <li className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}>
          <a
            aria-label="Telegram"
            href="https://t.me/+jam5SrIv4OpiOThl"
            target="_blank"
            rel="noreferrer"
            className={`social__links ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <i className="ri-telegram-line" />
          </a>
        </li>
      </ul>
    </div>
  );
}

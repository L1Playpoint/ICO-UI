import React from "react";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="update">Website Last Updated: Apr 16, 2022</div>
      <ul className="social__links">
        <li>
          <a
            aria-label="GitHub"
            href="https://github.com/L1Playpoint"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill" />
          </a>
        </li>
        <li>
          <a
            aria-label="Discord"
            href="https://discord.com/invite/6Uu7pEvGhE"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-discord-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Twitter"
            href="https://twitter.com/PlaypointP2E"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Medium"
            href="https://blog.playpoint.ai"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-medium-line" />
          </a>
        </li>
        <li>
          <a
            aria-label="Telegram"
            href="https://t.me/+jam5SrIv4OpiOThl"
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

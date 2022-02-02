import "./styles/style.css";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">PLAYPOINT</div>

      <div className="navbar__links">
        <div className="navbar__link">
          <a href="/">About</a>
        </div>
        <div className="navbar__link">
          <a href="/">Token Sale</a>
        </div>
        <div className="navbar__link">
          <a href="/">Roadmap</a>
        </div>
        <div className="navbar__link">
          <a href="/">Documents</a>
        </div>
        <div className="navbar__link">
          <a href="/">Team</a>
        </div>
        <div className="navbar__link">
          <a href="/">Contact</a>
        </div>
      </div>

        <div className="navbar__app">
          Launch App
        </div>
    </div>
  );
}

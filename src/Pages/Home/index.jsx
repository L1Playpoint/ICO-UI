import "./styles/style.css";

import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../Components/Navbar";

import LandingImage from "../../Assets/Landing1.png";
import AboutBanner from "../../Assets/About.png";
import AboutBanner1 from "../../Assets/About1.png";
import BuyMe from "../../Assets/BuyMe.mp4";
// import GamesBanner from "../../Assets/GamesBanner.png";
// import AboutVideo from "../../Assets/Landing.mp4";

export default function Home() {
  return (
    <div className="home__container">
      <Helmet>
        <title>Playpoint | Decentralized Betting Platform</title>
      </Helmet>

      <Navbar />

      {/**
       * @section => landing
       */}
      <img
        src={LandingImage}
        alt="The City of Winners"
        className="home__container__landing"
      />

      {/**
       * @section => about
       */}
      <div className="home__container__about">
        <div className="home__container__about__content">
          <div className="description">
            <h1 className="absolute__title">About_</h1>
            <div className="title">
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <h1 className="stroke">Solor dor amir set</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo inventore laudantium ipsum quidem. Atque nam numquam ab
              perspiciatis, quod accusantium, ipsam pariatur repellat esse
              accusamus quam id dolorem eius?
            </p>
          </div>
          <div className="icon">
            <img src={AboutBanner} alt="" />
            <img src={AboutBanner1} alt="" className="absolute__icon" />
          </div>
        </div>
      </div>

      {/**
       * @section => token sale
       */}
      <div className="home__container__tokenSale">
        <div className="title">
          <h1>Token Sale_</h1>
        </div>

        <div className="content">
          <div className="content__video">
            <video src={BuyMe} autoPlay loop muted />
          </div>

          <div className="content__description">
            <h1 className="stroke__colored">
              Lorem Ipsum,
            </h1>
            <h1 className="heading">
              Dolor sit amet!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo inventore laudantium ipsum quidem. Atque nam numquam ab
              perspiciatis, quod accusantium, ipsam pariatur repellat esse
              accusamus quam id dolorem eius?
            </p>

            <ul>
              <li>
                  <b>Soft Cap:</b><span> 12345678 PPT</span>
              </li>
              <li>
                  <b>Crowdsale:</b><span> 12345678 PPT</span>
              </li>
              <li>
                  <b>Hard Cap:</b><span> 12345678 PPT</span>
              </li>
            </ul>

            <b className="marketing">
              HOLD PPT & JOIN THE JOURNEY
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./styles/style.css";

/**
 * @packages yarn registry packages
 */
import "animate.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";

/**
 * @components custom main components
 */
import Navbar from "../../Components/Navbar";
import TimelineContainer from "./components/Timeline";
import Faqs from "./components/Faqs";
import Footer from "../../Components/Footer";

/**
 * @assets custom assets
 * @dev assets must be delivered from CDN
 */
import LandingImage from "../../Assets/Landing1.png";
import AboutBanner from "../../Assets/About.png";
import AboutBanner1 from "../../Assets/About1.png";
import BuyMe from "../../Assets/BuyMe.mp4";
import IceBreaker from "../../Assets/IceBreaking.png";

// Games Images;
import Game9 from "../../Assets/Games/9.png";
import Game8 from "../../Assets/Games/8.png";
import Game7 from "../../Assets/Games/7.png";
import Game6 from "../../Assets/Games/6.png";
import Game4 from "../../Assets/Games/4.png";
import Game3 from "../../Assets/Games/3.png";
import Game2 from "../../Assets/Games/2.png";
import Game1 from "../../Assets/Games/1.png";

export default function Home() {
  // refs
  const HomeRef = React.useRef();
  const AboutRef = React.useRef();
  const TokenSaleRef = React.useRef();
  const RoadmapRef = React.useRef();
  const GalleryRef = React.useRef();
  const DocumentsRef = React.useRef();

  const refs = {
    HomeRef,
    AboutRef,
    TokenSaleRef,
    RoadmapRef,
    GalleryRef,
    DocumentsRef
  }
    
  return (
    <div className="home__container">
      <Helmet>
        <title>Playpoint | Decentralized Betting Platform</title>
      </Helmet>

      <Navbar refs={refs}/>

      {/**
       * @section => landing
       */}
      <img
      ref={HomeRef}
        src={LandingImage}
        alt="The City of Winners"
        className="home__container__landing"
      />

      {/**
       * @section => about
       */}
      <div ref={AboutRef} className="home__container__about">
        <div className="blob"></div>
        <div className="home__container__about__content">
          <div className="description">
            <h1 className="absolute__title">About_</h1>
            <div className="title">
              <h1>Lorem Ipsum Dolor Sit</h1>
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
            <img
              src={AboutBanner}
              className="animate__infinite animate__animated animate__pulse animate__slow"
              alt=""
            />
            <img src={AboutBanner1} alt="" className="absolute__icon" />
          </div>
        </div>
      </div>

      {/**
       * @section => token sale
       */}
      <div ref={TokenSaleRef} className="home__container__tokenSale">
        <div className="title">
          <h1>Token Sale_</h1>
        </div>

        <div className="content">
          <div className="content__video">
            <video src={BuyMe} autoPlay loop muted />
          </div>

          <div className="content__description">
            <h1 className="stroke__colored">Lorem Ipsum,</h1>
            <h1 className="heading">Dolor sit amet!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              explicabo inventore laudantium ipsum quidem. Atque nam numquam ab
              perspiciatis, quod accusantium, ipsam pariatur repellat esse
              accusamus quam id dolorem eius?
            </p>

            <ul>
              <li>
                <b>Token Name:</b>
                <span> Playpoint Token</span>
              </li>
              <li>
                <b>Type:</b>
                <span> BEP20</span>
              </li>
              <li>
                <b>Symbol:</b>
                <span> PPT</span>
              </li>
            </ul>

            <ul>
              <li>
                <b>Soft Cap:</b>
                <span> 12345678 PPT</span>
              </li>
              <li>
                <b>Crowdsale:</b>
                <span> 12345678 PPT</span>
              </li>
              <li>
                <b>Hard Cap:</b>
                <span> 12345678 PPT</span>
              </li>
            </ul>

            <b className="marketing">HOLD PPT & JOIN THE JOURNEY</b>
          </div>
        </div>
      </div>

      {/**
       * @section => Project Timeline or Roadmap
       */}
      <div ref={RoadmapRef} className="home__container__roadmap">
        <div className="absolute__title">
          <h1>Roadmap_</h1>
          <h1>Roadmap_</h1>
          <h1>Roadmap_</h1>
        </div>
        <h1 className="roadmap__title">Roadmap_</h1>
        <p className="top__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero modi
          corporis quae suscipit vitae nihil enim dicta nesciunt, recusandae ut
          nobis omnis harum beatae voluptatum explicabo dolores, odio possimus
          alias.
        </p>
        <TimelineContainer />
      </div>

      {/**
       * @section => Gallery
       */}
      <div ref={GalleryRef} className="home__container__gallery">
        <div className="row">
          <div className="column">
            <div className="image-box">
              <img src={Game6} alt="" />
            </div>
            <div className="image-box">
              <img src={Game9} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src={Game2} alt="" />
            </div>
            <div className="image-box">
              <img src={Game4} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src={Game1} alt="" />
            </div>
            <div className="image-box">
              <img src={Game3} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src={Game8} alt="" />
            </div>
            <div className="image-box">
              <img src={Game7} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/**
       * @section => documents
       */}
      <div ref={DocumentsRef} className="home__container__documents">
        <div className="absolute">
          <Marquee>Frequently Asked Question, Whitepaper</Marquee>
          <Marquee>Whitepaper, FAQs, Frequently Asked Question</Marquee>
        </div>
        <div className="faqs">
          <h1>Frequently Asked Questions_</h1>
          <p className="faq__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            veritatis quisquam autem totam, iusto cupiditate, blanditiis facere
            cum quaerat quibusdam doloremque dicta porro. Harum animi dolorem
            laudantium hic officiis possimus!
          </p>
          <Faqs />
        </div>
        <div className="documents__links">
          <h1>Whitepaper_</h1>

          <Button>Download_</Button>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium odio debitis magni eaque pariatur magnam incidunt
            voluptas ullam, voluptates sapiente nesciunt nemo repellendus vel
            excepturi, culpa et dolorum eveniet voluptate?
          </p>

          <img src={IceBreaker} alt="Breaking Gold" />

          <p>
            <b>Token Contract:</b> 0xfc3da4a1b6fadab364038763498457b7c0c16521cd
          </p>
          <p>
            <b>Crowdsale Contract:</b> 0xfbt88hdgb6fadab364038763498457b7c0c16521cd
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

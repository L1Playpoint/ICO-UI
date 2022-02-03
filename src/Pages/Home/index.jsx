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
    DocumentsRef,
  };

  return (
    <div className="home__container">
      <Helmet>
        <title>Playpoint | Decentralized Betting Platform</title>
      </Helmet>

      <Navbar refs={refs} />

      {/**
       * @section => landing
       */}
      <img
        ref={HomeRef}
        src={
          window.innerWidth >= 1920 ||
          (window.innerWidth <= 1920 && window.innerWidth > 992)
            ? "https://ik.imagekit.io/lexworld/Landing1.png?tr=w-1920,h-1039.340"
            : window.innerWidth <= 992 && window.innerWidth > 768
            ? "https://ik.imagekit.io/lexworld/Landing1.png?tr=w-992,h-536.641"
            : window.innerWidth <= 768 && window.innerWidth > 576
            ? "https://ik.imagekit.io/lexworld/Landing1.png?tr=w-768,h-415.734"
            : window.innerWidth <= 576
            ? "https://ik.imagekit.io/lexworld/Landing1.png?tr=w-576,h-311.797"
            : "https://ik.imagekit.io/lexworld/Landing1.png?tr=w-390,h-211.109"
        }
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
              src={
                window.innerWidth >= 1920 ||
                (window.innerWidth <= 1920 && window.innerWidth > 992)
                  ? "https://ik.imagekit.io/lexworld/About.png?tr=w-604.797,h-548.297"
                  : window.innerWidth <= 992 && window.innerWidth > 768
                  ? "https://ik.imagekit.io/lexworld/About.png?tr=w-604.797,h-548.297"
                  : window.innerWidth <= 768 && window.innerWidth > 576
                  ? "https://ik.imagekit.io/lexworld/About.png?tr=w-552.969,h-501.297"
                  : window.innerWidth <= 576
                  ? "https://ik.imagekit.io/lexworld/About.png?tr=w-414.719,h-375.969"
                  : "https://ik.imagekit.io/lexworld/About.png?tr=w-280.797,h-254.562"
              }
              className="animate__infinite animate__animated animate__pulse animate__slow"
              alt=""
            />
            <img 
            src={
                window.innerWidth >= 1920 ||
                (window.innerWidth <= 1920 && window.innerWidth > 992)
                  ? "https://ik.imagekit.io/lexworld/About1.png?tr=w-604.797,h-236.172"
                  : window.innerWidth <= 992 && window.innerWidth > 768
                  ? "https://ik.imagekit.io/lexworld/About1.png?tr=w-423.500,h-165.375"
                  : window.innerWidth <= 768 && window.innerWidth > 576
                  ? "https://ik.imagekit.io/lexworld/About1.png?tr=w-484,h-189"
                  : window.innerWidth <= 576
                  ? "https://ik.imagekit.io/lexworld/About1.png?tr=w-414.719,h-161.938"
                  : "https://ik.imagekit.io/lexworld/About1.png?tr=w-280.797,h-109.641"
              } 
              alt="" className="absolute__icon" />
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
            <video src="https://ik.imagekit.io/lexworld/BuyMe.mp4" autoPlay loop muted />
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
              <img src="https://ik.imagekit.io/lexworld/6.png" alt="" />
            </div>
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/9.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/2.png" alt="" />
            </div>
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/4.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/1.png" alt="" />
            </div>
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/3.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/8.png" alt="" />
            </div>
            <div className="image-box">
              <img src="https://ik.imagekit.io/lexworld/7.png" alt="" />
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

          <img 
          src={
            window.innerWidth >= 1920 ||
            (window.innerWidth <= 1920 && window.innerWidth > 992)
              ? "https://ik.imagekit.io/lexworld/IceBreaking.png?tr=w-824,h-397.797"
              : window.innerWidth <= 992 && window.innerWidth > 768
              ? "https://ik.imagekit.io/lexworld/IceBreaking.png?tr=w-892.812,h-431.016"
              : window.innerWidth <= 768 && window.innerWidth > 576
              ? "https://ik.imagekit.io/lexworld/IceBreaking.png?tr=w-691.188,h-333.688"
              : window.innerWidth <= 576
              ? "https://ik.imagekit.io/lexworld/IceBreaking.png?tr=w-518.391,h-250.266"
              : "https://ik.imagekit.io/lexworld/IceBreaking.png?tr=w-351,h-169.453"
          }
          alt="Breaking Gold" />

          <p className="contractAddr">
            <b>Token Contract:</b> 0xfc3da4a1b6fadab364038763498457b7c0c16521cd
          </p>
          <p className="contractAddr">
            <b>Crowdsale Contract:</b>{" "}
            0xfbt88hdgb6fadab364038763498457b7c0c16521cd
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

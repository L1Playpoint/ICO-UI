import "./styles/style.css";

/**
 * @packages yarn registry packages
 */
import "animate.css";
import React from "react";
import { Button } from "@mui/material";
import Marquee from "react-fast-marquee";
// import Popup from "reactjs-popup";
// import About from "../../Assets/About1(1).png"
// import image from "../../Assets/About1(1).png"

/**
 * @components custom main components
 */
import Navbar from "../../Components/Navbar";
import TimelineContainer from "./components/Timeline";
import Faqs from "./components/Faqs";
import Footer from "../../Components/Footer";
// import PolarChart from "./components/PolarChart";
// import BannerImage from "../../Assets/Banner.png";

function Home({ lightMode, setLightMode, handleLightMode }) {
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
    <div className={`home__container ${lightMode ? "lightMode" : "darkMode"}`}>
      <Navbar
        refs={refs}
        lightMode={lightMode}
        setLightMode={setLightMode}
        handleLightMode={handleLightMode}
      />

      {/**
       * @section => landing
       */}
      {/* <img
        ref={HomeRef}
        src="https://ik.imagekit.io/lexworld/Landing.png"
        alt="The City of Winners"
        className="home__container__landing"
        width={
          window.innerWidth >= 1920 ||
          (window.innerWidth <= 1920 && window.innerWidth > 992)
            ? "1920"
            : window.innerWidth <= 992 && window.innerWidth > 768
            ? "992"
            : window.innerWidth <= 768 && window.innerWidth > 576
            ? "768,415.734"
            : window.innerWidth <= 576
            ? "576"
            : "390"
        }
        height="auto"
      /> */}
      <img
        className="home__container__landing"
        src="https://ik.imagekit.io/pptai/mgmt_Ihyh_RANP.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652256598188"
        alt="Landing"
      />

      {/**
       * @section => about
       */}
      <div
        ref={AboutRef}
        className={`home__container__about ${
          lightMode ? "lightMode" : "darkMode"
        }`}
      >
        <div className="blob" />
        <div className="home__container__about__content">
          <div className="description">
            <h1 className="absolute__title">
              About
              <span className="animate__flash animate__slower animate__animated animate__infinite">
                _
              </span>
            </h1>
            <div className={`title `}>
              <h1 className={`${lightMode ? "lightMode" : "darkMode"}`}>
                Playpoint
              </h1>
            </div>
            <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
              is an online{" "}
              <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                Play to Earn (P2E)
              </b>{" "}
              and{" "}
              <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                prediction-pool platform
              </b>
              , based on real-time sporting events. It is supported by
              <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                {" "}
                decentralized blockchain network
              </b>{" "}
              and its primary network comprises:
              <br />
              <ol className={`${lightMode ? "lightMode" : "DarkMode"}`}>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  Logical Marketplace{" "}
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  Virtual Showcase Vendor,
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  Prediction Questionnaire Hub, and{" "}
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  Variant Prediction Pools.{" "}
                </li>
              </ol>
              <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
                The affiliated participants can take part in the prediction pool
                sweepstakes by selecting a match or matches (fixtures)
                prescribed in the{" "}
                <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  Playpoint Showcase
                </b>
                . After the selection, the participant must ultimately answer
                the questions based on their predictions for the said match.
                These questions are assessed or set up by the
                <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  {" "}
                  Playpoint Questionnaires hub
                </b>
                .<br /> The participants acquiring the highest score range, in
                percentage, become prize contenders.
              </p>
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
              width={
                window.innerWidth >= 1920 ||
                (window.innerWidth <= 1920 && window.innerWidth > 992)
                  ? "604.797"
                  : window.innerWidth <= 992 && window.innerWidth > 768
                  ? "604.797"
                  : window.innerWidth <= 768 && window.innerWidth > 576
                  ? "552.969"
                  : window.innerWidth <= 576
                  ? "414.719"
                  : "280.797"
              }
              height="auto"
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
              alt="About"
              className={`absolute__icon ${
                lightMode ? "lightMode" : "darkMode"
              }`}
              width={
                window.innerWidth >= 1920 ||
                (window.innerWidth <= 1920 && window.innerWidth > 992)
                  ? "604.797"
                  : window.innerWidth <= 992 && window.innerWidth > 768
                  ? "423.500"
                  : window.innerWidth <= 768 && window.innerWidth > 576
                  ? "484"
                  : window.innerWidth <= 576
                  ? "414.719"
                  : "280.797"
              }
              height="auto"
            />
          </div>
        </div>
      </div>

      {/**
       * @section => token sale
       * @dev => will be uncommented soon
       */}
      {/* <div ref={TokenSaleRef} className="home__container__tokenSale">
        <div className="title">
          <h1>
            Token Sale
            <span className="animate__flash animate__slower animate__animated animate__infinite">
              _
            </span>
          </h1>
        </div>

        <div className="content">
          <div className="content__video">
            <video
              poster="https://ik.imagekit.io/lexworld/videoPoster.png"
              src="https://ik.imagekit.io/lexworld/BuyMe.mp4"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="content__description" data-aos="fade-left">
            <h1 className="stroke__colored">Utility and Governance Token,</h1>
            <h1 className="heading">Playpoint Token (PPT)</h1>
            <p>
              PPT is a <b>fungible token</b> on the Avalanche, similar to any ARC20 Token or Currency. However, PPT
              can be used as a <b>utility</b> and a <b>tradable token</b>. This
              means it can be used inside Playpoint and can be withdrawn. By
              doing so, we can achieve trading of PPT on external or
              decentralized exchanges outside of our control.
              <br />
              &nbsp;
              <br />
              PPT will be distributed through sales during Seed and Public
              Sales. PPT token will be used as an in-game asset to take part in
              various prediction pools and rewards are awarded back to the users
              in PPT.
            </p>

            <ul>
              <li>
                <b>Token Name:</b>
                <span> Playpoint Token</span>
              </li>
              <li>
                <b>Type:</b>
                <span> ARC20</span>
              </li>
              <li>
                <b>Symbol:</b>
                <span> PPT</span>
              </li>
            </ul>

            <ul>
              <li>
                <b>Soft Cap:</b>
                <span> 25,000,000 PPT</span>
              </li>
              <li>
                <b>Crowdsale:</b>
                <span> 20,000,000 PPT</span>
              </li>
              <li>
                <b>Hard Cap:</b>
                <span> 100,000,000 PPT</span>
              </li>
            </ul>

            <b className="marketing">HOLD PPT & JOIN THE JOURNEY</b>
          </div>
        </div>

        <div className="tokenEconomics">
          <div className="absolute__title">
            <h1>Token Economics_</h1>
            <h1>Token Economics_</h1>
          </div>
          <div className="tokenEconomics__content" data-aos="fade-right">
            <h1>
              Token Economics
              <span className="animate__flash animate__slower animate__animated animate__infinite stroke">
                _
              </span>
            </h1>
            <p>
              Playpoint's contingency management is based on the{" "}
              <b className="highlight">
                systematic reinforcement of target behavior
              </b>
              . The reinforcers are symbols or tokens that can be exchanged for
              other reinforcers.
              <br />
              &nbsp;
              <br />
              If technology is the backbone of cryptocurrencies then{" "}
              <b className="highlight">token economics is the heart</b>, pumping
              blood to Playpoint platform and exchange markets. With gamers,
              users, and traders proper incentivization, PPT Token will increase
              it's value to token holders.
              <br />
              &nbsp;
              <br />
              <b>Token Supply</b>: 100,000,000 PPT
            </p>
          </div>
          <div className="chart" data-aos="fade-left">
            <PolarChart />
          </div>
        </div>
      </div> */}

      {/**
       * @section => Project Timeline or Roadmap
       */}
      <div ref={RoadmapRef} className="home__container__roadmap">
        <div className="absolute__title">
          <h1>Roadmap_</h1>
          <h1>Roadmap_</h1>
          <h1>Roadmap_</h1>
        </div>
        <h1
          className={`roadmap__title ${lightMode ? "lightMode" : "darkMode"}`}
        >
          Roadmap
          <span className="animate__flash animate__slower animate__animated animate__infinite">
            _
          </span>
        </h1>
        <p
          className={`top__description ${lightMode ? "lightMode" : "darkMode"}`}
        >
          Playpoint will continue to grow with new features, systems, and
          cross-chain expansions. The roadmap below indicates the expected
          milestones in development.
        </p>
        <TimelineContainer lightMode={lightMode} />
      </div>

      {/**
       * @section => Gallery
       */}
      <div
        ref={GalleryRef}
        className="home__container__gallery"
        data-aos="zoom-in"
      >
        <div className="row">
          <div className="column">
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/4_x60hyzrV3p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590443183"
                alt="Hockey"
              />
            </div>
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/3_vYrcn-c6P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590442986"
                alt="Cricket"
              />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/2_9LcswRGJU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590442945"
                alt="Football"
              />
            </div>
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/1_wzxCQWMOg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590442986"
                alt="Soccer"
              />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/8_Bxj0DQINO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590444718"
                alt="8 Ball Pool"
              />
            </div>
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/5_ip3KOShfw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590443838"
                alt="Basketball"
              />
            </div>
          </div>
          <div className="column">
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/6__yvQv5CND.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590443927"
                alt="Tennis"
              />
            </div>
            <div className="image-box">
              <img
                width="100%"
                height="auto"
                src="https://ik.imagekit.io/pptai/7_1GW7hWBIM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651590444430"
                alt="MMA"
              />
            </div>
          </div>
        </div>
      </div>

      {/**
       * @section => documents
       */}
      <div
        ref={DocumentsRef}
        className={`home__container__documents ${
          lightMode ? "lightMode" : "darkMode"
        }`}
      >
        <div className="absolute">
          <Marquee>Frequently Asked Question, Whitepaper</Marquee>
          <Marquee>Whitepaper, FAQs, Frequently Asked Question</Marquee>
        </div>
        <div className="faqs" data-aos="fade-right">
          <h1 className={`${lightMode ? "lightMode" : "darkMode"}`}>
            Frequently Asked Questions_
          </h1>
          <p
            className={`faq__description ${
              lightMode ? "lightMode" : "darkMode"
            }`}
          >
            The tech is new and ever-evolving – it helps to have a guide. Here's
            what we recommend you should know while you're diving in.
          </p>
          <Faqs lightMode={lightMode} />
        </div>
        <div
          className="documents__links"
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="500"
        >
          <h1>
            Whitepaper
            <span className="animate__flash animate__slower animate__animated animate__infinite">
              _
            </span>
          </h1>

          <Button type={`submit ${lightMode ? "lightMode" : "darkMode"}`}>
            <a
              href="https://docs.playpoint.ai/"
              target="_blank"
              rel="noreferrer"
              className={`${lightMode ? "lightMode" : "darkMode"}`}
            >
              Whitepaper_
            </a>
          </Button>

          <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
            A complete guide for investors, players and community stake holders
            which explains the complex mechanics of the game play and tokenomics
            of Playpoint Token.
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
            width={
              window.innerWidth >= 1920 ||
              (window.innerWidth <= 1920 && window.innerWidth > 992)
                ? "824"
                : window.innerWidth <= 992 && window.innerWidth > 768
                ? "892.812"
                : window.innerWidth <= 768 && window.innerWidth > 576
                ? "691.188"
                : window.innerWidth <= 576
                ? "518.391"
                : "351"
            }
            height="auto"
            alt="Breaking Gold"
          />

          <p className="contractAddr">
            <b>Centralized Landing(Google Firebase):</b>{" "}
            <a
              href="https://playpoint.ai"
              target="_blank"
              rel="noreferrer"
              className={`${lightMode ? "lightMode" : "darkMode"}`}
            >
              https://playpoint.ai
            </a>
          </p>
          <p className="contractAddr">
            <b>Decentralized Landing(IPFS):</b>{" "}
            <a
              href="https://playpoint.on.fleek.co"
              target="_blank"
              rel="noreferrer"
              className={`${lightMode ? "lightMode" : "darkMode"}`}
            >
              playpoint.on.fleek.co
            </a>
          </p>
          <h1 style={{ marginTop: 20 }}>Contact Us_</h1>
          <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
            <b>Email</b>: info@playpoint.ai
          </p>
          <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
            <b>Marketing</b>: neil@playpoint.ai
          </p>
          <p className={`${lightMode ? "lightMode" : "darkMode"}`}>
            <b>Development</b>: domsan@playpoint.ai
          </p>
        </div>
      </div>

      {/**
       *  @section => team members
       */}
      <div  
      className={`home__container__team  ${
        lightMode ? "lightMode" : "darkMode"
      }`
    }
      >
    
        <div className="home__container__team__content"   data-aos="zoom-in" >
        <h1 className="absolute__title">
              Meet Our Team
              <span className="animate__flash animate__slower animate__animated animate__infinite">
                _
              </span>
            </h1>
          <div className="teams" >
            <div className="user">
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Domsan Lex</p>
              <p className="post">Lead Developer</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
            <div className="user">
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Aakala</p>
              <p className="post">Lead Developer</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
            <div className="user">
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Neil</p>
              <p className="post">Lead Developer</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
            <div className="user">
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Jake Lewis</p>
              <p className="post">Lead Developer</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
            <div className="user">
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Eraig Thomas</p>
              <p className="post">Student Researcher</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
            <div className={`user `}>
              <div className="imageBox">
                <img
                  src="https://pbs.twimg.com/profile_images/1491844488087494674/6tKrKNZK_400x400.jpg"
                  alt="image"
                />
              </div>
              <p className="username">Riktriz</p>
              <p className="post">Student Researcher</p>
              <div className={`social  ${lightMode ? "lightMode" : "darkMode"}`}>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-github-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`}href="#"> <i class="ri-twitter-fill"></i></a>
             <a className={` ${lightMode ? "lightMode" : "darkMode"}`} href="#"> <i class="ri-linkedin-fill"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer lightMode={lightMode} />
    </div>
  );
}

export default Home;

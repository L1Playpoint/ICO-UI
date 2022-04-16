import "./styles/style.css";

import React from "react";
import Marquee from "react-fast-marquee";

function Navbar({ refs }) {
  const {
    HomeRef,
    AboutRef,
    //eslint-disable-next-line
    TokenSaleRef,
    RoadmapRef,
    GalleryRef,
    DocumentsRef,
  } = refs;

  const scrollToElement = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });

  return (
    <div className="nav__container">
      <div className="topbar__container">
        <Marquee pauseOnHover={true} speed={35}>
          <p>
            <span className="numbering">#1</span> Pre/Private Sale will be
            initiated soon 🚀.
          </p>
          <p>
            <span className="numbering">#2</span> All the relevant remaining AMA Questions will be answered on Blog Post.🤝
          </p>
          <p>
            <span className="numbering">#2</span> Interested Investors & Venture Capitalists can get in touch or directly contact to learn about the process.💵
          </p>
        </Marquee>
      </div>
      <div className="navbar__container">
        <div onClick={() => scrollToElement(HomeRef)} className="navbar__logo">
          <img
            src="https://ik.imagekit.io/lexworld/Logo.png"
            alt="Playpoint Logo"
            width="40"
            height="40"
          />
          <p>Playpoint</p>
        </div>

        <div className="navbar__links">
          <div className="navbar__link">
            <button onClick={() => scrollToElement(HomeRef)}>Home</button>
          </div>
          <div className="navbar__link">
            <button onClick={() => scrollToElement(AboutRef)}>About</button>
          </div>
          {/* <div className='navbar__link'>
          <button onClick={() => scrollToElement(TokenSaleRef)}>
            Token Sale
          </button>
        </div> */}
          <div className="navbar__link">
            <button onClick={() => scrollToElement(RoadmapRef)}>Roadmap</button>
          </div>
          <div className="navbar__link">
            <button onClick={() => scrollToElement(GalleryRef)}>Gallery</button>
          </div>
          <div className="navbar__link">
            <button onClick={() => scrollToElement(DocumentsRef)}>
              Documents
            </button>
          </div>
        </div>

        <div className="navbar__app">
          <a href="https://blog.playpoint.ai" target="_blank" rel="noreferrer">
            Blogs_
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

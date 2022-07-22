import "./styles/style.css";

import React from "react";
import Marquee from "react-fast-marquee";

function Navbar({ refs, lightMode, setLightMode,handleLightMode }) {

  const {
    HomeRef,
    AboutRef,
    //eslint-disable-next-line
    TokenSaleRef,
    RoadmapRef,
    GalleryRef,
    DocumentsRef,
  } = refs;
  //  console.log(ref)
  const scrollToElement = (ref) =>
    window.scrollTo(
      ref.curren === "HomeRef"
        ? { top: window.top }
        : { top: ref.current.offset - 50 }
    );
  // window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });

  return (
    <div className={`nav__container`}>
      <div
        // className={`topbar__container  ${
        //   !lightMode ? "lightMode" : "darkMode"
        // }`}
      >
        <Marquee pauseOnHover={true} speed={35}>
          {/* <p>
            <span className="numbering">#1</span> All the relevant remaining AMA
            Questions will be answered on Blog Post.🤝
          </p> */}
          <p>
            <span className="numbering">#1</span> Invitation to Pre/Private Sale
            Investors; Pre-Private Sale Started from 16th May 2022 till end of
            May 2022. Visit{" "}
            <a
              href="https://sale.playpoint.ai/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
              }}
            >
              https://sale.playpoint.ai/
            </a>
          </p>
          {/* <p>
            <span className="numbering">#3</span> Interested Investors & Venture
            Capitalists can get in touch or directly contact to learn about the
            process.💵
          </p> */}
          {/* <p>
            <span className="numbering">#4</span> Pre/Private Sale will be
            initiated soon 🚀.
          </p> */}
        </Marquee>
      </div>
      <div
        className={`navbar__container ${!lightMode ? "lightMode" : "darkMode"}`}
      >
        <div onClick={() => scrollToElement(HomeRef)} className="navbar__logo">
          <img
            src="https://ik.imagekit.io/lexworld/Logo.png"
            alt="Playpoint Logo"
            width="40"
            height="40"
          />
          <p>Playpoint</p>
        </div>

        <div className={`navbar__links`}>
          <div className={`navbar__link`}>
            <button
              onClick={() => scrollToElement(HomeRef)}
              className={`${!lightMode ? "lightMode" : "darkMode"}`}
            >
              Home
            </button>
          </div>
          <div className="navbar__link">
            <button
              onClick={() => scrollToElement(AboutRef)}
              className={`${!lightMode ? "lightMode" : "darkMode"}`}
            >
              About
            </button>
          </div>
          {/* <div className='navbar__link'>
          <button onClick={() => scrollToElement(TokenSaleRef)}>
            Token Sale
          </button>
        </div> */}
          <div className={`navbar__link`}>
            <button
              onClick={() => scrollToElement(RoadmapRef)}
              className={`${!lightMode ? "lightMode" : "darkMode"}`}
            >
              Roadmap
            </button>
          </div>
          <div className="navbar__link">
            <button
              onClick={() => scrollToElement(GalleryRef)}
              className={`${!lightMode ? "lightMode" : "darkMode"}`}
            >
              Gallery
            </button>
          </div>
          <div className="navbar__link">
            <button
              onClick={() => scrollToElement(DocumentsRef)}
              className={`${!lightMode ? "lightMode" : "darkMode"}`}
            >
              Documents
            </button>
          </div>
        </div>

        <div className="navbar__app">
          <a href="https://blog.playpoint.ai" target="_blank" rel="noreferrer">
            Blogs_
          </a>
        </div>
        <button
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={handleLightMode}
          className={`${!lightMode ? "lightMode" : "darkMode"}`}
        >
          {!lightMode ? "EnableLightMode" : "EnableDarkMode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

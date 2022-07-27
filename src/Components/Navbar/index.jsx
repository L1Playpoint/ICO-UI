import "./styles/style.css";

import React from "react";
// import Marquee from "react-fast-marquee";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function Navbar({ refs, lightMode, setLightMode, handleLightMode }) {
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
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: "smooth" });
  // window.scrollTo(
  //   ref.curren === "HomeRef"
  //     ? { top: window.top }
  //     : { top: ref.current.offset - 50 }
  // );

  return (
    <div className={`nav__container`}>
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

        <div className="button__container">
          <div
            className={`navbar__app ${lightMode ? "lightMode" : "darkMode"}`}
          >
            <a
              href="https://blog.playpoint.ai"
              target="_blank"
              rel="noreferrer"
              className={`${lightMode ? "lightMode" : "darkMode"}`}
            >
              Blogs_
            </a>
          </div>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                defaultChecked
                onClick={handleLightMode}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

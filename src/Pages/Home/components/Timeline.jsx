import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function TimelineContainer({ lightMode }) {
  return (
    <div className="timeline__container">
      <Timeline position={window.innerWidth >= 992 ? "alternate" : "right"}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-left">
            <h1
              className={`title ${lightMode ? "lightMode" : "darkMode"}`}
              style={{ background: "transparent" }}
            >
              Quarter 1: Apr-Jun
            </h1>
            <div className={`p`} style={{ background: "transparent" }}>
              <ul>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                    1.1 Project Landing Page Introduction{" "}
                  </b>
                  <br />
                  Landing Page will be live on both centralized(Google
                  Firebase), and decentralized(IPFS) hosting platforms, thus no
                  technical faults keeps gamers, users, investors, and traders
                  away from updates and informations.
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                    1.2 Build Community & Build Connections
                  </b>
                  <br />
                  Partnerships, Brand Advocations with existing decentralized
                  platforms for playpoint's betterment and support.
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${lightMode ? "lightMode" : "darkMode"}`}>
                    1.3 Pre, Private-Token Sale
                  </b>
                  <br />
                  The pre and private token sales has started and is live on{" "}
                  <span>
                    <a
                      href="https://sale.playpoint.ai/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#00D569",
                        fontWeight: "bold",
                      }}
                    >
                      https://sale.playpoint.ai/
                    </a>
                  </span>
                  . Minimum investment starts from 3 AVAX. Contact us for more
                  details at info@playpoint.ai.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-right">
            <h1 className={`title ${lightMode ? "lightMode" : "darkMode"}`}>
              Quarter 2: Jul-Sep
            </h1>
            <div className="p">
              <ul>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${!lightMode ? "lightMode" : "darkMode"}`}>
                    2.1 Crowdsale, Token Deployment & CEX, DEX Listings{" "}
                  </b>
                  <br />
                  Our first priority for Q2 is to launch a successful{" "}
                  <span>#1 Crowd Sale </span>
                  and distribute tokens to holders. As part of our goal, we will
                  be working on having smart contracts audited and ready to be
                  accessed by the traders of our community.
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${!lightMode ? "lightMode" : "darkMode"}`}>
                    2.2 Staking & Liquidity Platform
                  </b>
                  <br />
                  Staking & Liquidity platform will be introduced to{" "}
                  <span>#2 investors </span>
                  with cross-bridge chain supports(
                  <i>Note: Base Network will still be Avalanche Ecosystem.</i>).
                </li>
                <li className={`${lightMode ? "lightMode" : "darkMode"}`}>
                  <b className={`${!lightMode ? "lightMode" : "darkMode"}`}>
                    2.3 Viable Product(VP) Gaming/Prediction Platform
                  </b>
                  <br />
                  As a Play to Earn (P2E) focused website, by the end of Q2, we
                  will have launched the <span>#3 Viable Platform-VP</span> for
                  beta testing among gamers to test the overall user experience
                  and plausibility.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-left">
            <h1 className={`title ${lightMode ? "lightMode" : "darkMode"}`}>
              Q3-Loading
              <span className="animate__flash animate__slower animate__animated animate__infinite">
                .
              </span>
              <span className="animate__flash animate__slower animate__animated animate__infinite animate__delay-0.3s">
                .
              </span>
              <span className="animate__flash animate__slower animate__animated animate__infinite animate__delay-0.6s">
                .
              </span>
            </h1>
            <div></div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineContainer;

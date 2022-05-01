import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function TimelineContainer() {
  return (
    <div className="timeline__container">
      <Timeline position={window.innerWidth >= 992 ? "alternate" : "right"}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade-up-left">
            <h1 className="title">Quarter 1: Apr-Jun</h1>
            <div className="p">
              <ul>
                <li>
                  <b>1.1 Project Landing Page Introduction </b>
                  <br />
                  Landing Page will be live on both centralized(Google
                  Firebase), and decentralized(IPFS) hosting platforms, thus no
                  technical faults keeps gamers, users, investors, and traders
                  away from updates and informations.
                </li>
                <li>
                  <b>1.2 Build Community & Build Connections</b>
                  <br />
                  Partnerships, Brand Advocations with existing decentralized
                  platforms for playpoint's betterment and support.
                </li>
                <li>
                  <b>1.3 Pre, Private-Token Sale</b>
                  <br />
                  The pre and private token sales (ARC20 Token, Smart Contract)
                  will be handled with SAFT instruments. These instruments will
                  ensure the safety and legality of the tokens on sale. They
                  will only be distributed at the time of TGE (Token Generating
                  Event).
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
            <h1 className="title">Quarter 2: Jul-Sep</h1>
            <div className="p">
              <ul>
                <li>
                  <b>2.1 Crowdsale, Token Deployment & CEX, DEX Listings </b>
                  <br />
                  Our first priority for Q2 is to launch a successful <span>#1 Crowd Sale </span>
                  and distribute tokens to holders. As part of our goal, we will
                  be working on having smart contracts audited and ready to be
                  accessed by the traders of our community.
                </li>
                <li>
                  <b>2.2 Staking & Liquidity Platform</b>
                  <br />
                  Staking & Liquidity platform will be introduced to{" "}
                  <span>#2 investors </span>
                  with cross-bridge chain supports(
                  <i>Note: Base Network will still be Avalanche Ecosystem.</i>).
                </li>
                <li>
                  <b>2.3 Viable Product(VP) Gaming/Prediction Platform</b>
                  <br />
                  As we're primarily focused for P2E as per our philosophy on
                  matter. We'll introduce Viable Platoform - VP(Beta) for{" "}
                  <span>#3 gamers</span>.
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
            <h1 className="title">
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

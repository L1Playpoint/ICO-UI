import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faqs() {
  return (
    <div className="faqs__container">
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq1-content"
          id="faq1-header"
        >
          <Typography>Is PPTT, the native token, a cryptocurrency?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Technically, PPTT is a fungible token on the Avalanche Ecosystem,
            similar to any ARC20 Token or Currency. However, PPTT can be used as
            a utility and a tradable token. This means it can be used inside
            Playpoint and can be withdrawn. By doing so, we can achieve trading
            of PPTT on external or decentralized exchanges outside of our
            control.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="#fff" />}
          aria-controls="faq2-content"
          id="faq2-header"
        >
          <Typography>Does Playpoint offer Staking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Playpoint offers staking PPTT as a method of rewarding community
            members for locking up their PPTT Tokens for long-term. The user can
            participate in an online prediction pool game soon, earn PPTT after
            their successful stake period completion as the treasury grows.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq3-content"
          id="faq3-header"
        >
          <Typography>What are Variant Prediction Pools?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Playpoint prediction pool is a virtual venue where a group of
            participants compete amongst each other on the basis of prediction
            outcomes of a commonly selected match. Of the variant Playpoint
            pools, every of the pools have significantly common aspects and form
            a separate unit. Thus, the group of participants into a pool have
            common choices of all the elements as the match, the question
            category and the wager stakes unit entry price. Playpoint has
            variant pool sizes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq4-content"
          id="faq4-header"
        >
          <Typography>What is a Community Hub?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Community Hub is a continuously evolving community platform that
            will evolve and expand as adoption increases. Gamers can launch
            games, socialize, get up to speed about new releases and other
            platform news, and make use of the apps and services this platform
            will provide. <br />
            Using the Community Hub as a PR podium, developers can publish or
            promote their games, and services directly to their target
            audiences. They can also fund new game development through crowd
            sales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq5-content"
          id="faq5-header"
        >
          <Typography>How can I stay updated about Playpoint?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Join Playpoint's Discord and Twitter for frequent updates. Playpoint
            also maintains a presence on Telegram.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq6-content"
          id="faq6-header"
        >
          <Typography>How do I play on Playpoint?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For broader advice on game strategy, we'll maintain network of
            broadcasters who make content about how to play the game. Above all,
            we are a community full of awesome, friendly players who love
            helping new players succeed: join them on our Discord and don’t be
            shy about asking any questions you may have!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq7-content"
          id="faq7-header"
        >
          <Typography>
            How many Games are you supporting to predict on your platform and if
            I want to predict anything, what is the process of it?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Initially the game will be based on football games prediction. But
            as you know we are an online prediction pool platform based on
            real-time sporting events, we will add all popular sports. The game
            will be launched in August 2022.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq8-content"
          id="faq8-header"
        >
          <Typography>
            What is your Game going to be like? Because I think Playpoint is
            putting money into 1 pool and see what team wins in sporting events
            then take the money. Very like betting.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The game will be a very simple challenge game where players can
            challenge other players for the outcome based on a series of
            questions and answers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq9-content"
          id="faq9-header"
        >
          <Typography>
            Can you tell me how any of the users can know about the giveaways or
            any airdrops announcement? Tell us so the users can follow that
            account or join it.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We will be running an airdrop campaign in the future and you can
            find the details about it in our social media handles. So make sure
            to follow us on twitter, telegram and discord.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="faq10-content"
          id="faq10-header"
        >
          <Typography>
            Are Playpoint games suitable for adults or only limited to children?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The game is intended to be suitable for anyone above the age of 18.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Faqs;

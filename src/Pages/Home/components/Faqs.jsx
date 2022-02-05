import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Faqs () {
  return (
    <div className='faqs__container'>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Is PPT, the native token, a cryptocurrency?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Technically, PPT is a fungible token on the Binance Smart Chain
            blockchain, similar to any BEP20 Token or Currency. However, PPT can
            be used as a utility and a tradable token. This means it can be used
            inside Playpoint and can be withdrawn. By doing so, we can achieve
            trading of PPT on external or decentralized exchanges outside of our
            control.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color='#fff' />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>
            Do it offers Staking, Liquidation Protocol?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Playpoint offers staking PPT as a method of rewarding community
            members for locking up their PPT Tokens for long-term. The user can
            participate in an online prediction pool game soon, earn PPT after
            their successful stake period completion as the treasury grows.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
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
          aria-controls='panel2a-content'
          id='panel2a-header'
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
          aria-controls='panel2a-content'
          id='panel2a-header'
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
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>How do I play on Playpoint?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For broader advice on game strategy, we'll maintain network of
            broadcasters who make content about how to play the game. Above all,
            we will a community full of awesome, friendly players who love
            helping new players succeed: join them on our Discord and don’t be
            shy about asking any questions you may have!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

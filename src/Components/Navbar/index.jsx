import './styles/style.css'

import React from 'react'
import { pure } from 'recompose';

function Navbar ({ refs }) {
  const { HomeRef, AboutRef, TokenSaleRef, RoadmapRef, GalleryRef, DocumentsRef } = refs

  const scrollToElement = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 50, behavior: 'smooth' })

  return (
    <div className='navbar__container'>
      <div onClick={() => scrollToElement(HomeRef)} className='navbar__logo'><img onContextMenu={false} src="https://ik.imagekit.io/lexworld/Logo.png?tr=w-40,h-40" alt='Playpoint Logo' /><p>Playpoint</p></div>

      <div className='navbar__links'>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(HomeRef)}>Home</button>
        </div>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(AboutRef)}>About</button>
        </div>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(TokenSaleRef)}>
            Token Sale
          </button>
        </div>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(RoadmapRef)}>Roadmap</button>
        </div>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(GalleryRef)}>Gallery</button>
        </div>
        <div className='navbar__link'>
          <button onClick={() => scrollToElement(DocumentsRef)}>
            Documents
          </button>
        </div>
      </div>

      <div className='navbar__app'>Launch Crowdsale_</div>
    </div>
  )
}

export default pure(Navbar)
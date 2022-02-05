import React from 'react'
import 'remixicon/fonts/remixicon.css'

export default function Footer () {
  return (
    <div className='footer__container'>
      <div className='update'>Website Last Updated: Feb 1, 2022</div>
      <ul className='social__links'>
        <li>
          <a href='https://blog.theboringschool.org'>
            <i className='ri-github-fill' />
          </a>
        </li>
        <li>
          <a href='https://blog.theboringschool.org'>
            <i className='ri-discord-line' />
          </a>
        </li>
        <li>
          <a href='https://blog.theboringschool.org'>
            <i className='ri-twitter-line' />
          </a>
        </li>
        <li>
          <a href='https://blog.theboringschool.org'>
            <i className='ri-medium-line' />
          </a>
        </li>
      </ul>
    </div>
  )
}

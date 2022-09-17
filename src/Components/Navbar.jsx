import React from 'react'
import './Navbar.css'

import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-container">
  <a class="navbar-brand logo" href="#">Aditya Kumar</a>
  <button class="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class=""><svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
  </button>
  <div class="collapse navbar-collapse menu-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto nav-links">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#work">Work</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#client'>Clinets</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar
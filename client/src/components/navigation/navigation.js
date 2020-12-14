import React from 'react';

import './navigation.css'

const Navigation = () => {

  return (
    <ul className="nav-list">
      <li className="nav__item">
        <a className="nav__link"
           href="#/home">Home</a>
      </li>
      <li className="nav__item">
        <a className="nav__link"
           href="#/about">About</a>
      </li>
      <li className="nav__item">
        <a className="nav__link"
           href="#/credits">Credits</a>
      </li>
    </ul>
  )
}

export default Navigation;
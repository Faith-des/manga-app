import React from 'react';

import './header.css';
import Navigation from "../navigation";

const Header = () => {

  return (
      <header className='header'>
        <nav>
          <Navigation/>
        </nav>
      </header>
  )
}

export default Header;
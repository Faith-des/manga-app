import React from 'react';

import './footer.css';
import Navigation from "../navigation";

const Footer = () => {

  return (
      <footer className='footer'>
        <section className='footer__nav'>
        <Navigation/>
        </section>
      </footer>
  )
}

export default Footer;
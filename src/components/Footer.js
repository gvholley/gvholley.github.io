import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Me
        </p>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>


          <div class='social-icons'>

            <a href="mailto:gvholley@gmail.com"
              class='social-icon-link'

              target='_blank'
              aria-label='Mail'
            >
              <i class='fas fa-envelope' />
            </a>
            <a href='https://github.com/gvholley'
              class='social-icon-link twitter'

              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a href='https://www.linkedin.com/in/gvholley/'
              class='social-icon-link twitter'

              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

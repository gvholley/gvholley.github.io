import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  useEffect (() => {
    showButton();
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
        <img src="images/koilogo.png" alt="navlogo" className="navbar-logo" onClick={closeMobileMenu}/>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#skills" className='nav-links' onClick={closeMobileMenu}>Skills </a>
            </li>
            <li className='nav-item'>
            <li className='nav-item'>
              <a href="#project" className='nav-links' onClick={closeMobileMenu}>Projects </a>
            </li>
            </li>
            <li className='nav-item'>
            <li className='nav-item'>
              <a href="#contact_info" className='nav-links' onClick={closeMobileMenu}>Contact </a>
            </li>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

        </div>
      </nav>

    </React.Fragment>
    )
}


export default Navbar;

import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GVH
        </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul classname={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Landing Pages
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
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

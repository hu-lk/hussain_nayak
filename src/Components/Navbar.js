import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'
import Hamburger from 'hamburger-react'
import {useState} from 'react'
import title from '../images/title.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <div className="child1">
            <img src={title} alt="Logo" style={{ width: '60px', height: 'auto', marginRight: '10px' }} />
          </div>
          <div className="child2">
            Jatothu Hussain Nayak
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/journey">Journey</NavLink>
            </li>
            <li onMouseEnter={handleShowSubMenu} onMouseLeave={handleShowSubMenu}>
              <NavLink to="/gallery">Gallery</NavLink>
              {showSubMenu && (
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/gallery/individual-photos">Individual Photos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery/vip-photos">VIP Photos</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/press">Press</NavLink>
            </li>
            <li>
              <NavLink to="/contact us">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

// Images

import AALogo from '../img/aa-logo-dark-8.png'

const Navbar = (props) => {
  return (
    <header>
      <nav className="nav-wrapper transparent">
        <div >

          <ul className="left hide-on-med-and-down" id="brand-menu">
            <li>
              <a href="http://www.advancedalgos.net">
                <div>
                  <img src={AALogo} alt="Advanced Algos" width="120" height="24" topmargin="216"></img>
                </div>
              </a>
            </li>
            <li><a href="http://www.advancedalgos.net" className="module-name">Users Module</a></li>
          </ul>

          <a href="" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/browse'>Browse</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><a href="http://modules.advancedalgos.net">Modules</a></li>

          </ul>
          <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/browse'>Browse</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
        </div>
      </nav>
</header>
  )
}

export default withRouter(Navbar)

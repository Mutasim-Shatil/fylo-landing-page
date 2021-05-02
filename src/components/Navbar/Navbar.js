import React from 'react'
import logo from '../../images/logo.svg'

const Navbar = () => {
    return (
      <nav className="navbar">
        {/* <div className="navbar__logo"> */}
        <img className="navbar__logo" src={logo} alt="" />
        {/* </div> */}
        <div className="navbar__item">
          <p>Features</p>
          <p>Team</p>
          <p> Sign In</p>
        </div>
      </nav>
    );
}

export default Navbar

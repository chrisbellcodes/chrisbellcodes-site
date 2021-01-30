import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div className="navbar">
        <h1 className="logo">Chris<spon className="bell">
            Bell
        </spon></h1>
        <div className="navItems">
          <Link className="navbarItem text-pop" to="/">
            Codes
          </Link>
          <Link className="navbarItem" to="/improv">
            Improvises
          </Link>
          <Link className="navbarItem" to="/misc">
            Does Misc.
          </Link>
        </div>

        <a href="mailto:chrisbellcodes@gmail.com" className="contactMe navbarItem">Contact Me</a>
      </div>
    );
}
export default Navbar
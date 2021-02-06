import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

  function addToLogo(e) {
    const logo = document.querySelector('.logo')
    const chosenNavItem = e.target
    console.log(chosenNavItem, logo);
    logo.append(chosenNavItem);
    

    // On click, if the item is in navitems 
      // remove item from nav item
        // add navitem to logo

        //If there is an navitem attached to logo
          // remove item from logo container
          // add it back to navitems container
          // remove logo modifier class
  }

    return (
      <div className="navbar">
        <h1 className="logo">
          <span className="logo__piece">Chris</span><span className="logo__piece bell">Bell</span>
        </h1>
        <div className="navItems">
          <Link onClick={addToLogo} className="navbarItem" to="/">
            Codes
          </Link>
          <Link onClick={addToLogo} className="navbarItem" to="/improv">
            Improvises
          </Link>
          <Link onClick={addToLogo} className="navbarItem" to="/misc">
            Does Misc.
          </Link>
        </div>

        <a href="mailto:chrisbellcodes@gmail.com" className="contactMe navbarItem">Contact Me</a>
      </div>
    );
}
export default Navbar
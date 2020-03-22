import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className="navbarItem" to='/improv'>Does Improv</Link>
            <Link className="navbarItem" to='/'>Codes</Link>
            <Link className="navbarItem" to='/misc'>Does MISC.</Link>
        </div>
    )
}
export default Navbar
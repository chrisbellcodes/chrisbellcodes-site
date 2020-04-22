import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link className="navbarItem" to='/improv'>Improvises</Link>
            <Link className="navbarItem text-pop" to='/'>Codes</Link>
            <Link className="navbarItem" to='/misc'>Does Misc.</Link>
        </div>
    )
}
export default Navbar
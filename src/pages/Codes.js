import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'


const Codes = () => {
    let { url } = useRouteMatch();

    return(
        <div>
                <h2>
                    <span>LinkedIn</span> 
                    <span>Github</span> 
                    <span>Contact</span>
                </h2>
               
            <ul>
                <li><Link to={`${url}codes-projects`}>Skills & Projects</Link></li>
                <li><Link to={`${url}codes-resume`}>Resume</Link></li>
                <li><Link to={`${url}codes-edu`}>Education</Link></li>   
            </ul>
        </div>
    )
}

export default Codes;
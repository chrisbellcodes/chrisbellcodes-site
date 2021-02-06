import React from 'react';
import { Link } from 'react-router-dom'
import me from '../assets/chris-bell.jpeg'


const Codes = () => {

    return(
        <div className="codes-wrapper">

            <div className="about-section">

                <div className="headshot-container">
                    <div style={{backgroundImage: 'url(' + me + ')'}} className="headshot"></div>
                </div>
                <div className="about-content">
                    <h2 className="header" >About</h2>
                    <p className="body-text">Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
                </div>
            </div>

            <div className="section-nav">
                <Link className="content-list" to={`/codes-projects`}>Skills & Projects</Link>
                <Link className="content-list" to={`/codes-resume`}>Resume</Link>
                <Link className="content-list" to={`/codes-edu`}>Education</Link>
                <a className="content-list" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/letchrisbellring/">LinkedIn</a>
                <a className="content-list" target="_blank" rel='noreferrer' href="https://github.com/chrisbellcodes">GitHub</a>
            </div>
        </div>
    )
}

export default Codes;
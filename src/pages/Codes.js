import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import linkedinIcon from '../assets/linkedin-icon.png'
import githubIcon from '../assets/github-icon.png'
import emailIcon from '../assets/email-icon.png'



const Codes = () => {
    let { url } = useRouteMatch();

    return(
        <div>
            <div>
                <a className="pro-links" href="https://www.linkedin.com/in/letchrisbellring/">
                    <img className="pro-icon" src={linkedinIcon} alt="LinkedIn Logo" />
                    LinkedIn
                </a> 
                <a className="pro-links" href="https://github.com/chrisbellcodes">
                    <img className="pro-icon" src={githubIcon} alt="Github Logo" />
                    Github
                </a>
                <a className="pro-links" href="mailto:chrisbellcodes@gmail.com">
                    <img className="pro-icon" src={emailIcon} alt="Email icon" />
                    Contact Me
                </a>
            </div>

            <div>
                <div><Link className="content-list" to={`/codes-projects`}>Skills & Projects</Link></div>
                <div><Link className="content-list" to={`/codes-resume`}>Resume</Link></div>
                <div><Link className="content-list" to={`/codes-edu`}>Education</Link></div>
            </div>
        </div>
    )
}

export default Codes;
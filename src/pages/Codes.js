import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import Projects from '../containers/Projects';
import Resume from '../containers/Resume';
import Skills from '../containers/Skills';

const Codes = () => {
    let { url } = useRouteMatch();

    return(
        <div>
            <h2>ChrisBell's LinkedIn</h2>
            <h2>ChrisBell's Github</h2>
            <h2>ChrisBell's Contact</h2>
            
            <Skills />
            <Projects />
            <Resume />
            {/* Sets up links */}
            <ul>
                <li>
                    <Link to={`${url}codes-skills`}>Skills</Link>
                </li>
                <li>
                    <Link to={`${url}codes-projects`}>Projects</Link>
                </li>
                <li>
                    <Link to={`${url}codes-resume`}>Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default Codes;
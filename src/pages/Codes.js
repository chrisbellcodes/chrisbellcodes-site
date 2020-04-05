import React from 'react';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom'

import Projects from '../containers/Projects';
import Resume from '../containers/Resume';
import Skills from '../containers/Skills';

const Codes = () => {
    let { path, url } = useRouteMatch();

    return(
        <div>
            <h2>ChrisBell's LinkedIn</h2>
            <h2>ChrisBell's Github</h2>
            <h2>ChrisBell's Contact</h2>
            
            <Skills />
            <Projects />
            <Resume />
            {/* Sets up links */}
            {/* <ul>
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

            <Route path={`${path}codes-skills`} >
                    <Skills />
                </Route>
            <Route path={`${path}codes-projects`}>
                    <Projects />
                </Route>
                <Route path={`${path}:codesId`}>
                    <Resume />
                </Route> */}
    </div>
    )
}

export default Codes;
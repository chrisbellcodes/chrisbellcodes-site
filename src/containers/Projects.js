import React from 'react'
import resumeData from '../reusmeData';
import Skills from './Skills';

const Projects = () => {
    const { projects } = resumeData
        
    const renderProjects = () => {
         let apps = projects.map((project, i) => {
            const {name, description, details} = project
                return(
                    <React.Fragment key={i}>
                        <h2>{name}</h2>
                        <h3>{description}</h3>
                        {details.map((detail, i) => <p key={i}>{detail}</p>)}
                    </React.Fragment>
                )
        })
        return apps
    }

    return(
        <div>
            <button> Back</button>
            <h1>Sklills</h1>
            <Skills />
            <h1>Projects</h1>
            {renderProjects()}
            <button> Back</button>
        </div>
    )
}

export default Projects
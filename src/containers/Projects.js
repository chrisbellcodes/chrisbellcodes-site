import React from 'react'
import resumeData from '../reusmeData';

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
            <h1>Projects - YAS</h1>
            {renderProjects()}
        </div>
    )
}

export default Projects
import React from 'react'
import resumeData from '../reusmeData'
import Experience from '../components/Experience'

const Resume = () => {

    const workExperience = resumeData.work.map((job, index) => {
        return <Experience key={index} {...job}/>
    })

    return(
        <div>
            <button> Back</button>
            {workExperience}
            <button> Back</button>
        </div>
    )
}

export default Resume
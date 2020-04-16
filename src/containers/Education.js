import React from 'react'
import resumeData from '../reusmeData'

const Education = () => {
    const { education } = resumeData;
    
    const displayEdu = () => {
        let schools = education.map((edu, i) => {
            return(
                <React.Fragment key={i}>
                    <div>{edu.school} - {edu.endDate}</div>
                    <div>{edu.studies}</div>
                    <div>{edu.location}</div>
                </React.Fragment>
            )
        })
        return schools
    }

    
    return (
        <div>
            Education - yas
            {displayEdu()}
        </div>
    )
}

export default Education

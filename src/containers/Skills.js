import React from 'react'
import resumeData from '../reusmeData'

const Skills = () => {
    const renderSkills = () => {
        const {  proficient, exposure } = resumeData.skills

        const createSkillStr = (data) => {
            let skillsStr = ''
            data.map((skill, i, data) => {
                if (i === data.length - 1) {
                    skillsStr += `${skill}`
                } else {
                    skillsStr += `${skill}, `
                }
            })
            return skillsStr
        }

        let proList = createSkillStr(proficient)

        let expoList = createSkillStr(exposure)

        return(
        <React.Fragment>
            <p>
                Proficient: {proList}
            </p>
            <p>
                Exposure: {expoList}
            </p>
        </React.Fragment>
        )
    }

    return (
        <div>
            {renderSkills()}
        </div>
    )
}

export default Skills
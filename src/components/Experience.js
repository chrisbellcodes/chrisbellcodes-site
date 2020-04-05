import React from 'react'

const Experience = ({company, startDate, endDate, location, roles}) => {
    
    const displayRoles = () => {
        const displayTasks = tasks => {
            let taskBullets = tasks.map((task, index) => {
                return (<p key={index}>{task}</p>)
            })
            return taskBullets
        }

        if(roles.length > 1) {
            // iterate over each role
            const rolesJSX = roles.map((role, i) => {
                const { title, startDate, endDate, tasks } = role
                let taskBullets = displayTasks(tasks)
                return (
                    <React.Fragment key={i}>
                        <h3>{title} {startDate} - {endDate}</h3>
                        {taskBullets}
                    </React.Fragment>
                )
            })
            return rolesJSX
        } else {
            const { title, tasks } = roles[0]
            let taskBullets = displayTasks(tasks)
            const role = (
                <React.Fragment>
                    <h3>{title}</h3>
                    {taskBullets}
                </React.Fragment>
            )
            return role
        }
    }

    return(
        <div>
            <h2> 
                <span>{company}, {location} </span>
                <span>{startDate} - {endDate}</span>
            </h2>
            {displayRoles()}
        </div>
    )
}

export default Experience
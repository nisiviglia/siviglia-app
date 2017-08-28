import React from 'react'

const ProjectCard = (props) => {
    return (
         <ul className="project-card">
                <li>
                    <h4>{props.name}</h4>
                    <p>{props.discr}</p> 
                    <p>{props.lang}</p>
                </li>
        </ul> 
         
    );
}

export default ProjectCard;

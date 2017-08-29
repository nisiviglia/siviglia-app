import React from 'react'

const Projects = (props) => {
    function getProjectCard(project){
        return(
            <a href={ project.url } key={ project.id }>
                <li>
                    <h4>{ project.name }</h4>
                    <p>{ project.discr }</p>
                    <p>{ project.lang }</p>
                    <p>{ project.url }</p>
                </li>
            </a>
        )
    }

    return (
        <div className="project-card">
        <h4>Public Projects</h4>
            {props.projects.map(getProjectCard)}
        </div> 
    );
}

export default Projects;

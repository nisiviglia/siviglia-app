import React from 'react'
import './Projects.css'

const Projects = (props) => {
    function getProjectCard(project){
        return(
            <a href={ project.url } key={ project.id }>
                <li>
                    <h4>{ project.name }</h4>
                    <p id="lang">
                        {'\u2500'}{'\u2500'}{'\u2500'}
                        { project.lang }
                        {'\u2500'}{'\u2500'}{'\u2500'}
                    </p>
                    <p id="discr">{ project.discr }</p>
                </li>
            </a>
        )
    }

    return (
        <div className="project-card">
            {props.projects.map(getProjectCard)}
        </div> 
    );
}

export default Projects;

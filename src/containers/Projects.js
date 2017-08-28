import React, { Component } from 'react'
import * as api from '../api/GitHubApi'
import ProjectCard from '../components/ProjectCard'
import LoadingMsg from '../components/LoadingMsg'

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {projects: null};
    }

    componentDidMount(){
        api.getRepos().then((result) => {
            this.setState({projects: result});
        })
        .catch((err) => {
            console.log(err); 
        });
    }

    createProjectCard(project){
        return(
            <a href={ project.url } key={ project.id }>
                <ProjectCard
                name= { project.name }
                discr= { project.discr }
                lang= { project.lang }
                url= { project.url }
                />
            </a>
        )
    }

    render(props){
        return(
            <div>
                <h4>Public Projects</h4>
                {this.state.projects ? this.state.projects.map(this.createProjectCard)
                    : LoadingMsg}
            </div> 
        );
    }

}

export default Projects;

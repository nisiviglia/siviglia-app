import React, { Component } from 'react'

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {projects: null};
    }

    componentDidMount(){
    //api gets stuff here
    }

    createProjectCard(project){
    //call ProjectCard with info
    }

    render(props){
        return(
            <div>
                <h4>Projects</h4>
            </div> 
        );
    }

}

export default Projects;

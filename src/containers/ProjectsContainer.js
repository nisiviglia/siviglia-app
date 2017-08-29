import React, { Component } from 'react'
import * as api from '../api/GitHubApi'
import Projects from '../components/Projects'
import LoadingMsg from '../components/LoadingMsg'

class ProjectsContainer extends Component{
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

    render(props){
        return(
            <div>
                {this.state.projects ? <Projects projects={this.state.projects}/>
                    : LoadingMsg()}
            </div> 
        );
    }

}

export default ProjectsContainer;

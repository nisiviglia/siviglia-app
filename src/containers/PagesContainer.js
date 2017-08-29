import React, { Component } from 'react'
import * as api from '../api/BlogApi'
import LoadingMsg from '../components/LoadingMsg'
import Pages from '../components/Pages'

class PagesContainer extends Component{
    constructor(props){
        super(props);
        this.state = {page: null};
    }

    componentDidMount(props){
       api.getPage(this.props.title).then((result) =>{
            this.setState({page: result});
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render(props){
        return(
            <div>
                {this.state.page ? Pages(this.state.page) : LoadingMsg()}
            </div>
        );
    }
}

export default PagesContainer;

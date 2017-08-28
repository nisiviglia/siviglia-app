import React, { Component } from 'react'
import * as api from '../api/BlogApi'
import LoadingMsg from '../components/LoadingMsg'
import PagesComponent from '../components/PagesComponent'

class Pages extends Component{
    constructor(props){
        super(props);
        this.state = {page: null};
    }

    componentDidMount(props){
        this.getData();
    }

    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
            this.getData();
        }
    }
    
    getData(props){
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
                {this.state.page ? PagesComponent(this.state.page) : LoadingMsg()}
            </div>
        );
    }
}

export default Pages;

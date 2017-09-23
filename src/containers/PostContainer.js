import React, { Component } from 'react'
import * as api from '../api/BlogApi'
import Post from '../components/Post'
import LoadingMsg from '../components/LoadingMsg'

class PostContainer extends Component{
    constructor(props){
        super(props);
       this.state = {post: null}; 
    }

    componentDidMount(props){
       api.getPostByTitle(this.props.match.params.title).then((result) =>{
            this.setState({post: result});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(props){
        return(
            <div>
                {this.state.post ? <Post post={this.state.post} />
                    : LoadingMsg()}
            </div> 
        );
    }
}

export default PostContainer;

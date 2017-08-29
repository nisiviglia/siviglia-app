import React, { Component } from 'react'
import * as api from '../api/BlogApi'
import Blog from '../components/Blog'
import LoadingMsg from '../components/LoadingMsg'

class BlogContainer extends Component{
    constructor(props){
        super(props);
        this.state = {posts: null};
    }

    componentDidMount(){
       api.getBlogPosts().then((result) =>{
            this.setState({posts: result});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(props){
        return(
            <div>
                <h4>Blog</h4> 
                {this.state.posts ? <Blog posts={this.state.posts}/>
                    : LoadingMsg()}
            </div>
        ); 
    }        
}

export default BlogContainer;

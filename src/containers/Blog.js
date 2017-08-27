import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api/BlogApi'
import PostCard from '../components/PostCard'
import LoadingMsg from '../components/LoadingMsg'

class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {posts: null 
        };
    }

    componentDidMount(){
       api.getBlogPosts().then((result) =>{
            this.setState({posts: result});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    createPostCard(post){
        let url = '/blog/post/' + post.title;
        return(
            <Link to={ url } key={post.id}>
                <PostCard 
                date= { post.date }
                title= { post.title }
                discr= { post.discr }
                tags= { post.tags }
                /> 
            </Link>
        ); 
    }
    
    render(props){
        return(
            <div>
                <h4>Blog</h4> 
                {this.state.posts ? this.state.posts.map(this.createPostCard) 
                    : LoadingMsg}
            </div>
        ); 
    }        
}

export default Blog;

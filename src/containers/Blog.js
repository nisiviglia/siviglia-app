import React, { Component } from 'react';
import * as api from '../api/BlogApi.js';

class Blog extends Component{
    render(props){
        return(
            <div>
                <h4>Blog</h4> 
                <p>{api.getBlogPosts}</p>
            </div>
        ); 
    }        

}

export default Blog;

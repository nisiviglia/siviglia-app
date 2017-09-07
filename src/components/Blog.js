import React from 'react'
import { Link } from 'react-router-dom'
import '../index.js'
import './Blog.css'

const Blog = (props) => {
    function getTag(tag, index){
        return (<p key={index}>{ tag }</p>);
    }
    
    function getCard(post){
        let url = '/blog/post/' + post.title; 
        return(
             <Link to={ url } key={ post.id }>
                 <li>
                    <h4>{post.title}</h4>
                    <p>{new Date(post.date).toDateString()}</p>
                    <p>{post.discr}</p> 
                    {post.tags.map(getTag)}
                </li>
            </Link>
        );
    }

    return (
        <div className="post-card">
            {props.posts.map(getCard)}
        </div> 
    );
}

export default Blog;

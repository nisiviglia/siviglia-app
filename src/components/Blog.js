import React from 'react'
import { Link } from 'react-router-dom'
import '../index.js'
import './Blog.css'

const Blog = (props) => {
    function getTag(tag, index){
        return (<p key={index} id="tag">{ tag }</p>);
    }
    
    function getCard(post){
        let url = '/blog/post/' + post.title; 
        return(
             <Link to={ url } key={ post.id }>
                 <li>
                    <h2>{post.title}</h2>
                    <div id="tags">
                        {'\u2500'}{'\u2500'}{'\u2500'}
                        {post.tags.map(getTag)}
                        {'\u2500'}{'\u2500'}{'\u2500'}
                    </div>
                    <p id="discr">{post.discr}</p> 
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

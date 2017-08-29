import React from 'react'
import { Link } from 'react-router-dom'

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
                    <p>{post.date}</p>
                    <p>{post.discr}</p> 
                    {post.tags.map(getTag)}
                </li>
            </Link>

        );
    }

    return (
        <div className="post-card">
            <h4>Blog</h4> 
            {props.posts.map(getCard)}
        </div> 
    );
}

export default Blog;

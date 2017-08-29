import React from 'react';

const Post = (props) => {
    function getTag(tag, index){
        return (<p key={index}>{ tag }</p>);
    }

    return (
        <div className="post-page">
                <h4>Post</h4>
                <li>
                    <h4>{props.post.title}</h4>
                    <p>{props.post.date}</p>
                    <p>{props.post.text}</p> 
                    {props.post.tags.map(getTag)}
                </li>
        </div> 
    );
}

export default Post;

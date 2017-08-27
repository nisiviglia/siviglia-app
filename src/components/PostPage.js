import React from 'react';

const PostPage = (props) => {
    function getTag(tag, index){
        return (<p key={index}>{ tag }</p>);
    }

    return (
        <div className="post-page">
                <li>
                    <h4>{props.title}</h4>
                    <p>{props.date}</p>
                    <p>{props.text}</p> 
                    {props.tags.map(getTag)}
                </li>
        </div> 
    );
}

export default PostPage;

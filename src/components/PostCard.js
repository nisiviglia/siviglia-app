import React from 'react'

const PostCard = (props) => {
    function getTag(tag, index){
        return (<p key={index}>{ tag }</p>);
    }

    return (
        <ul className="post-card">
                <li>
                    <h4>{props.title}</h4>
                    <p>{props.date}</p>
                    <p>{props.discr}</p> 
                    {props.tags.map(getTag)}
                </li>
        </ul> 
    );
}

export default PostCard;

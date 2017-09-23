import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import './Post.css';

const Post = (props) => {
    function onNewComment(comment){
      console.log("new comment: " + comment);
    }

    return (
        <div>
            <div className="post-page">
                <li>
                    <h2>{props.post.title}</h2>
                    <p id="date">{new Date(props.post.date).toDateString()}</p>
                    <p id='text'>{props.post.text}</p> 
                </li>
            </div> 
            <ReactDisqusThread
                className='disqus'
                shortname='nick-siviglias-blog'
                identifier={props.post.id}
                title={props.post.title}
                url={window.location.href}
                category_id=''
                onNewCommentt={onNewComment} />
        </div>
    );
}

export default Post;

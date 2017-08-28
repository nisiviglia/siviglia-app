import React, { Component } from 'react'
import * as api from '../api/BlogApi'
import PostPage from '../components/PostPage'
import LoadingMsg from '../components/LoadingMsg'

class Post extends Component{
    constructor(props){
        super(props);
       this.state = {
           title: null,
           date: null,
           text: null,
           tags: null
       }; 
    }

    componentDidMount(props){
       api.getPostByTitle(this.props.match.params.title).then((result) =>{
            this.setState({
                title: result.title,
                date: result.date,
                text: result.text,
                tags: result.tags
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render(props){
        return(
            <div>
                <h4>Post</h4>
                {this.state.title
                    ? <PostPage 
                        title={this.state.title}
                        date={this.state.date}
                        text={this.state.text}
                        tags={this.state.tags}
                        />
                    : LoadingMsg()}
            </div> 
        );
    }
}

export default Post;

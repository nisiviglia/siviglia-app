import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogContainer from './BlogContainer'
import PostContainer from './PostContainer'
import ProjectsContainer from './ProjectsContainer'
import PagesContainer from './PagesContainer'

const Main = (props) => {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={BlogContainer}/>
                <Route exact path='/blog' component={BlogContainer}/>
                <Route path='/blog/post/:title' component={PostContainer}/>
                <Route exact path='/projects' component={ProjectsContainer}/>
                <Route exact path='/about' component={(props) => (
                    <PagesContainer title='about' />
                )}/>
                <Route exact path='/contact' component={(props) => (
                    <PagesContainer title='contact' />
                )}/>
            </Switch>
        </main>
    );
}

export default Main;

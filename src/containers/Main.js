import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Post from './Post'
import Projects from './Projects'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Blog}/>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/blog/post/:title' component={Post}/>
            <Route exact path='/projects' component={Projects}/>
        </Switch>
    </main>
)

export default Main;

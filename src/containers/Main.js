import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Post from './Post'
import Projects from './Projects'
import Pages from './Pages'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Blog}/>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/blog/post/:title' component={Post}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/about' component={(props) => (
                <Pages title='about' />
            )}/>
            <Route exact path='/contact' component={(props) => (
                <Pages title='contact' />
            )}/>
        </Switch>
    </main>
)

export default Main;

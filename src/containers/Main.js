import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Blog}/>
        </Switch>
    </main>
)

export default Main;

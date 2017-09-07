import React  from 'react'
import { withRouter } from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import Main from './Main'
import '../index.css'

const App = withRouter(props =>
    <div>
        <HeaderContainer {...props}/>
        <Main />
    </div>
);

export default App;

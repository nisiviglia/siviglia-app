import React  from 'react'
import { withRouter } from 'react-router-dom'
import HeaderContainer from './HeaderContainer'
import Main from './Main'
import Footer from '../components/Footer'
import '../index.css'

const App = withRouter(props =>
    <body>
        <div className='wrapper'>
            <HeaderContainer {...props} />
            <Main />
        </div>
        <Footer />
    </body>
);

export default App;

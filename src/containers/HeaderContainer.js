import React, { Component }  from 'react';
import Header from '../components/Header.js'

class HeaderContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            links: {
                Blog: '/blog',
                Projects: '/projects',
                About: '/about',
                Contact: '/contact',
            },
            currentUrl: null
        };
    }

    componentWillReceiveProps(nextProps){
        if(this.props.location.pathname !== nextProps.location.pathname){
            let pathname = this.trimPathname(nextProps.location.pathname);
            this.setState({currentUrl: pathname});
        } 
    }

    componentDidMount(props){
        let pathname = this.trimPathname(this.props.location.pathname);
        this.setState({currentUrl: pathname});
    }

    trimPathname(pathname){
        let nextBackSlash = pathname.indexOf("/", 1);
        if(nextBackSlash !== -1){
            pathname = pathname.substr(0, nextBackSlash);
        }
        return(pathname); 
    }

    render(props){
        return(
            <div>
                <Header links={this.state.links} 
                    currentUrl={this.state.currentUrl}/>
            </div>
        ); 
    }
}

export default HeaderContainer;

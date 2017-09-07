import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css'
import './Header.css'

const Header = (props) => {
    function createLink(key, value, index){
        if(props.currentUrl === value){
            return(<li key={index}><Link to={value}  
                id='highlight'>{key}</Link></li>);
        }
        return(<li key={index}><Link to={value}>{key}</Link></li>);
    }

    return(
        <ul className='nav-header'>
            {Object.keys(props.links).map(function(key, index){
                return createLink(key, props.links[key], index);
            })}
        </ul>
    );
}

export default Header;

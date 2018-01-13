import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'

const Title = () => (
    <div className='title'>
       <Link to='/'> Nick's Blog </Link>
    </div>
);

export default Title;

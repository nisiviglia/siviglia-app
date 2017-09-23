import React from 'react'
import './Pages.css'

const Pages = (props) => (
    <div className='Pages'>
        <h2>{props.title}</h2>
        <div id='text'>
            {props.text}
        </div>
    </div>
)

export default Pages;

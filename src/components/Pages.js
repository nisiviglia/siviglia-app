import React from 'react'
import './Pages.css'

const Pages = (props) => (
    <div className='Pages'>
        <h2>{props.title.toUpperCase()}</h2>
        <div id='text' dangerouslySetInnerHTML={{__html:props.text}}>
        </div>
    </div>
)

export default Pages;

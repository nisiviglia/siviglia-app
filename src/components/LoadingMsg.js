import React from 'react'
import './LoadingMsg.css'

/*
    Credit to Chris Nager.
    https://codepen.io/chrisnager/pen/yfwgE
*/

const LoadingMsg = () => (
    <div>
    <h2>Loading<span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></h2>
    </div>
)

export default LoadingMsg;

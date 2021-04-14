import React from 'react';


export default (props) =>{
    return <div className="site-links">
        <a href={props.liveLink} target="_blank">Live Link</a>
        |
        <a href={props.gitLink} target="_blank">Github</a>
    </div>
}

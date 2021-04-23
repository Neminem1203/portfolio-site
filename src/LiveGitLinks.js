import React from 'react';


const LiveGitLinks = (props) => {
    let liveRef = <></>
    let sep = (props.gitLink && props.liveLink ? "|" : <></>)
    let gitRef = <></>
    
    if(props.liveLink !== undefined){
        liveRef = <a href={props.liveLink} target="_blank" rel="noreferrer">Live Link</a> 
    }

    if(props.gitLink !== undefined){
            gitRef = <a href={props.gitLink} target="_blank" rel="noreferrer">Github</a>
    }
    return <div className="site-links">
        {liveRef}
        {sep}
        {gitRef}
    </div>
}

export default LiveGitLinks;
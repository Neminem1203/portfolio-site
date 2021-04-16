import React from 'react';


export default (props) =>{
    let gitRef = <></>
    
    if(props.gitLink !== undefined){
            gitRef =<>
            | 
            <a href={props.gitLink} target="_blank">Github</a>
        </>
    }
    return <div className="site-links">
        <a href={props.liveLink} target="_blank">Live Link</a> 
        {gitRef}
    </div>
}

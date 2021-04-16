import Draggable from "./Draggable";
import LiveGitLinks from "./LiveGitLinks";

export default (props) =>{
    return <Draggable title={props.title} x={props.x} y={props.y} backgroundColor={props.backgroundColor}>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.text}</p>
        <LiveGitLinks liveLink={props.liveLink} gitLink={props.gitLink}/>
    </Draggable> 
}
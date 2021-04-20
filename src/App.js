import logo from './logo.svg';
import './App.css';
import Draggable from "./Draggable.js";
import LiveGitLinks from './LiveGitLinks';
import Projects from './Projects';
import project_list from "./project_list";
import skill_levels from "./skill_levels";


const projectX = 30;
const projectY = 40;
const offSet = 70;

function App() {
  return (
    <div className="App">
      <div className="bookshelf"> 
      <b>Portfolio</b>
      <br/>
      Double Click to Toggle
      <br/>
      Draggable Boxes
        {project_list.map((project,idx) => {
          return <Projects 
            title={project.title}
            subtitle={project.subtitle}
            text={project.text}
            liveLink={project.liveLink}
            gitLink={project.gitLink}
            x={projectX}
            y={projectY+idx*offSet}
            backgroundColor={project.color}
          />
        })}
      </div>
      <div className="mainScreen">
        <h1>Paul Tan</h1>
        <h3>Software Developer</h3>
        <p>Hey! Welcome to my portfolio site! You can drag my portfolio sites around and double click to open them for more information with live links and github links</p>
        <div className="skill-legend">
        {Object.keys(skill_levels).map(num => {return <div>
            {num} : {skill_levels[num]}
          </div>
          })}
        </div>
        <div className="skills">

        </div>
      </div>
    </div>
  );
}

export default App;

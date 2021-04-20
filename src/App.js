import logo from './logo.svg';
import './App.css';
import Draggable from "./Draggable.js";
import LiveGitLinks from './LiveGitLinks';
import React, {useState} from "react";
import Projects from './Projects';
import project_list from "./project_list";
import skill_levels from "./skill_levels";
import skills from "./skill_set";


const projectX = 30;
const projectY = 40;
const offSet = 70;

function App() {
  const [search, setSearch] = useState("");
  const skillset = Object.keys(skills).map(skill_name => {
            let opacity = 0.5;
            const reg_ex = new RegExp(search.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&').toLowerCase());
            if(search == "" || reg_ex.test(skill_name.toLowerCase())){
              opacity = 1;
            }
            return <div style={{opacity: opacity}}>
              {skill_name} : {skill_levels[skills[skill_name]]}
              </div>
          })
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
        {/* <div className="skill-legend">
        {Object.keys(skill_levels).map(num => {return <div>
            {num} : {skill_levels[num]}
          </div>
          })}
        </div> */}
        <div>
          <input type="text" onChange={(e)=>{setSearch(e.currentTarget.value)}}></input>
        </div>
        <br />
        <div className="skills">
          {skillset}
        </div>
      </div>
    </div>
  );
}

export default App;

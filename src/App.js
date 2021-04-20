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


function alphabeticalSort(a, b){
  return a[0].charCodeAt(0) - b[0].charCodeAt(0);
}

function reverseAlpbaeticalSort(a,b){
  return b[0].charCodeAt(0) - a[0].charCodeAt(0);
}

function proficiencySort(a, b){
  return skills[b] - skills[a];
}

function reverseProficienySort(a,b){
  return skills[a] - skills[b];
}


function App() {
  const [search, setSearch] = useState("");
  const [sortState, setSortState] = useState(0);
  const sortFuncs = [alphabeticalSort,reverseAlpbaeticalSort, proficiencySort,reverseProficienySort];
  let skill_list = Object.keys(skills);
  let buttonClass1 = "sort-buttons";
  let buttonClass2 = "sort-buttons";
  let buttonClass3 = "sort-buttons";
  switch(sortState){
    case 0:
      buttonClass1 += " selected";
      break;
    case 1:
      buttonClass2 += " selected";
      break;
    case 2:
      buttonClass2 += " reversed";
      break;
    case 3:
      buttonClass3 += " selected";
      break
    case 4:
      buttonClass3 += " reversed";
      break;
  }
  if(sortState > 0){
    skill_list.sort(sortFuncs[sortState-1])
  
  }
  const skillset = skill_list.map(skill_name => {
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
        <p>Below are my skills. Unsorted is the way I prefer it displayed, but you can sort it via alphabetical, reverse alphabetical, proficiency, and non-proficient</p>
        <div className="skill-legend">
        {/* {Object.keys(skill_levels).map(num => {return <div>
            {num} : {skill_levels[num]}
          </div>
          })} */}
          <h1>Sort By</h1>
          <div className={buttonClass1} onClick={()=>setSortState(0)} >Unsorted</div>
          <div className={buttonClass2} onClick={()=>{
            let newSortState = sortState == 1 ? 2 : 1;
            setSortState(newSortState);
          }}>Alphabetical</div>
          <div className={buttonClass3} onClick={()=>{
            let newSortState = sortState == 3 ? 4 : 3;
            setSortState(newSortState);
          }}>Proficiency</div>
        </div>
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

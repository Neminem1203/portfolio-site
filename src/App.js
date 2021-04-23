import './App.css';
import React, {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import Projects from './Projects';
import project_list from "./project_list";
import skill_levels from "./skill_levels";
import {skills, skill_images} from "./skill_set";
import initialData from "./projects_and_skills";
import Column from "./column";


const projectX = 30;
const projectY = 40;
const offSet = 70;




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
  const [columns, setColumns] = useState(initialData);
  const sortFuncs = [reverseAlpbaeticalSort, proficiencySort,reverseProficienySort];
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
    default:
      break;
  }
  if(sortState === 1){
    skill_list.sort()
  } else if(sortState > 1){
    skill_list.sort(sortFuncs[sortState-2])
  }
  const skillset = skill_list.map(skill_name => {
              let opacity = 0.15;
              const reg_ex = new RegExp(search.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&').toLowerCase());
              if(search === "" || reg_ex.test(skill_name.toLowerCase())){
                opacity = 1;
              }
              return <div style={{opacity: opacity}}>
                {skill_images[skill_name]}
                <div className={"skill-subtext"}>
                  {skill_name} : {skill_levels[skills[skill_name]]}
                </div>
                </div>
  })
      const skill_column = <Column key="skills" column={columns.columns["skills"]}/>
      const project_column = <Column key="projects" column={columns.columns["projects"]} />
      const filter_skill_column = <Column key="filter-skills" column={columns.columns["search_skill"]} />
      const filter_project_column = <Column key="filter-project" column={columns.columns["search_project"]} />

    const onDragEnd = result =>{
      const {destination, source, draggableId} = result;
      if(!destination || 
        (destination.droppableId === source.droppableId && destination.index === source.index)
        ) return;
        debugger
      if(destination.droppableId === source.droppableId){
        // same table
        const column = columns.columns[source.droppableId];
        const newIdList = Array.from(column.id_list);
        newIdList.splice(source.index, 1);
        newIdList.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...column, id_list: newIdList,
        }

        const newState = {
          ...columns,
          columns:{
            ...columns.columns,
            [newColumn.id]: newColumn
          }
        }
        setColumns(newState);
      } else {
        const fromColumn = columns.columns[source.droppableId];
        const toColumn = columns.columns[destination.droppableId];
        const fromList = Array.from(fromColumn.id_list)
        const toList = Array.from(toColumn.id_list)
        fromList.splice(source.index, 1);
        toList.splice(destination.index, 0, draggableId);

        const newFrom = {
          ...fromColumn, id_list: fromList
        }
        const newTo = {
          ...toColumn, id_list: toList
        }

        const newState = {
          ...columns,
          columns:{
            ...columns.columns,
            [fromColumn.id]: newFrom,
            [toColumn.id]: newTo,
          }
        }
        setColumns(newState);
      }
    }
  return (
    <div className="App">
      <div className="bookshelf"> 
      <b>Portfolio</b>
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
            let newSortState = sortState === 1 ? 2 : 1;
            setSortState(newSortState);
          }}>Alphabetical</div>
          <div className={buttonClass3} onClick={()=>{
            let newSortState = sortState === 3 ? 4 : 3;
            setSortState(newSortState);
          }}>Proficiency</div>
        </div>
        <div>
          Filter: <input type="text" onChange={(e)=>{setSearch(e.currentTarget.value)}}></input>
        </div>
        <br />
        <div className="skills">
          {skillset}
        </div>
          <div className="resetbutton" onClick={()=>{setColumns(initialData)}}>Reset</div>
          <div className="search-by-buttons">
            <div onClick={()=>{setColumns(initialData)}}>Search By Skill</div>
            <div onClick={()=>{setColumns(initialData)}}>Search By Projects</div>
          </div>
          <div className="project-skill-filter">
            <DragDropContext onDragEnd={onDragEnd}>
              {skill_column}
              {filter_skill_column}
            </DragDropContext>
            <DragDropContext onDragEnd={onDragEnd}>
              {filter_project_column}
              {project_column}
            </DragDropContext>
          </div>
      </div>
    </div>
  );
}

export default App;

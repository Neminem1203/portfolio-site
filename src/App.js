import logo from './logo.svg';
import './App.css';
import Draggable from "./Draggable.js";
import LiveGitLinks from './LiveGitLinks';
import Projects from './Projects';

const projects = [
{
  title: "MeCube",
  subtitle: "Full Stack Developer",
  text: "A YouTube Clone that I worked on (from backend to frontend). Imitating most features of YouTube like creating videos, comments, users, and liking videos and comments while using Ruby on Rails Backend, React Redux Frontend, and AWS for Video and Image hosting.",
  liveLink: "http://me-cube.herokuapp.com/#/",
  gitLink: "https://github.com/Neminem1203/Me-Cube",
  color: "#00F0F0"
},
{
  title: "Jungle Gym",
  subtitle: "Backend Lead",
  text: "JungleGym allows users who either don't want to use weights or don't have a gym membership to still find a great workout in a park near their location. It provides the locations, and instructions for the workouts based on user input. Most of my work on this project is on the backend (API and Database management) and Google Maps API in the frontend.",
  liveLink: "http://jg-gym.herokuapp.com/#/",
  gitLink: "https://github.com/rlim92/JUNGLE_GYM",
  color: "#FF5733"
},
{
  title: "Dangerously Normal Dungeons",
  subtitle: "Game Developer",
  text: "A simple rogue-like dungeon crawler. You can attack monsters, collect items, and use items in your inventory. This game is using only JavaScript and it's still a work in progress, but leaving any feedback will help make the game better.",
  liveLink: "https://neminem1203.github.io/DangerouslyNormalDungeons/",
  gitLink: "https://github.com/Neminem1203/DangerouslyNormalDungeons",
  color: "#FA01FD"
},
{
  title: "Adonis",
  subtitle: "Game Developer",
  text: "Made this portfolio site when I wasA game that we developed during the Blackthornprod GAME JAM #3. The theme of the jam was less is more. In this game, every addon you get adds more functionality, but your hitbox gets increased and your speed gets slightly slower. Will you risk getting addons or will you try defeating the enemies without any addons?",
  liveLink: "https://orczuk.itch.io/adonis",
  color: "#F00"
},
{
  title: "Infamous",
  subtitle: "Game Developer",
  text: "Game created during a Retro Game Jam. The theme of the game jam is new games created in retro style. We decided to recreate infamous in the style of NES. You play as Cole and you can decide whether you want to save or kill the civilians. Watch out for any enemies along the way.",
  liveLink: "https://orczuk.itch.io/infamous-nes-demake",
  color: "#CC0"
},
]

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
        {projects.map((project,idx) => {
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
    </div>
  );
}

export default App;

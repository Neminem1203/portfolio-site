const initialData = {
    skills: {
        "Python": {id: 'React', content: 3},
        "Ruby": {id: 'Ruby', content: 2},
        "CPP": {id: 'CPP', content: 2},
        "Java": {id: 'Java', content: 2}, 
        "Rails": {id:'Rails' , content: 1},
        "JavaScript": {id:'JavaScript' , content: 2},
        "React": {id:'React' , content: 2},
        "Redux": {id:'Redux' , content: 1},
        "NodeJS": {id:'NodeJS' , content: 2},
        "ExpressJS": {id:'ExpressJS' , content: 1},
        "AWS": {id:'AWS' , content: 1},
        "MongoDB": {id:'MongoDB' , content: 1},
        "PostgreSQL": {id:'PostgreSQL' , content: 2},
        "JQuery": {id:'JQuery' , content: 1},
        "Heroku": {id:'Heroku' , content: 1},
        "HTML5": {id:'HTML5' , content: 2},
        "CSS3": {id:'CSS3' , content: 2},
        "LibGDX": {id:'LibGDX' , content: 2},
        "ML": {id:'ML' , content: 2},
        "AI": {id:'AI' , content: 2},
    },
    projects:{
        'MeCube': {id: 'MeCube', content: ['React','Redux','Ruby','Rails','JavaScript','PostgreSQL','Heroku','HTML5','CSS3','AWS']},
        'Jungle Gym': {id: 'JungleGym', content: ['MongoDB', 'ExpressJS', 'React','Redux','NodeJS','JavaScript', 'HTML5', 'CSS3']},
        'DND': {id: 'DND', content: ['HTML5', 'CSS3']},
        'Adonis': {id: 'Adonis', content: ['Java', 'LibGDX']},
        'InfamousNES': {id: 'InfamousNES', content: ['Java', 'LibGDX']}
    },
    columns: {
        'skills':{
            id: 'skills',
            title: 'Skills',
            id_list: [
                "Python",
                "Ruby",
                "CPP",
                "Java",
                "Rails",
                "JavaScript",
                "React",
                "Redux",
                "NodeJS",
                "ExpressJS",
                "AWS",
                "MongoDB",
                "PostgreSQL",
                "JQuery",
                "Heroku",
                "HTML5",
                "CSS3",
                "LibGDX",
                "ML",
                "AI",]
        },
        'projects':{
            id: 'projects',
            title: 'Projects',
            id_list: ['MeCube', 'Jungle Gym', 'DND', 'Adonis', 'InfamousNES']
        },
        'search_skill':{
            id: 'search_skill',
            title: 'Filter By Skills',
            id_list: []
        },
        'search_project':{
            id: 'search_project',
            title: 'Filter By Project',
            id_list: []
        }
    },
    columnOrder: ['skills', 'projects']
}

export default initialData;


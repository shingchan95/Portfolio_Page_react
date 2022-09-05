import bankHeist from "../images/project-bank-heist.JPG"
import techBlog from "../images/week14.JPG"
import project1 from "../images/project 1.PNG"
import workdaySchedule from "../images/week5.PNG"


const projectData = [
    {
        "id":1,
        "title":"Project Bank-Heist",
        "description":"This application provides a rudimentary online banking template. It is a full stack application that primarily utilises Node.js and it employs the MVC pattern.",
        "deployment": "https://peaceful-lassen-volcanic-80125.herokuapp.com/",
        "github":"https://github.com/ChrisAylen/project-bank-heist",
        "image": bankHeist,
        "skills":["html","css","javascript", "sql","express.js","sequelize", "handlebar.js","node.js", "mysql" ],
        "languages":["html","css","javascript", "sql"],
        "framework":["express.js","sequelize", "handlebar.js" ],
        "others":["node.js", "mysql"]

    },
    {   
        "id":2,
        "title":"The Tech Blog",
        "description":"This application provides a rudimentary Tech Blog template. It is a full stack application that primarily utilises Node.js and it employs the MVC pattern.",
        "image": techBlog,
        "deployment":"https://week14-coursework.herokuapp.com/",
        "github":"https://github.com/shingchan95/week14-coursework",
        "skills":["html","css","javascript", "sql", "express.js","sequelize", "handlebar.js","node.js","mysql"],
        "languages":["html","css","javascript", "sql"],
        "framework":["express.js","sequelize", "handlebar.js" ],
        "others":["node.js","mysql"]

    },
    {   "id":3,
        "title": "Weather Forecast With Map Click",
        "description":"This application provides a Weather Forecast websiite using Google Map API and OpenWeather API. It allows user to click anywhere in the map and allocate the weather forecast detail using the Fetch API .",
        "image": project1,
        "deployment":"https://shingchan95.github.io/know-your-city/",
        "github":"https://github.com/shingchan95/know-your-city",
        "skills":["html","css","javascript","third part apis"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":["third part apis"]
    },
    {   "id":4,
        "title":"Hello World Social Networking",
        "description":"The application provides a social network enviroment. It is a full stack application that primarily utilises Node.js, GraphQL, MongoDB/Mongoose and React.",
        "image":"",
        "deployment":"https://shielded-mesa-02928.herokuapp.com/",
        "github":"https://github.com/shingchan95/hello-world-social-networking" ,
        "skills":["html","css","javascript","react"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":[""]
    },
    {   "id":5,
        "title":"Work Day Scheduler",
        "description":"This application provides a Work Day Scheduler template. It is a fron-end application that primarily utilises Javascript & Localstorage , allows user to save data to their local storage across browser sessions.",
        "image": workdaySchedule,
        "deployment":"https://shingchan95.github.io/Work-day-schedule/",
        "github":"https://github.com/shingchan95/week5-coursework" ,
        "skills":["html","css","jquery","local storage"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":["local storage"]
    },
    {   "id":6,
        "title":"README-generator",
        "description":"The application can dynamically generates a professional README.md file from a user's input using the Inquirer package.",
        "image":"",
        "deployment":"",
        "github":"https://github.com/shingchan95/README-generator" ,
        "skills":["javascript", "nodejs", "inquirer"],
        "languages":[""],
        "framework":[],
        "others":[""]
    },
    {   "id":7,
        "title":"react-portfolio",
        "description":"This application provides a portfolio created using react.js and tailwind. It is a component based front-end framework which ultimately boosts the speed of the development process.",
        "image": workdaySchedule,
        "deployment":"https://shingchan95.github.io/portfolio_page_react/",
        "github":"https://github.com/shingchan95/portfolio_page_react" ,
        "skills":["html","css","javascript","react"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":[""]
    }
    
]

export default projectData;
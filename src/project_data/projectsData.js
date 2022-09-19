import bankHeist from "../images/project-bank-heist.JPG"
import techBlog from "../images/week14.JPG"
import project1 from "../images/project 1.PNG"
import workdaySchedule from "../images/week5.PNG"
import Helloworld from "../images/hello-world.JPG"
import readMe from "../images/read-me.JPG"
import portfolio from "../images/portfolio.JPG"

const projectData = [
    {   
        "id":1,
        "title":"Hello World Social Networking",
        "description":"The application provides a social network enviroment. It is a full stack application that primarily utilises Node.js, GraphQL, MongoDB/Mongoose and React.",
        "image":Helloworld,
        "deployment":"https://shielded-mesa-02928.herokuapp.com/",
        "github":"https://github.com/shingchan95/hello-world-social-networking" ,
        "skills":["React","GraphQL", "Node.js", "MongoDB/Mongoose", "Express","HTML","CSS","Javascript",],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":[""]
    },
    {   
        "id":2,
        "title": "Weather Forecast With Map Click",
        "description":"This application provides a Weather Forecast websiite using Google Map API and OpenWeather API. It allows user to click anywhere in the map and allocate the weather forecast detail using the Fetch API .",
        "image": project1,
        "deployment":"https://shingchan95.github.io/know-your-city/",
        "github":"https://github.com/shingchan95/know-your-city",
        "skills":["RestAPI", "Javascript", "HTML", "CSS"],
        "languages":["HTML","CSS","Javascript"],
        "framework":[],
        "others":["third part apis"]
    },
    {
        "id":3,
        "title":"Project Bank-Heist",
        "description":"This application provides a rudimentary online banking template. It is a full stack application that primarily utilises Node.js and it employs the MVC pattern.",
        "deployment": "https://peaceful-lassen-volcanic-80125.herokuapp.com/",
        "github":"https://github.com/ChrisAylen/project-bank-heist",
        "image": bankHeist,
        "skills":["Node.js", "mySQL", "Sequelize", "Express", "Handlebar.js", "Bootstrap", "HTML","CSS","Javascript", ],
        "languages":["html","css","javascript", "sql"],
        "framework":["express.js","sequelize", "handlebar.js" ],
        "others":["node.js", "mysql"]

    },
    {   "id":4,
        "title":"README-generator",
        "description":"The application can dynamically generates a professional README.md file from a user's input using the Inquirer package.",
        "image":readMe,
        "deployment":"https://github.com/shingchan95/README-generator",
        "github":"https://github.com/shingchan95/README-generator" ,
        "skills":["Javascript", "Node.js", "Inquirer"],
        "languages":[""],
        "framework":[],
        "others":[""]
    },
    {   
        "id":5,
        "title":"The Tech Blog",
        "description":"This application provides a rudimentary Tech Blog template. It is a full stack application that primarily utilises Node.js and it employs the MVC pattern.",
        "image": techBlog,
        "deployment":"https://week14-coursework.herokuapp.com/",
        "github":"https://github.com/shingchan95/week14-coursework",
        "skills":["Node.js", "mySQL", "Sequelize", "Express.js", "Handlebar.js","HTML","CSS","Javascript", ],
        "languages":["html","css","javascript", "sql"],
        "framework":["express.js","sequelize", "handlebar.js" ],
        "others":["node.js","mysql"]

    },
    {   "id":6,
    "title":"react-portfolio",
    "description":"This application provides a portfolio created using react.js and tailwind. It is a component based front-end framework which ultimately boosts the speed of the development process.",
    "image": portfolio,
    "deployment":"https://shingchan95.github.io/portfolio_page_react/",
        "github":"https://github.com/shingchan95/portfolio_page_react" ,
        "skills":["React", "Tailwindcss", "HTML","CSS","Javascript"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":[""]
    },
    {   "id":7,
        "title":"Work Day Scheduler",
        "description":"This application provides a Work Day Scheduler template. It is a fron-end application that primarily utilises Javascript & Localstorage , allows user to save data to their local storage across browser sessions.",
        "image": workdaySchedule,
        "deployment":"https://shingchan95.github.io/Work-day-schedule/",
        "github":"https://github.com/shingchan95/week5-coursework" ,
        "skills":["jQuery","Local Storage", "HTML","CSS"],
        "languages":["html","css","javascript"],
        "framework":[],
        "others":["local storage"]
    },
    
]

export default projectData;
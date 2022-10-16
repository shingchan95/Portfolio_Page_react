import React from 'react';
import '../styles/aboutme.css';
import ProfilePic from '../images/my_pic.png';
import { Link } from "react-router-dom";

function Aboutme(){
    return(
        <div className="text-center pt-20 align-baseline" >  
            <div>
                <ul className="circles w-screen h-screen text-white text-3xl font-mono font-bold">
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>JQuery</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Tailwind</li>
                            <li>MYSQL</li>
                            <li>MongoDB</li>
                            <li>API</li>
                            <li>Bootstrap</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>JQuery</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>Express</li>
                            <li>Tailwind</li>
                            <li>MYSQL</li>
                            <li>MongoDB</li>
                            <li>API</li>
                            <li>Bootstrap</li>
                </ul>
            </div>
            <div className='pb-20'>
                <img className='h-48 mx-auto' src={ProfilePic} alt="profilepic" />
            </div>
            <div className="text-white md:container md:mx-auto md:w-4/12 h-3/6 p-5 lg:w-6/12 block">
                <h1 className="font-mono typing1 text-3xl font-bold">ABOUT ME</h1>
                <div className='type-effect mg-auto text-l pt-8'>
                    <p className="font-mono">
                        Hi! my name is Tommy, a dedicated web developer trained in the latest technologies by the University of Manchester Coding Bootcamp, i am also a BA Marketing Graduate capable of working with a variety of technology and software with unique ideas.
                    </p>
                </div>
                <div className='pt-20'>
                    <button className='rounded-full py-4 px-5 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono hover:bg-blue-900 hover:text-black hover:border-none'>
                        <Link to="/projects">View My Projects</Link> 
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Aboutme
import React from 'react';
import '../styles/aboutme.css';
import ProfilePic from '../images/my_pic.png';
import { Link } from "react-router-dom";

function Aboutme(){
    return(
        <div className="bg-black w-full h-full text-center pt-20 align-baseline">
            <div className='pb-20'>
                <img className='h-48 mx-auto' src={ProfilePic} alt="profilepic" />
            </div>
            <div className="text-white md:container md:mx-auto bg-black md:w-4/12 h-screen p-5 lg:w-6/12">
                <h1 className="font-mono typing1 text-5xl font-bold">ABOUT ME</h1>
                <div className='type-effect mg-auto text-2xl pt-8'>
                    <p className="font-mono">
                        Hi! my name is Tommy, a dedicated web developer trained in the latest technologies by the University of Manchester Coding Bootcamp, i am also a BA Marketing Graduate capable of working with a variety of technology and software with unique ideas.
                    </p>
                </div>
            <div className='pt-20 '>
                <button className='rounded-full py-2 px-3 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono hover:bg-slate-700'>
                    <Link to="/projects">View My Projects</Link> 
                </button>
            </div>
            </div>
        </div>
    )
}

export default Aboutme
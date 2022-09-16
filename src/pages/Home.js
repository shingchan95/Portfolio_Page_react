import React from 'react';
import homepageBg from '../images/background-gif.gif'
import '../styles/Home.css'
import { Link } from "react-router-dom";


function Homepage(){
    return (  
            <div>
                <img className='object-cover w-full h-screen' alt='gif-background' src={homepageBg} />
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 font-mono welcome-text text-center' >
                    <h1 className="text-7xl font-bold">HI I AM TOMMY </h1> 
                    <h1 className="text-3xl font-bold pt-2">WELCOME TO MY PORTFOLIO</h1> 
                    <div className='pt-8'>
                        <button className='rounded-full py-2 px-3 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono hover:bg-slate-700'>
                        <Link to="/aboutme">Explore About Me</Link> 
                        </button>
                    </div> 
                </div>        
            </div>

    )
}


export default Homepage
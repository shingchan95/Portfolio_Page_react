import React from 'react';
import '../styles/aboutme.css';
import ProfilePic from '../images/my_pic.png';

function Aboutme(){
    return(
        <div className="bg-black w-full h-full text-center pt-20 align-baseline">
            <div className='pb-20'>
                <img className='h-48 md:mx-auto' src={ProfilePic} alt="profilepic" />
            </div>
            <div className="text-white md:container md:mx-auto bg-black md:w-4/12 h-screen p-5 lg:w-8/12">
                <h1 className="font-mono text-5xl font-bold">ABOUT ME</h1>
                <div className='type-effect text-3xl'>
                    <p className="font-mono typing1">Hi!, my name is Tommy, a dedicated web developer trained in </p>
                    <p className="font-mono typing2">the latest technologies by the University of Manchester Coding Boot Camp,</p>
                    <p className="font-mono typing3">i am also a BA Marketing Graduate capable of working with a variety</p>
                    <p className="font-mono typing4">of technology and software with unique ideas and passionate. </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
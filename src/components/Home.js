import React from 'react';
import '../styles/Home.css';
import HKbackground from '../images/HongKong-background.jpg'

function Homepage(){
    return (
        <div className="cover-page" id="home">  
        <div className="container-welcome">
            <h1 className="welcome-text">HI I AM TOMMY! </h1> 
            <h1 className="welcome-text">WELCOME TO MY PORTFOLIO</h1> 
            <div className="to-aboutme">
                <a className="arrow-text" href="#aboutme"><i className="arrow down"></i> CONTINUE<i className="arrow down"></i> </a>
            </div>
        </div>
        <img id="hk_background" src={HKbackground} alt="hk-background" />
        </div>

    )
}


export default Homepage
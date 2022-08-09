import React from 'react';
import '../styles/aboutme.css';
import ProfilePic from '../images/my_pic.png';

function Aboutme(){
    return(
    <div id="aboutme"className="aboutme-section">
        <img className="profile-pic" src={ProfilePic} alt="profilepic" />    
        <div className="container-fluid mx-auto">
        <div className="jumbotron jumbotron-fluid container-fluid">
              <h1 className="display-4 subject-text">About me</h1>
              <p className="lead mx-auto">Hi!, my name is Tommy, BA Marketing Graduate with an
                Innovative tech mind, started coding Bootcamp by Univeristy of
                Manchester in 2022 March, capable of working with a variety of technology and software, Web  Developer + Creative Thinker, team 
                player with unique ideas and passionate to contribute in the field.</p>             
            </div>
            <div className="to-go">
                <a className="arrow-text mx-auto" href="#projects"><i className="arrow down"></i> PROJECT<i className="arrow down"></i> </a>
            </div>            
        </div>
    </div>
    )
}

export default Aboutme
import React from 'react';
import '../styles/Nav.css';
import pdf from '../images/CV.pdf'


function Navbar(){
    return (
          <nav className="navbar nav-menu navbar-expand" style={{position: "fixed"}}>
          <div className=" navbar-collapse" id="navbarSupportedContent">
              <div>
                <a className="nav-item nav-link" id='home-btn' href="#home">HOME</a>
              </div>
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                  <a className="nav-item nav-link" href="#aboutme">ABOUT ME</a>
              </li>                   
              <li className="nav-item">
                  <a className="nav-item nav-link" href="#projects">PROJECTS</a>
              </li>
              <li className="nav-item">
                  <a className="nav-item nav-link" href="#contact">CONTACT</a>
              </li>
              <li className="nav-item">
                  <a className="nav-item nav-link" href={pdf} target="_blank" rel="noreferrer">VIEW MY CV</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}


export default Navbar
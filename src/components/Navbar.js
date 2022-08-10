import React from 'react';
import '../styles/Nav.css';
import pdf from '../images/CV.pdf'

function Navbar(){
    return (
          <nav className="nav-menu navbar-expand-xl ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="nav-item nav-link home-key" href="#home">HOME</a>
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
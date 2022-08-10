import React from 'react';
import '../styles/projectItem.css'
import githubLogo from "../images/github-logo.png"




function ProjectItem({project}) {
    return (
        <div className="project_item" style={{marginBottom: "50px"}}>
            <div className="card">
            <div className="card-body card-background">
                <div className='imagecard'><img id="test" style={{maxWidth: "400px"}} src={project.image} alt="test" /></div>
                
                <div className='display-box'>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    
                    <div className='button-group'>
                        <a href={project.github} className="githhub-logo" target="_blank" rel="noreferrer"><img src={githubLogo} style={{maxHeight: "40px"}} alt='github' /></a>
                        <a href={project.deployment} className="deployment-btn " target="_blank" rel="noreferrer">Visit deployment</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
    )
}

export default ProjectItem
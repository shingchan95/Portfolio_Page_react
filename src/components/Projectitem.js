import React from 'react';
import '../styles/projectItem.css'
import test1 from '../images/week3.PNG'




function ProjectItem({portfolio}) {
    // console.log(portfolio)
    return (
        <div className="project_item" style={{marginBottom: "50px"}}>
            <div className="card">
            <div className="card-body">
                <div className='imagecard'><img id="test" style={{maxWidth: "300px"}} src={test1} alt="test" /></div>
                
                <div className='display-right'>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="http://google.com" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>
    
    )
}

export default ProjectItem
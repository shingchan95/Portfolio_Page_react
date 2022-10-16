import React from 'react';
import projectData from "../project_data/projectsData.js";
import ProjectItem from '../components/Projectitem';
import '../styles/projects.css';

function Projects(){    
    
 return(
    <div className='bg-black h-screen'>
        {/* <div>
            <ul className="circles w-screen h-screen">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
            </ul>
        </div> */}
        <h1 className='text-white font-mono text-5xl text-center pt-16 font-bold'>PROJECTS</h1>
        < ProjectItem projects={projectData} /> 

    </div>
    )
      
}

export default Projects
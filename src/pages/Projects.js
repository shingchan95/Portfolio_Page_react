import React from 'react';
import projectData from "../project_data/projectsData.js";
import ProjectItem from '../components/Projectitem';

import { useState } from 'react';

function Projects(){    
    
 return(
    <div className="bg-black w-full h-full">
        <h1 className='text-white font-mono text-5xl text-center pt-16 font-bold'>PROJECTS</h1>
        < ProjectItem projects={projectData} /> 
    </div>
    )
      
}

export default Projects
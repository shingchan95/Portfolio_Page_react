import React from 'react';
import '../styles/projects.css';
import pjdata from "../project_data/projects.json";
import ProjectItem from './Projectitem'
import { useState } from 'react';

function Projects(){
    const skills= ["html","css","javascript", "sql"];
    const [checked, setchecked] = useState([])
    const [portfolio, setPortfolio] = useState("")

    const check_boxes = (e) =>{   
        let updatedList= [...checked];
        if (e.target.checked){
            updatedList=[...checked, e.target.value];
            
        }else{
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setchecked(updatedList)
        const res = pjdata.filter(item => item.languages.includes(checked));
        
        // const res= pjdata.filter((item) => {
        //     return checked.includes(item.languages);
        // });
        console.log(res)
        setPortfolio(res)
    } 
    
    
    
 return(
    <div className ="projects-page" id="projects">
        <h2>Projects</h2> 
            <div className="filter-container">
                <table className="skills-buttons"  >
                    <tbody onChange={check_boxes}>
                        <tr>
                        <td><p>Filter by skills:</p></td>
                        {skills.map((skill) => (
                            <td><input type="checkbox" id={skill} name="selector" value={skill} /><label className="selector option-a" htmlFor={skill}> {skill} </label></td>
                        ))} 
                        </tr>
                    </tbody>
                </table>
            </div>
            < ProjectItem portfolio={portfolio}/> 
    </div>
    )
      
}

export default Projects
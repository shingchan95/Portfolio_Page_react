import React, {useState} from 'react';
import '../styles/projectItem.css'
import ProjectModal from './ProjectModal'



function ProjectItem({projects}) {  
    const [isOpen, setIsOpen] = useState(false)
    const [clickData, setClickData] = useState("")
    const [skills, setSkills]= useState([])

    return (
    <>
        <div className='text-white md:container md:mx-auto md:w-5 md:h-4/6 p-5 lg:w-10/12 text-center flex items-center justify-center flex-wrap'>
            {projects.map((project, i) => {
                return project.id %2===0 ?(
                    <>
                    <div key={project.id} className="cursor-pointer relative transition duration-300 hover:scale-150 hover:z-50 border-2 rounded-lg m-5 w-64 h-96 font-mono left-fly z-1 bg-black" onClick={() => {setIsOpen(true); setClickData(project); setSkills(project.skills) }} >
                        <div className='flex items-center justify-center pb-10'>
                            <div className='w-full h-40' key={i}> 
                                <img src={`${project.image}`} alt={project.title} key={i}/>
                            </div>
                        </div>   
                        <div className='pt-5'>
                            <p className='text-2xl font-bold'> {project.title}</p>
                        </div>
                    </div>
                    <ProjectModal skills={skills} data={clickData} open={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                    )
                    :
                    (
                    <>
                    <div key={project.id} className="cursor-pointer relative ransition duration-300 hover:scale-150 hover:z-50 border-2 rounded-lg m-5 w-96 h-80 font-mono z-1 bg-black"  onClick={() => {setIsOpen(true); setClickData(project); setSkills(project.skills)}} >
                        <div className='flex items-center justify-center pb-10'>
                            <div className='w-full h-40'> 
                                <img src={`${project.image}`} alt={project.title} key={i}/>
                            </div>
                        </div>
                        <div>
                        <p className='text-2xl font-bold'> {project.title}</p>
                        </div>
                    </div>
                    <ProjectModal  skills={skills} data={clickData} open={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                    )
                })
            }   
        </div>
    </>
    
    )
}

export default ProjectItem
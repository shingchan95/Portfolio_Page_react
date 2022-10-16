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
                    <div key={project.id} className="cursor-pointer relative transition duration-300 hover:scale-150 hover:z-50 border-4 border-slate-600 rounded-lg m-5 w-[284px] h-96 font-mono left-fly z-1 bg-slate-800" onClick={() => {setIsOpen(true); setClickData(project); setSkills(project.skills) }} >
                        <div className='flex items-center justify-center pb-10'>
                            <div className='w-full h-40' key={i}> 
                                <img src={`${project.image}`} alt={project.title} key={i}/>
                            </div>
                        </div>   
                        <div className='pt-5'>
                            <p className='text-xl font-bold px-5'> {project.title}</p>
                        </div>
                    
                        <div className='flex flex-wrap items-baseline pt-10'>
                            {project.skills.map((skill, i) => {
                                return (
                                    <div className="w-min bg-white text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow opacity-50 text-sm">
                                        <p> {skill} </p> 
                                    </div>
                                ) 
                            })}       
                        </div>
                    </div>
                    <ProjectModal skills={skills} data={clickData} open={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                    )
                    :
                    (
                    <>
                    <div key={project.id} className="cursor-pointer transition duration-300 hover:scale-150 border-4 border-slate-600 hover:z-50 rounded-lg m-5 w-96 h-[360px] font-mono z-1 bg-slate-800"  onClick={() => {setIsOpen(true); setClickData(project); setSkills(project.skills)}} >
                        <div className='flex items-center justify-center pb-10'>
                            <div className='w-full h-40'> 
                                <img src={`${project.image}`} alt={project.title} key={i}/>
                            </div>
                        </div>
                        <div>
                        <p className='text-xl font-bold'> {project.title}</p>
                        </div>

                        <div className='flex flex-wrap items-baseline pt-8'>
                            {project.skills.map((skill, i) => {
                                return (
                                    <div className="w-min bg-white text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow opacity-50 text-sm">
                                        <p> {skill} </p> 
                                    </div>
                                ) 
                            })}       
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
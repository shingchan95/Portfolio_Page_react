import React from 'react';
import contactBg from '../images/contact-background.jpg'
import envelope from '../images/envelope.jpg'
import {Link} from 'react-scroll'

function Contact(){
    return(
        <>
        <img className='z-50 object-cover w-full h-screen' alt="contact-background" src={contactBg}></img>
        <h1 className='text-white pb-60 font-mono absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-center pt-16 font-bold'>CONTACT</h1>
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-mono text-center">
            <div className='md:space-x-20 md:flex '>
                <div>
                    <button className='w-[180px] rounded-full peer py-2 md:py-3 md:px-5 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono'>
                    Find me on
                    </button>
                    <div className="bg-stone-700 hidden peer-hover:grid hover:grid w-[200px] drop-shadow-lg absolute">
                        <a className="px-5 py-3 hover:bg-gray-200" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shing-hei-chan-b74747120/">Linkedin</a>
                        <a className="px-5 py-3 hover:bg-gray-200" target="_blank" rel="noreferrer" href="https://github.com/shingchan95">Github</a>
                        <a className="px-5 py-3 hover:bg-gray-200" target="_blank" rel="noreferrer" href="mailto:shingchan1219@gmail.com">Email</a>
                    </div>
                </div>
                <div>
                    <button className='w-[180px] mt-10 py-2 md:mt-0 bg-white text-black rounded-full md:py-3 md:px-5 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono hover:bg-slate-700'>
                    <Link  to="contact-form" spy={true} smooth={true}>
                    Contact form
                    </Link>
                    </button>
                </div>
                   
            </div>
        </div>

        <div className="bg-black w-screen h-screen text-white " id='contact-form'>
            <h1 className='pt-20 text-white text-center text-5xl font-mono font-bold'>HAVE SOME QUESTIONS?</h1>
            <h2 className='pt-5 text-white text-center text-2xl font-mono font-bold'> You can contact me using the contact form below</h2>
                <div className="pt-20 flex space-x-40 ml-auto" >
                    <div className='ml-20 w-1/4 pt-40 hidden md:block'>
                        <img className='object-cover' alt="envelope" src={envelope}></img>
                    </div>

                    <div className='w-2/4'>
                        <form action="https://formsubmit.co/60b09ae6882f12448593ffa2c1c6bebe" className="shadow-md rounded md:px-8 pt-6 pb-8 mb-4" method="POST">
                            <input type="hidden" name="_subject" value="New submission from my PORTFOLIO!" />
                            <input type="hidden" name="_autoresponse" value="thank you for your message. i will respond as soon as possible" />
                            <input type="hidden" name="_next" value="https://shingchan95.github.io/portfolio_page_react/" />
                            <div className="">
                                <label className="block text-white text-sm font-bold mb-2 ">Name</label>
                                <input type="text" name="name" className="form-control text-black shadow appearance-none border rounded md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" required />
                            </div>
                            <div className="">
                                <label className="block text-white text-sm font-bold mb-2">Email address</label>
                                <input type="email" name="email" className="form-control text-black shadow appearance-none border rounded md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" required />
                            </div>
                            <div className="contact-message">
                                <label className="block text-white text-sm font-bold mb-2">Message</label>
                                <textarea  type="text" name="message" className="form-control text-black shadow appearance-none border rounded md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " rows="9" placeholder="Write your message here." required></textarea>
                            </div>
                            <button className="w-[200px] mt-10 bg-white text-black rounded-full py-2 px-3 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono hover:bg-slate-700" type="submit">Send</button>
                
                        </form>
                    </div>
                </div>
        </div>
        
        </>
    
    )
}

export default Contact
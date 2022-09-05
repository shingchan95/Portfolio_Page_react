import React from 'react';
import github from '../images/github-logo.png'
import linkedin from '../images/Linkedin-Logo-PNG2.png'

function Contact(){
    return(
        <div className="bg-black w-full h-screen text-white ">
            <div>
                <h1 className='font-mono text-5xl text-center pt-16 font-bold'>CONTACT</h1>
            </div>
                <div className="pt-20 max-w-lg mx-auto" >
                    <form action="https://formsubmit.co/60b09ae6882f12448593ffa2c1c6bebe" className="bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST">
                        <input type="hidden" name="_subject" value="New submission from my PORTFOLIO!" />
                        <input type="hidden" name="_autoresponse" value="thank you for your message. i will respond as soon as possible" />
                        <input type="hidden" name="_next" value="https://shingchan95.github.io/portfolio_page_react/" />
                        <div className="">
                            <label className="block text-white text-sm font-bold mb-2 ">Name</label>
                            <input type="text" name="name" className="form-control text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" required />
                        </div>
                        <div className="">
                            <label className="block text-white text-sm font-bold mb-2">Email address</label>
                            <input type="email" name="email" className="form-control text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" required />
                        </div>
                        <div className="contact-message">
                            <label className="block text-white text-sm font-bold mb-2">Message</label>
                            <textarea  type="text" name="message" className="form-control text-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " rows="9" placeholder="Write your message here." required></textarea>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
                    </form>
                </div>
                <div className="flex bg-zinc-300 inset-x-0 bottom-0" >
                        <a href="https://github.com/shingchan95" className="mx-auto" target="_blank" rel="noreferrer"><img className="w-30 h-10 bg-zinc-300 m-3" src={github}  alt='github' /></a>
                        <a href="https://www.linkedin.com/in/shing-hei-chan-b74747120/" className="mx-auto " target="_blank" rel="noreferrer"><img src={linkedin} className="w-20 h-7 bg-zinc-300 mt-4"  alt='linkedin' /></a>
                </div>
        </div>
    
    )
}

export default Contact
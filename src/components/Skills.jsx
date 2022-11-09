import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Mongo from "../assets/mongo.png"
import Github from "../assets/github.png"
import JavaScript from "../assets/javascript.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Skills = () => {
    return (
        <div name="skills" className='w-full h-screen bg-[#202329] text-[#d9d9d997]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 md:p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e63946]'>Skills</p>
                    <p className='py-4 text-center'>These are the technologies that I am familiar with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={HTML} alt="html" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={CSS} alt="html" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={react} alt="html" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={JavaScript} alt="html" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={Mongo} alt="html" />
                        <p className='my-4'>MONGO</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={Github} alt="html" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={node} alt="html" />
                        <p className='my-4'>NODEJS</p>
                    </div>
                    <div className='shadow-md rounded shadow-[#131417] hover:scale-110 duration-500'>
                        <img className="w-20 mx-auto pt-4" src={tailwind} alt="html" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
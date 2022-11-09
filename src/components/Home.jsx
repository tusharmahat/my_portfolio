import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#202329]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#e63946]">Hi, this is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#D9D9D9]">Tushar Mahat</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#d9d9d997]">I am a Full Stack Developer</h2>
                <p className="text-[#d9d9d997] py-4 max-w-[700px]">I am a full-stack developer focused on building responsive full-stack web application</p>
                <div >

                    <Link to="projects" smooth={true} duration={500} >
                        <button className="text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#e63946] hover:border-[#e63946]">
                            View Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>


                </div>
            </div>
        </div >
    )
}

export default Home
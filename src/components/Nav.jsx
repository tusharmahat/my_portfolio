import React from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
// import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../assets/logo.png"
import { Link } from 'react-scroll'

const Nav = ({ mobileNavOpen, handleHamBurgClick }) => {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#202329] text-[#D9D9D9] z-50">
            <div className="cursor-pointer">
                <Link to="home" smooth={true} duration={500} >
                    <img src={Logo} alt="Logo" className="w-[50px]" />
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li className="border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9]"><Link to="home" smooth={true} duration={500} >
                    Home
                </Link></li>
                <li className="border-2 rounded-md ml-1 py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9]"><Link to="about" smooth={true} duration={500} >
                    About
                </Link></li>
                <li className="border-2 rounded-md ml-1 py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9]"><Link to="projects" smooth={true} duration={500} >
                    Projects
                </Link></li>
                <li className="border-2 rounded-md ml-1 py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9]"><Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link></li>
                <li className="border-2 rounded-md ml-1 py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9]"><Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleHamBurgClick} className="flex md:hidden z-50 cursor-pointer">
                {mobileNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            <ul className={mobileNavOpen ? "absolute top-0 left-0 w-full h-screen bg-[#202329] flex flex-col justify-center items-center" : "hidden"}>
                <li className="py-6 text-4xl border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] flex justify-center w-full">
                    <Link onClick={handleHamBurgClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] flex justify-center w-full">
                    <Link onClick={handleHamBurgClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] flex justify-center w-full">
                    <Link onClick={handleHamBurgClick} to="projects" smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-4xl border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] flex justify-center w-full">
                    <Link onClick={handleHamBurgClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl border-2 rounded-md py-1 hover:text-[#202329] border-[#202329] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] flex justify-center w-full">
                    <Link onClick={handleHamBurgClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0B65C2]">
                        <a href="https://www.linkedin.com/in/tushar-mahat/" className="w-full flex justify-between items-center">LinkedIn<FaLinkedin size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#161B22]">
                        <a href="https://github.com/tusharmahat" className="w-full flex justify-between items-center">Github<FaGithub size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DADAD9]">
                        <a href="mailto:tusharmahat@gmail.com" className="w-full flex justify-between items-center text-black">Email<FaEnvelope size={30} /></a>
                    </li>
                    {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#468189]">
                        <a href="/" className="w-full flex justify-between items-center">Resume<BsFillPersonLinesFill size={30} /></a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
export default Nav
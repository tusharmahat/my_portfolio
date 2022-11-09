import React from 'react'
import pagination from '../assets/pagination.png'
import dashboard from '../assets/dashboard.png'
import email from '../assets/email.png'

const Project = () => {
    return (
        <div name="projects" className='w-full md:h-screen bg-[#202329] text-[#d9d9d997]'>
            {/* container  */}
            <div className='max-w-[1000px] mx-auto p-4 md:p-8 flex flex-col  w-full h-full justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e63946]'>Projects</p>
                    <p className='py-6'>Check out come of my projects</p>
                </div>

                {/* grid card container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* card */}
                    <div style={{ backgroundImage: `url(${dashboard})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-2xl font-bold text-[#fff] tracking-wider'>
                                <p className='text-center pt-4'>D3js Visualization Dashboard</p>
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://info-viz-dashboard.onrender.com">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/tusharmahat/visualizationDashBoard">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card */}
                    <div style={{ backgroundImage: `url(${pagination})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 duration-200'>
                            <span className='text-2xl font-bold text-[#fff] tracking-wider'>
                                <p className='text-center pt-4'>React HackerNews Pagination</p>
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://hacker-news-pagination.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/tusharmahat/hackernews-pagination">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card */}
                    <div style={{ backgroundImage: `url(${email})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100  duration-200'>
                            <span className='text-2xl font-bold text-[#fff] tracking-wider'>
                                <p className='text-center pt-4'>Nodejs Email App</p>
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://email-system.onrender.com">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/tusharmahat/email-system">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#fff] bg-[#e63946] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Project
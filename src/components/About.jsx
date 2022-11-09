import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#202329] text-[#d9d9d997]'>
            <div className='flex flex-col justify-center items-center w-full h-full p-4'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className="text-4xl font-bold inline border-b-4 border-[#e63946]">About</p>
                    </div>
                    <div>


                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Tushar, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p className=''>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating softwares for clients.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
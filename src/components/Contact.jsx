import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full md:h-screen bg-[#202329]  flex justify-center items-center p-4'>
            <form method="POST" action="https://getform.io/f/96e84262-d186-40d3-85b8-fc0aaf2c519c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e63946] text-[#d9d9d997]'>Contact</p>
                    <p className='py-4 text-[#d9d9d997]'>Submit the form to contact me or contact me via email :- tusharmahat@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" name="name" placeholder='Name' />
                <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" name="email" placeholder='Email' />
                <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 rounded-md px-4 py-2 mx-auto my-8 flex items-center hover:bg-[#e63946] hover:border-[#e63946]'>Let's collaborate</button>
            </form>


        </div>
    )
}

export default Contact
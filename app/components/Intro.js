import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <div className='border-2 border-gray-500 rounded-2xl bg-gray-800/30 backdrop-blur-md opacity-100 p-5'>
            <div className='flex flex-wrap'>
                <div className='font-bold text-gray-950 w-[70%]'>Welcome, I'm
                    <div className='text-xl text-purple-900'> Muhammad Faizan Alam <hr /></div>
                </div>
                <div className='w-[30%] rounded-full border-purple-500'>
                    <Image src="/images/id.jpg" alt="IDENTITY" width="100" height="50" className='rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Intro
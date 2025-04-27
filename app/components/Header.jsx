import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            {/* md + lg */}
            <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 p-2 bg-gray-700/70 text-gray-300 border-2 border-gray-300 rounded-full z-50 hidden md:block'>
                <Link href="/" className='pr-1' title='Home'>Home</Link>
                <Link href="/" className='pr-1' title='About'>About</Link>
                <Link href="/" className='pr-1' title='Projects'>Projects</Link>
                <Link href="/" className='pr-1' title='Experience'>Experience</Link>
            </div>

            {/* sm */}
            <div className='fixed left-10 top-1/2 transform -translate-y-1/2 p-3 text-center bg-gray-700/70 text-gray-300 border-2 border-gray-300 rounded-full z-50 md:hidden block'>
                <div><Link href="/" className='pb-1' title='Home'>Home</Link></div>
                <div><Link href="/" className='pb-1' title='About'>About</Link></div>
                <div><Link href="/" className='pb-1' title='Projects'>Projects</Link></div>
                <div><Link href="/" className='pb-1' title='Experience'>Exp</Link></div>
            </div>
        </div>
    )
}

export default Header
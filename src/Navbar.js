import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
const Navbar = () => {
    return (
        <div className='flex justify-end pr-5 py-4 '>

            <HeartIcon className='h-7 w-7 text-red-600 hover:scale-125 cursor-pointer' />
        </div>
    )
}

export default Navbar
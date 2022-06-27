import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import StopDisplayer from './StopDisplayer'
import { ReplyIcon } from '@heroicons/react/solid'
const Favorites = () => {
    const favorites = useSelector(state => state.favorites)
    const navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {

    }, [state])


    return (

        <div>
            <div className='flex justify-between items-center '>
                <div className='pl-5'>
                    <ReplyIcon className='h-8 w-8 cursor-pointer hover:underline hover:scale-125 hover:text-red-700' onClick={ () => navigate('/') } />
                </div>
                <div className='text-center text-2xl font-semibold my-10'>Favorite Stops</div>
                <div></div>
            </div>
            { favorites?.map(stop => (
                <div key={ stop.id }>
                    <StopDisplayer
                        stop={ stop }
                        fav="fav"
                    />
                </div>)) }

        </div>
    )
}

export default Favorites
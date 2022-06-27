import { StarIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchDetails } from './features/details/detailsSlice'
import { addFavorites } from './features/favorites/favoritesSlice'
import Spinner from './Spinner'

const StopDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const details = useSelector(state => state.details.details)
    const status = useSelector(state => state.stops.status)


    useEffect(() => {
        id && dispatch(fetchDetails(id))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    return (
        (status === "loading" || (status === 'fetched' && details.length === 0) ? <Spinner /> :

            <div>
                { details.map(i => {
                    const date = new Date(i.when);
                    const options = {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit'
                    };
                    let newDate = new Intl.DateTimeFormat('en-US', options).format(date).toString()
                    return <div className="shadow-md hover:shadow-xl  m-5 rounded-md transition delay-300" key={ Math.random() * 3 }>
                        <div className='text-gray-400 ml-5'>ID:{ id }</div>
                        <div className="text-center pt-2">
                            <h4><b>{ i.stop?.name }</b></h4>
                        </div>
                        <div className='flex justify-between items-center px-10 mt-5'>

                            <p className=''>Direction:</p>
                            <p className=''>{ i.direction }</p>
                        </div>
                        <div className='flex justify-between items-center px-10 mt-5'>

                            <p className=''>When:</p>
                            <p>{ newDate }</p>
                        </div>
                        <div className='flex justify-between items-center px-10 mt-5'>

                            <p className=''>line:</p>
                            <p>{ i.line.mode }</p>
                        </div>
                        <div className='flex justify-between items-center px-10 mt-5 mb-7'>

                            <p className=''>Operator:</p>
                            <p>{ i.line.operator.name }</p>
                        </div>
                        <div className='flex justify-end pb-4'>

                            <StarIcon
                                className='h-5 w-5 text-red-600 hover:scale-150 mr-5 hover:text-yellow-500 cursor-pointer'
                                onClick={ () => dispatch(addFavorites(i.destination)) }
                            />
                        </div>
                        <div className='flex justify-end'>
                            <button
                                onClick={ () => { navigate(`/`) } }
                                className='hover:opacity-100 border-none bg-red-500 text-center text-white mr-5 rounded-md mb-5 px-3 py-2 cursor-pointer inline-block delay-200 opacity-60'>Back</button>

                        </div>
                    </div>

                }) }
            </div>)

    )
}

export default StopDetails
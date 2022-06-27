import { HeartIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Empty from './Empty'
import { fetchStops } from './features/stops/stopsSlice'
import Spinner from './Spinner'
import StopDisplayer from './StopDisplayer'

const Home = () => {

    const [input, setInput] = useState('')
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const stops = useSelector(state => state?.stops?.stops)
    const status = useSelector(state => state.stops.status)

    // const fetchData = async () => {
    //     setIsLoading(true)
    //     const { data } = await axios(`https://v5.vbb.transport.rest/locations?query=${query}`)
    //     setStops(data)
    //     setIsLoading(false)
    // }
    const queryHandler = (e) => {
        // setIsLoading(true)
        e.preventDefault()
        setQuery(input)
    }
    useEffect(() => {
        console.log(stops)
        query && dispatch(fetchStops(query))
    }, [query])


    return (

        <div>
            <div className='flex justify-between pr-5 py-4 items-center gap-10 bg-slate-200 shadow-lg shadow-slate-400'>
                <form className='ml-6 flex-1 mr-10 max-w-4xl' onSubmit={ queryHandler }>
                    {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label> */ }

                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" onChange={ (e) => setInput(e.target.value) } id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Stops..." />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div className='mr-10 ml-10 flex items-center justify-center gap-3'>

                    <HeartIcon
                        className='h-9 w-9 text-red-600 hover:scale-125 cursor-pointer '
                        onClick={ () => navigate('/favorites') } />
                    <h1 className='text-lg text-red-600 font-semibold'>Favorites</h1>
                </div>
            </div>
            {/* CARD */ }

            { status === "loading"
                ? <Spinner /> :
                status === 'idle' ?
                    <Empty/>
                    : stops?.map((stop) => (
                        <div key={ stop.name }>
                            <StopDisplayer
                                stop={ stop }

                            />
                        </div>
                    )
                    )

            }


        </div>)

}

export default Home
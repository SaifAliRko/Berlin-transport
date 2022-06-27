import React, { useEffect } from 'react'
import { StarIcon } from '@heroicons/react/outline'
import { StarIcon as StarIconFilled } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'
import { addFavHandler, addFavorites, removeFavorites } from './features/favorites/favoritesSlice'
import { useDispatch } from 'react-redux'


const StopDisplayer = ({ stop, fav }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <div className="shadow-md hover:shadow-xl  m-5 rounded-md transition delay-300" key={ stop.name }>
      <div className="text-center pt-2">
        <h4><b>{ stop.name }</b></h4>
      </div>
      <p className='px-10 mt-5'>Available Modes of Transport:</p>
      <div className=' flex flex-col items-center p-3'>
        <ol className='list-decimal ' >
          { Object.keys(stop.products).filter((i) => stop.products[i]).map(i => <li key={ Math.random() * 2 }>{ i }</li>) }
        </ol>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={ () => { navigate(`/stopDetails/${stop.id}`) } }
          className='hover:opacity-100 border-none bg-teal-500 text-center text-white mr-5 rounded-md mb-5 px-3 py-2 cursor-pointer inline-block delay-200 opacity-60'>
          Details
        </button>

      </div>

      <div className='flex justify-end pb-4'>
        { fav ?
          <StarIconFilled
            className='h-5 w-5 text-red-600 hover:scale-150 mr-5 hover:text-yellow-500 cursor-pointer'
            onClick={ () => dispatch(removeFavorites(stop.id)) } />
          :
          <StarIcon
            className='h-5 w-5 text-red-600 hover:scale-150 mr-5 hover:text-yellow-500 cursor-pointer'
            onClick={ () => dispatch(addFavorites(stop)) } />
        }    </div>
    </div>
  )
}

export default StopDisplayer
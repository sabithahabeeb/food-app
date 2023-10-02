import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Mealitems(getMeal) {
    console.log(getMeal.data);
    return (
        <div className='card w-80 h-96 m-6  rounded-lg  overflow-auto relative box-border'>

            <img className='w-full' src={getMeal.data.strMealThumb} alt="no image" />
            <div className="info text-rose-500 text-center  ">
                <h2 className='m-0 font-black mt-4'>{getMeal.data.strMeal}</h2>
                <p className='m-0 mt-3 text-base tracking-wide'>{getMeal.data.strArea} food</p>
            </div>
            <div className="recipie text-black-500 text-center">
                <h2 className='mb-2.5 text-3xl text-center font-semibold text-pink-600'>Recipie</h2>
                <p className=' font-serif text-xs font-medium'>{getMeal.data.strInstructions}</p>
                <img className='w-28 h-28 rounded-full block ml-auto mr-auto' src={getMeal.data.strMealThumb} alt="no image" />
                <Link to={`${getMeal.data.strYoutube}`} className='block text-center'>Watch Vedio</Link>
            </div>
        </div>
    )
}

export default Mealitems 
import React, { useState ,useEffect} from 'react'
import Mealitems from './Mealitems'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css'


import shadows from '@mui/material/styles/shadows'

function Meal() {
    const [search,setSearch] = useState()
    const [Mymeal,setMyMeal] = useState()
    const searchMeal=(e)=>{
        if(e.key=="Enter"){
            
              axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((res)=>{
                // console.log(res.data.meals);
                setMyMeal(res.data.meals)
              }).catch((error)=>{
                console.log(error);
              })
            }
        }

    
  return (
    <div className='main'>

        <div className="heading">
            <h1 style={{textShadow:'3px 6px rgba(255,0,0,0.2)'}} className='text-pink-600 text-5xl font-semibold tracking-wide pt-5 text-center '>Search for youre food Name</h1>
            <h4 className='text-pink-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam </h4>
        </div>
        <div className="searchbox text-center m-12">
            <input id='srch' type="search" className='search-bar w-1/2 h-10 border-2 rounded-2xl outline-0 py-1.5 ps-4 pe-4' placeholder='Enterfood Name' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchMeal}/>
        </div>
        <div className="container w-10/12 my-0 mx-auto flex justify-around flex-wrap">

            { (Mymeal==null || Mymeal==="Enter")?(<p className='text-pink-600'>Not found</p>):(Mymeal.map((meal)=>(
            
                   <Mealitems data={meal}/>

            )
                
            ))}
            

        </div>
    </div>
  )
}

export default Meal
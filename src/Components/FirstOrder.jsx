import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function FirstOrder() {

    const slideleft = ()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideright = ()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500 
    }
    // console.log(fetchurl);
    const [fstOrder, setFstOrder] = useState([])
    //    const {categories}= 
    //    console.log(fstOrder);
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => {
            setFstOrder(response.data.categories)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
          <div className='bg-slate-50'>
                <h1 className='text-5xl ml-20 pt-20 font-semibold'>Inspiration for your first order</h1>
                <div className="firstorder relative  items-center flex flex-row p-5 m-8 bg-slate-50">
                <MdChevronLeft onClick={slideleft} size={50} className='opacity-50 cursor-pointer hover:opacity-100'/>
    
                    <div id='slider' style={{width:'70rem'}} className='w-50 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex flex-row scrollbar-hide p-8 m-8 '>
    
                        {
                            fstOrder.map(item => (
                                <>
                                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-2  cursor-pointer hover:scale-105 ease-in-out duration-300' src={`${item.strCategoryThumb}`} alt="no image" />
                                    <h3 className='text-2xl pt-40 pr-20 font-semibold'>{`${item.strCategory}`}</h3>
                                </>
                            ))
                        }
    
                    </div>
                    <MdChevronRight onClick={slideright} size={50} className='opacity-50 cursor-pointer hover:opacity-100'/>
    
                </div>
          </div>
        </>
    )
}

export default FirstOrder
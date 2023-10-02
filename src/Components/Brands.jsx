// import React from 'react'
import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'



function Brands() {

    const slidelef = ()=>{
        var slider = document.getElementById('sliders')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const sliderigh = ()=>{
        var slider = document.getElementById('sliders')
        slider.scrollLeft = slider.scrollLeft + 500 
    }


    return (
        <div className='bg-slate-50'>

            <h1 className='text-5xl ml-20 pt-20 font-semibold'>Top brands for you</h1>
            <div className='firstorder relative  items-center flex flex-row p-5 m-8 bg-slate-50'>
                <MdChevronLeft onClick={slidelef} size={50} className='opacity-50 cursor-pointer hover:opacity-100' />
                <div id='sliders' style={{ width: '70rem' }} className='w-50 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex flex-row scrollbar-hide p-8 m-8 '>
                    <img className='border  rounded-full w-[200px] h-[200px] inline-block p-8  m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png?output-format=webp" alt="no image" />

                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/fa7df5f0a33f6171e7ce6131de3c3806_1617920053.png?output-format=webp" alt="no image" />

                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433844.png?output-format=webp" alt="no image" />

                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5  cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png?output-format=webp" alt="no image" />

                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983699.png?output-format=webp" alt="no image" />


                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188086.png?output-format=webp" alt="no image" />


                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550059625.png?output-format=webp" alt="no image" />


                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/56e7ec2081ea63652b32f7adfae59c09_1601878762.png?output-format=webp" alt="no image" />

                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672382455.png?output-format=webp" alt="no image" />


                    <img className='border  rounded-full w-[250px] h-[250px] inline-block p-8 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300' src="https://b.zmtcdn.com/data/brand_creatives/logos/af1c8775dd8883af029397b7706fa055_1599463973.png?output-format=webp" alt="no image" />

                </div>
                <MdChevronRight onClick={sliderigh} size={50} className='opacity-50 cursor-pointer hover:opacity-100'/>

            </div>

        </div>
    )
}

export default Brands
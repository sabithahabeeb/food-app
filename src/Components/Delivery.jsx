import React from 'react'

function Delivery() {
  return (
   <div className='flex flex-row justify-between'>
      <div className='flex flex-row justify-start ml-20'>
  
          <div className='flex flex-row justify p-5'>
              <img height={'30px'} width={'30px'} src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="" />
              <h3 className='text-1xl p-2 text-pink-600 font-semibold'>Delivery</h3>
          </div>
  
          <div className='flex flex-row justify p-5'>
              <img height={'30px'} width={'30px'} src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" alt="" />
              <h3 className='text-1xl p-2 text-gray-600 font-semibold'>Dining Out</h3>
          </div>
  
          <div className='flex flex-row justify p-5'>
              <img height={'30px'} width={'30px'} src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" alt="" />
              <h3 className='text-1xl p-2 text-gray-600 font-semibold'>Night Life</h3>
          </div>
      </div>
      <div>
        <img className='w-[100px] h-[100px] mr-52 mb-2 p-15' src="https://couponswala.com/blog/wp-content/uploads/2020/07/zomato-online-order.jpg" alt="no image" />
      </div>
   </div>
  )
}

export default Delivery
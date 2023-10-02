import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className='flex flex-row justify-evenly bg-red-600'>
        <img width={'200px'} height={'200px'} src="https://b.zmtcdn.com/images/zomato_white_logo_new.svg" alt="" />
        <Box className='p-5'
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField className='bg-neutral-100 rounded' fullWidth label="Search food Item" id="fullWidth" />
        </Box>
        <Link className='p-5 font-bold text-xl text-gray-400 '>Log in</Link>
        <Link className='p-5 font-bold text-xl text-gray-400'>Sign Up</Link>
      </div>

      <div className='flex flex-row justify-start ml-20 p-5'>
        <Link className='p-3'>Home  /</Link>
        <Link className='p-3'>India  /</Link>
        <Link className='p-3 text-gray-400'>Kochi Restaurent</Link>
      </div>
    </>
  )
}

export default Nav
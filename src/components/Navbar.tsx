import './Navbar.css'

import {AiFillYoutube} from 'react-icons/ai'
import React from 'react'

function Navbar() {
  return (
    <div className='flex shadow-md bg-white'>
        <a href='/' className='mr-auto px-3 py-1'>
            <img src='/tlab.png' className='w-[64px] h-[64px]'/>
        </a>
        <div className='flex ml-auto nav-link px-3'>
            <a href='#'><AiFillYoutube/></a>
            <a href='#'><AiFillYoutube/></a>
            <a href='#'><AiFillYoutube/></a>
            <a href='#'><AiFillYoutube/></a>
        </div>
    </div>
  )
}

export default Navbar
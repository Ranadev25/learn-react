import React from 'react'
import NavberTop from "./NavberTop"
import SearchMenu from './SearchMenu'

const Navber = () => {
  return (
    <div className='relative bg-[#F85606] px-5 '>
      <NavberTop />
      <SearchMenu/>
    </div>
  )
}

export default Navber
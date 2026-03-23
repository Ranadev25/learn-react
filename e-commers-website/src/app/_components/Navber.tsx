import React from 'react'
import NavberTop from "./NavberTop"
import SearchMenu from './SearchMenu'

const Navber = () => {
  return (
    <div className=' bg-[#F85606] px-5 sticky top-0  z-20 '>
      <NavberTop />
      <SearchMenu/>
    </div>
  )
}

export default Navber;
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const showSideBar = useSelector((store)=>store.app.isMenuOpen)
  return (
   showSideBar && <div className='p-5 shadow-lg bg-white w-60'>
    <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
    <h1 className='font-bold pt-5'>Subsciption</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
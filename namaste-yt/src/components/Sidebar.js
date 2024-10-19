import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utills/store'
import { Link } from 'react-router-dom'
// import {isMenuOpen} from "";

const Sidebar = () => {
  const ismenuOpen = useSelector((store)=>store.app.isMenuOpen)
  //Early return
  if(!ismenuOpen) return null;

  return (
    <div className='p-5 w-48 shadow-lg'>
        <ul>
            <Link to={"/"}><li>Home {ismenuOpen}</li></Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Libe</li>
        </ul>

        <h1 className=' font-bold pt-2'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <h1 className=' font-bold pt-2'>Watch Later</h1>
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
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='min-w-[18%] h-screen p-7 border-r-2 border-zinc-600 text-white whitespace-none '>
        <div className='w-full flex justify-start items-center mb-7 '>
            <img src="/tv-fill.svg" alt="" className='w-7 h-7' />
            <h1 className='text-xl font-bold ml-3'>CineNime</h1>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-10'>New Feeds</h2>
            <Link to="/trending" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className=" ri-fire-fill mr-2"></i>Trending</Link>
            <Link to="/popular" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className=" ri-bard-fill mr-2"></i>Popular</Link>
            <Link to="/movie" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className=" ri-movie-2-fill mr-2"></i>Movies</Link>
            <Link to="/tv" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className=" ri-tv-2-fill mr-2"></i>TV Shows</Link>
            <Link to="/people" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className=" ri-team-fill mr-2"></i>People</Link>
        </div>
        <hr className='border-none bg-zinc-600 w-full h-0.5' />
        <div>
            <h2 className='text-xl font-semibold mt-10'>Website Information</h2>
            <Link to="/about" className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className="ri-information-2-fill mr-2"></i>About </Link>
            <Link to='/contact' className='p-3 hover:bg-[#6556cd36] bg-transparent-200 rounded my-3 duration-200 block'><i className="ri-phone-fill mr-2"></i>Contact Us</Link>
        </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-10">
  <Link className="text-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-3 border-white rounded-full leading-none mb-0 px-7" to='/projects'>
    work
  </Link>

  <Link className="text-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-3 border-white rounded-full leading-none mb-0 px-7" to='/agence'>
    agency
  </Link>
</div>
  )
}

export default HomeBottomText